function findRotationCount(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    if (arr[rightIdx] > arr[leftIdx]) {
        return 0;
    }
    while (rightIdx >= leftIdx) {
        let middleIdx = Math.floor((rightIdx + leftIdx) / 2);
        let leftVal = arr[leftIdx];
        let rightVal = arr[rightIdx];
        let midVal = arr[middleIdx];
        let isLastTwo = rightIdx - leftIdx == 1;
        if (!isLastTwo && midVal < leftVal) {
            rightIdx = middleIdx;
        } else if (!isLastTwo && midVal > rightVal) {
            leftIdx = middleIdx;
        } else if (midVal > arr[middleIdx + 1]) {
            return middleIdx + 1;
        } else if (isLastTwo && rightVal < leftVal) {
            return rightIdx;
        } else if (isLastTwo && rightVal > leftVal) {
            return 0;
        }
    }
    return -1;
}

module.exports = findRotationCount;
