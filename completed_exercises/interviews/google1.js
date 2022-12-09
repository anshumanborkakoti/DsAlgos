/**
 * Given n rooms and m appointments with start and duration, find the room(s) which are most occupied.
 * 
 * 
 * Pseudo code
 * sort the appointments by start time
 * create a free Room array
 * loop through the appointments
 * endtime = startTime+duration
 * if the current room's endTime is less than startTime, push the appointment and update endTime
 * If the room's endTime is after the startTime, move to the next room
 * store the endTime and index of the room by comparing with eariler least end time
 * If at the end of the array if no rooms are available, increase startTime by the earliest lest endtime
 * and add to the room at that index.
 * 
 * sort the rooms and pop all rooms with the same end time
 */

const busyRooms = (rooms, appointments) => {
    const freeRooms = new Array(rooms);
    let leastEndTime = null;
    let leastEndTimeRoomIndex = null;
    appointments.sort((a, b) => a[0] - b[0]);
    // console.log(appointments)
    for (let appointment of appointments) {
        const [startTime, duration] = appointment;
        const appEndTime = startTime + duration;
        for (let i = 0; i < freeRooms.length; i++) {
            //console.log(freeRooms[i])
            if (!freeRooms[i] || startTime >= freeRooms[i]) {
                freeRooms[i] = appEndTime;
                break;
            }
            if (!leastEndTime || freeRooms[i] < leastEndTime) {
                leastEndTime = freeRooms[i];
                leastEndTimeRoomIndex = i;
            }
            if (i === freeRooms.length - 1) {
                //last room
                freeRooms[leastEndTimeRoomIndex] = appEndTime;
            }

        }
    }
    let result = null;
    let prev = -1;
    for (let i = 0; i < freeRooms.length; i++) {
        if (freeRooms[i] && freeRooms[i] >= prev) {
            prev = freeRooms[i];
            result = i + 1;
        }
    }
    return result;
}

console.log(busyRooms(5, [[10, 2], [11, 4], [12, 6], [10, 5], [8, 2]]))