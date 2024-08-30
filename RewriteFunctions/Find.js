var a = [5, 7, 9];

Array.prototype.myFind = function(callback) {
    let result;
    var length = this.length;
    for (let i = 0; i < length; i++) {
        let isFound = callback(this[i], i, this)
        if (isFound) {
            result = this[i];
            break; //ngat vong lap neu tim thay gia tri thoa dieu kien
        }
    }
    return result;
}
var b = a.myFind((item) => {
    return item = 5;
})
console.log('The value is found: ' + b);