function findRotatedIndex(arr, val) {
    let pivot = getRotationPoint(arr);

    let leftIdx;
    let rightIdx;
    if (val <= arr[pivot] && val >= arr[0]) {
        leftIdx = 0;
        rightIdx = pivot;
    } else {
        leftIdx = pivot + 1;
        rightIdx = arr.length - 1;
    }

    while (rightIdx >= leftIdx) {
        let middleIdx = Math.floor((rightIdx + leftIdx) / 2);
        let midVal = arr[middleIdx];


        if (midVal > val) {
            rightIdx = middleIdx - 1;
        } else if (midVal < val) {
            leftIdx = middleIdx + 1;
        } else if (val == midVal) {
            return middleIdx;
        }
    }
    return -1;
}

function getRotationPoint(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

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
            return middleIdx;
        } else if (isLastTwo && rightVal < leftVal) {
            return leftIdx;
        } else if (isLastTwo && rightVal > leftVal) {
            return -1;
        }
    }
    return -1;
}


module.exports = findRotatedIndex;
