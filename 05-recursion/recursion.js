/** product: calculate the product of an array of numbers. */

function product(nums) {
    if (nums.length == 0) {
        return 1;
    }
    return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
    if (words.length == 0) {
        return 0;
    }

    let word = words.pop();
    let otherWordLength = longest(words);
    if (word.length > otherWordLength) {
        return word.length;
    } else {
        return otherWordLength;
    }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
    if (str.length == 0) {
        return "";
    }

    if (str.length % 2 == 1) {
        return everyOther(str.slice(0, str.length - 1)) + str[str.length - 1];
    } else {
        return everyOther(str.slice(0, str.length - 1));
    }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
    if (str.length == 1 || str.length == 0) {
        return true;
    } else if (str[0] == str[str.length - 1]) {
        return isPalindrome(str.slice(1, str.length - 1));
    } else {
        return false;
    }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
    if (arr[0] == val) {
        return 0;
    } else if (arr.length == 0) {
        return -1;
    }

    let acc = findIndex(arr.slice(1), val);
    if (acc == -1) {
        return 0 + acc;
    } else {
        return acc + 1;
    }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
    if (str.length == 0) {
        return "";
    }
    const reverse = revString(str.slice(1)) + str[0];
    return reverse;
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
    const keys = Object.keys(obj);
    let strings = [];

    if (keys.length) {
        if (typeof obj[keys[0]] == "string") {
            strings.push(obj[keys[0]]);
            delete obj[keys[0]];
        } else if (typeof obj[keys[0]] == "object") {
            strings = gatherStrings(obj[keys[0]]);
            delete obj[keys[0]];
        } else {
            delete obj[keys[0]];
        }
    } else {
        return [];
    }
    let otherStrings = gatherStrings(obj);
    return [...strings, ...otherStrings];
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
    let rightIndex = arr.length - 1;
    let leftIndex = 0;
    let middleIndex = Math.floor(leftIndex + rightIndex / 2);
    let index;
    console.log(arr);
    if (arr.length == 1 && arr[0] != val) {
        return -1;
    }
    if (arr[middleIndex] > val) {
        let otherIndex = binarySearch(arr.slice(0, middleIndex), val);
        if (otherIndex == -1) {
            return otherIndex;
        }
        index = middleIndex - otherIndex - 1;
    } else if (arr[middleIndex] < val) {
        let otherIndex = binarySearch(
            arr.slice(middleIndex + 1, rightIndex + 1),
            val
        );
        if (otherIndex == -1) {
            return otherIndex;
        }
        index = middleIndex + otherIndex + 1;
    } else if (arr[middleIndex] == val) {
        return middleIndex;
    }
    return index;
}

module.exports = {
    product,
    longest,
    everyOther,
    isPalindrome,
    findIndex,
    revString,
    gatherStrings,
    binarySearch,
};
