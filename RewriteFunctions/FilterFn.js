var a = [5, 7, 9];

Array.prototype.filterFn = function(callbackfn) {
    let newArr = [];
    var length = this.length;
    for (let i = 0; i < length; i++) {

        newArr.push(callbackfn(this[i], i, this));
        console.log("newArr = ", newArr);
    }
    return newArr;
}
var b = a.filterFn((item, index, array) => {
    return item > 6;
})
console.log('The new array after use filterFn: ' + b);