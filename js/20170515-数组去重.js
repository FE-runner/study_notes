var target = [1, 2, 34, 52, 65, 2, 1, 88, 32, 56, 99, 10, 23, 88, 54, 65, 77];

// Array.prototype.form(new Set(target))

// json方法 
(function () {
    const json = {};
    target.forEach((item) => {
        json[item] = -1;
    });
    const result = [];
    Object.keys(json).forEach((item) => {
        result.push(Number(item));
    });
    console.log(result);
})();
// from set
(function () {
    const result = Array.from(new Set(target));
    console.log(result);
})();
// sort+splice
(function () {
    target.sort();
    for (let i = 0; i < target.length; i++) {
        if (i !== 0 && target[i - 1] === target[i]) {
            target.splice(i - 1, 1);
            i--;
        }
    }
    console.log(target);
})();
var target = [1, 2, 34, 52, 65, 2, 1, 88, 32, 56, 99, 10, 23, 88, 54, 65, 77];
// findInArr
(function () {
    function findInArr (item, arr) {
        for (let i = 0; i < arr.length; i++) {
            if (item === arr[i]) {
                return true;
            }
        }
        return false;
    }
    const result = [];
    for (let i = 0; i < target.length; i++) {
        if (!findInArr(target[i], result)) {
            result.push(target[i]);
        }
    }
    console.log(result);
})()
;
