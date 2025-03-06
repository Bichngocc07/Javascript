const mangSoNguyen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let soLanXuatHien = 0;
  for (let i = 0; i < mang.length; i++) {
    if (mang[i] === soCanTim) {
      soLanXuatHien++;
    }
  }
  return soLanXuatHien;
const soNguyenCanTim = parseInt(prompt("Nhập vào một số nguyên: "));

const ketQua = demSoLanXuatHien(mangSoNguyen, soNguyenCanTim);

console.log(`Số lần xuất hiện của số ${soNguyenCanTim} trong mảng là: ${ketQua}`);

