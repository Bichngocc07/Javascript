let number = prompt("Nhập một số nguyên:");
if (number !== null) {
    number = parseInt(number);
    if (number % 2 === 0) {
        console.log(`Số ${number} là số chẵn.`);
    } else {
        console.log(`Số ${number} là số lẻ.`);
    }
} else {
    console.log("Đã hủy nhập số.");
}
