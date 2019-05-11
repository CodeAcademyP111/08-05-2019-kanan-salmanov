// // 1-ci tapshiriq (dublicate)

// var arr = [15, 45, 16, 15, 16, 17, 17, 18];
// var s = [];

// function dublicate() {
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j <= i; j++) {
//             if ((arr[i] == arr[j]) && (i != j)) {
//                 s.push(this.arr[i]);
//             }
//         }
//     }
//     console.log(s);
// }
// dublicate();



// 2-ci tapsiriq (Date)

var date = new Date();
var includedDate = new Date(2018, 4, 10, 19, 09);

var dif = date.getTime() - includedDate.getTime();
if (dif < 3600000) {
    console.log(parseInt(dif / 1000 / 60) + " deqiqe once");
} else if (dif < 86400000) {
    console.log(parseInt(dif / 1000 / 60 / 60) + " saat once");
} else if (dif < 259200000) {
    console.log(parseInt(dif / 1000 / 60 / 60 / 24) + " gun once");
} else if (dif < 604800000) {
    console.log(parseInt(dif / 1000 / 60 / 60 / 24) + " bu hefte");
} else {
    console.log(date.getDay() + '.' + date.getMonth() + '.' + date.getFullYear());
}