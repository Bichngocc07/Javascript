function chiaMang() {
    let mangString = prompt("Nhập mảng (các phần tử cách nhau bằng dấu phẩy):");
    let mang = mangString.split(",").map(Number);
    let kichThuoc = parseInt(prompt("Nhập kích thước của mảng con:"));

    let ketQua = [];
    for (let i = 0; i < mang.length; i += kichThuoc) {
        ketQua.push(mang.slice(i, i + kichThuoc));
    }
    return ketQua;
}
console.log(chiaMang());