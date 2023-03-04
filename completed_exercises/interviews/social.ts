
import { Component, OnInit, OnDestroy } from "@angular/core";
import { SocialService } from "./social.service";
import { Subscription } from 'rxjs';
@Component({
    selector: "app-social",
    template: `<div class="app-wrapper">
                    <h1>My friends</h1>
                    <h3 *ngIf="isError">
                    {{errorMessage}}
                    </h3>
                    <ul>
                    <li *ngFor="let friend of friendsData; let i=index" [attr.data-test-id]="getId('li',friend)">
                    {{friend.name}}
                    <button type="button" (click)="onLike(friend,i)" [attr.data-test-id]="getId('button',friend)" [disabled]="friend.disabled">Like {{friend.likeCount}}</button>

                    </li>
                    </ul>
                    </div> `
})
export class SocialComponent implements OnInit, OnDestroy {
    private friendsDataSubs: Subscription;
    private likeFriendsSub: Subscription;
    errorMessage: string;
    constructor(private socialService: SocialService) { }
    friendsData: any[] = [];
    isError = false;

    private sortFriends(a, b) {
        return b.likeCount - a.likeCount;
    }
    ngOnInit() {
        this.friendsDataSubs = this.socialService.getFriends().subscribe(({ body: { friends } }) => {
            console.log("friends fetched")
            this.errorMessage = "";
            this.isError = false;
            this.friendsData = friends.map(aFriend => ({ ...aFriend, disabled: false }));
            console.log('sorting', this.friendsData)
            this.friendsData.sort(this.sortFriends);
            if (friends.length > 5) {
                this.friendsData = this.friendsData.slice(0, 5);
            }
        }, error => {
            this.errorMessage = "Fetching friends has failed";
            this.friendsData = [];
            this.isError = true;
        }
        );
    }
    getId(prefix, friend) {
        return `${prefix}-${friend.name.toLowerCase()}`
    }
    onLike(friend, index) {
        console.log("liked", index)
        this.likeFriendsSub = this.socialService.likeFriend(friend.name).subscribe(({ body: { likeCount } }) => {
            console.log(likeCount)
            this.errorMessage = "";
            this.isError = false;
            friend.disabled = true;
            this.friendsData.splice(index, 1, { ...friend, likeCount })
            this.friendsData.sort(this.sortFriends);
        }, error => {
            this.errorMessage = "Liking friend has failed";
            this.isError = true;
        });
        this.likeFriendsSub.unsubscribe();
    }
    ngOnDestroy() {
        this.friendsDataSubs.unsubscribe();
    }
}
