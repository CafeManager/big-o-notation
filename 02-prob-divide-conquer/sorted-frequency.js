function sortedFrequency(arr, val) {
    let leftSideIdx = leftSearch(arr, val);
    let rightSideIdx = rightSearch(arr, val);

    if (leftSideIdx == -1 || rightSideIdx == -1) {
        return -1;
    }
    return rightSideIdx - leftSideIdx + 1;
}

function leftSearch(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];
        let nextVal = arr[middleIdx + 1];

        if (arr[0] == val) {
            return 0;
        }
        if (arr[arr.length - 1] < val) {
            return 0;
        }
        if (middleVal >= val) {
            rightIdx = middleIdx - 1;
        } else if (middleVal != val && nextVal == val) {
            return middleIdx + 1;
        } else if (middleVal != val && nextVal != val) {
            leftIdx = middleIdx + 1;
        }
    }
    return -1;
}

function rightSearch(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];
        let nextVal = arr[middleIdx + 1];

        if (arr[arr.length - 1] == val) {
            return arr.length - 1;
        }
        if (arr[arr.length - 1] < val) {
            return -1;
        }

        if (middleVal < val || (middleVal == val && nextVal == val)) {
            leftIdx = middleIdx + 1;
        } else if (middleVal > val) {
            rightIdx = middleIdx - 1;
        } else if (middleVal == val && nextVal != val) {
            return middleIdx;
        }
    }
    return -1;
}

module.exports = sortedFrequency;
