function findFloor(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (rightIdx >= leftIdx) {
        let middleIdx = Math.floor((rightIdx + leftIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal <= val && arr[middleIdx + 1] > val) {
            return middleVal;
        } else if (arr[middleIdx] > val) {
            rightIdx = middleIdx - 1;
        } else if (middleVal < val && arr[middleIdx + 1] < val) {
            leftIdx = middleIdx + 1;
        } else if (
            (middleVal <= val && arr[middleIdx + 1] > val) ||
            middleIdx == arr.length - 1
        ) {
            return middleVal;
        }

    }
    return -1;
}

module.exports = findFloor;
