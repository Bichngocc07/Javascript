let number = 0;
for (let i = 0; i < 5; i++) {
    let num = parseInt(prompt("Nhập số nguyên thứ " + (i + 1) + ": "));
    number.push(num);
}
let tong = 0;
for (let num of number) {
    if (num % 2 !== 0) {
        tong += num;
    }
}
document.write("Tổng các số lẻ bạn vừa nhập là: " + tong);