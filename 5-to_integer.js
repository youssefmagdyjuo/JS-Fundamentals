const arg = process.argv[2]; 
const num = parseInt(arg); // تحويل القيمة إلى عدد صحيح

if (!isNaN(num)) {
console.log("My number:" + num);
} else {
console.log("Not a number");
}
// 5-to_integer.js