function countZeroes(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];
        let nextVal = arr[middleIdx + 1];

        if (arr[0] == 0) {
            return arr.length;
        }
        if (arr[arr.length - 1] == 1) {
            return 0;
        }
        if (middleVal == 0) {
            rightIdx = middleIdx - 1;
        } else if (middleVal == 1 && nextVal == 1) {
            leftIdx = middleIdx + 1;
        } else if (middleVal == 1 && nextVal == 0) {
            return arr.length - 1 - middleIdx;
        }
    }
    return -1;
}

module.exports = countZeroes;
