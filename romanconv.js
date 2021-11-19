
process.stdin.setEncoding('utf8');
var name;
var romanNum = new Array();
romanNum = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];

var dNum = new Array();
dNum = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
function decimalRoman(value) {
   if (value <= 0 || value >= 4000)
      return value;
   var romanNumeral = "";
   for (var i = 0; i<romanNum.length; i++) {
      while (value >= dNum[i]) {
         value -= dNum[i];
         romanNumeral += romanNum[i];
      }
   }
   return romanNumeral;
}
console.log("introduzca un numero ")
process.stdin.on('readable', function() {
    name = process.stdin.read();
    if (name !== null) {
        console.log(decimalRoman(name));
        process.exit();
    }
});
module.exports=decimalRoman;