let n = +prompt("Mời bạn nhập số lượng phần tử");
let arr = [];
let negativeCount = 0; 
for (let i = 0; i < n; i++) {
    let num = +prompt(`Mời bạn nhập phần tử thứ ${i + 1}`);
    arr.push(num);
    if (num < 0) {
        negativeCount++;
    }
}1221
console.log(`Mảng: [${arr}]`);
console.log(`Số lượng phần tử âm: ${negativeCount}`);