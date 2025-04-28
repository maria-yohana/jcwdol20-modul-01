// Date: -> tidak masuk primivite /non primiitive karena bisa string, bisa number
let now: Date = new Date();
console.log(now);
//disesuaikan dengan local time
console.log(now.toLocaleDateString("id-ID")); 

console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getDate());
console.log(now.getMonth());
//januari bulan 0, minggu hari 0
console.log(now.getDay());
//perbandingan dari tahun 1970
console.log(now.getTime());

