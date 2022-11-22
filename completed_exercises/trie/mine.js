class Dictionary {

    constructor() {
        this.root = new TrieNode();
    }

    suggest(searchWord) {
        let result = [];
        let lastNodeArr = this.find(searchWord)
        if (lastNodeArr.length === 0) {
            return [];
        }
        for (let suggestion of lastNodeArr[0].suggest(searchWord.substring(0, searchWord.length - 1))) {
            result.push(suggestion)
        }
        return result;
    }

    find(word) {
        let result = [];
        for (let node of this.root.children[word[0]].findLastNode(word, this.root.children[word[0]])) {
            result.push(node);
        }
        return result;
    }

    insert(word) {
        if (!this.root.children[word[0]]) {
            this.root.children[word[0]] = new TrieNode(word[0]);
        }
        this.root.children[word[0]].insert(word.substring(1));
    }


}



class TrieNode {

    constructor(aChar) {
        this.char = aChar;
        this.children = {};
        this.isEndOfWord = false;
    }

    insert(word) {
        if (!word) {
            this.isEndOfWord = true;
            return;
        }
        const firstChar = word[0];
        if (!this.children[firstChar]) {
            this.children[firstChar] = new TrieNode(firstChar);
        }
        this.children[firstChar].insert(word.substring(1));

    }

    *suggest(prev) {
        if (!prev) {
            prev = this.char;
        } else {
            prev += this.char;
        }
        if (this.isEndOfWord) {
            yield prev;
        }
        for (let key of Object.keys(this.children)) {
            yield* this.children[key].suggest(prev);
        }

    }

    *findLastNode(word, currentNode, currentIndex = 0, found = true) {
        if (currentIndex >= word.length || !found) {
            return;
        }

        found = found && this.char === word[currentIndex];
        console.log(`word ${word} this.char ${this.char} ${Object.keys(this.children)} currentIndex ${currentIndex} found ${found}`)
        if (found && currentIndex === word.length - 1) {
            console.log(`returning ${this.char}`)
            yield this;
        }
        for (let key of Object.keys(this.children)) {
            yield* this.children[key].findLastNode(word, currentNode, ++currentIndex, found);
        }
    }
}

const d = new Dictionary();
d.insert("dog");
d.insert("doggy");
d.insert("dogathon");
d.insert("dogbert");
d.insert("done")
d.insert("doodle")
console.log(d.suggest("do"))
  //console.log("don") ("doo") // TODO=fix