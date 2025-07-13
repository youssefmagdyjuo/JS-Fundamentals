const arg = process.argv[2]; // أول argument بعد اسم الملف

if (arg === undefined) {
  console.log("No argument");
} else {
  console.log(arg);
}
