let number = Number(prompt("Hãy nhập vào chuỗi bất kỳ"));
if (Number.isInteger(number)) {
    let off = number.toString().split("");
    let max = off[0];
    for (let i = 0; i < off.length; i++) {
        if (max < off[i]) {
            max = off[i];
        }
    }
    console.log("Số lớn nhất trong chuỗi là: " + max);
}
else{
    console.log("Dãy số không hơpp lệ")
}