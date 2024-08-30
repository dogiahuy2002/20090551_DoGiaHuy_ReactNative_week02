var a = [5, 7, 9];

Array.prototype.mapFn = function(callbackfn) {
    let newArr = [];
    var length = this.length;
    for (let i = 0; i < length; i++) {
        //console.log('cb', callbackfn(this[i]));
        newArr.push(callbackfn(this[i]));
        console.log("newArr = ", newArr);
    }
    return newArr;
}
var b = a.mapFn((item) => {
    console.log(item);
    return item += 5;
})
console.log('The new array after use mapFn: ' + b);