let toan = parseFloat(prompt("Nhập điểm môn Toán:"));
let van = parseFloat(prompt("Nhập điểm môn Văn:"));
let anh = parseFloat(prompt("Nhập điểm môn Anh:"));

let diemTrungBinh = (toan + van + anh) / 3;
let xepLoai;
if (diemTrungBinh >= 8.0) {
    xepLoai = "Giỏi";
} else if (diemTrungBinh >= 6.5) {
    xepLoai = "Khá";
} else if (diemTrungBinh >= 5.0) {
    xepLoai = "Trung bình";
} else {
    xepLoai = "Yếu";
}

console.log(`Điểm trung bình: ${diemTrungBinh.toFixed(2)}`);
console.log(`Xếp loại học lực: ${xepLoai}`);
