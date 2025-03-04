let number = prompt("Moi ban nhap so");
let check = 0;

for (let i = 0; i < number.length / 2; i++) {
    if (number[i] !== number[number.length - 1 - i]) {
        check++;
    }
}

if (check === 0) {
    console.log("Chuỗi này là chuỗi đối xứng");
} else {
    console.log("Chuỗi này không phải là chuỗi đối xứng");
}
