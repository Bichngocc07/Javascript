function kiemTraSoNguyen(number) {
    if (number > 0 && Number.isInteger(number)) {
        let flag = 0;
        for (let i = 1; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                flag++;
            }
        }
        if (flag == 1) {
            console.log("Là số nguyên tố");
        } else {
            console.log("Không phải là số nguyên tố");
        }
    } else {
        console.log("Số không hợp lệ");
    }
}
let n = parseInt(prompt("Nhập một số:"));
kiemTraSoNguyen(n);
