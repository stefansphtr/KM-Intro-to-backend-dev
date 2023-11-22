// import module dari dependency
const { Random } = require("random-js");

// membuat instance dari Random
const random = new Random();
// menghasilkan angka random dari 1 - 100
console.log(random.integer(1, 100));

// import dari modul sendiri
const moduleKita = require("./module-kita.js");
// memanggil fungsi say dari module-kita.js
moduleKita.say("Hello RevoU Student!");

// import dari built-in module
const fs = require("fs");

// membaca file myText.txt
fs.readFile("./myText.txt", "utf-8", (err, data) => {
  // jika terjadi error, tampilkan error
  if (err) {
    console.log(err);
  } else {
    // jika berhasil, tampilkan isi file
    console.log(data);
  }
});
