let n = +prompt("Nhập vào số lượng phần tử của mảng: ");
let arr = [];

if (n < 2) {
    console.log("Cần ít nhất 2 phần tử để tìm số lớn thứ hai.");
} else {
    for (let i = 0; i < n; i++) {
        let input = +prompt(`Nhập vào phần tử thứ ${i + 1}: `);
        arr.push(input);
    }

    let max = -Infinity;
    let secondMax = -Infinity;

    for (let i = 0; i < n; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] !== max) {
            secondMax = arr[i];
        }
    }

    if (secondMax === -Infinity) {
        console.log("Không có số lớn thứ hai.");
    } else {
        console.log("Số lớn thứ hai là:", secondMax);
    }
}