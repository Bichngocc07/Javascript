let arr = [];
let n = +prompt("Nhập vào số phần tử của mảng: ");
let str = "";
if (n > 0) {
    for (let i = 0; i < n; i++) {
        let input = prompt(`Nhập vào phần tử thứ ${i + 1}: `);
        arr.push(input);
    }
    for (let i = 0; i < n; i++) {
        if (Number.isInteger(parseInt(arr[i]))) {
            str += arr[i] + " ";
        }
    }
    console.log(str.trim());
} else {
    console.log("Mảng không có phần tử");
}