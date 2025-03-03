let loai_tien = prompt("Bạn muốn đổi từ VND sang USD hay USD sang VND? Nhập 'VND' hoặc 'USD':");
let so_tien =(prompt("Nhập số tiền:"));
if (loai_tien === "VND") {
    let ket_qua = doi_tien_vnd_sang_usd(so_tien);
    console.log(`${so_tien} VND = ${ket_qua.toFixed(2)} USD`);
} else if (loai_tien === "USD") {
    let ket_qua = doi_tien_usd_sang_vnd(so_tien);
    console.log(`${so_tien} USD = ${ket_qua} VND`);
} else {
    console.log("Loại tiền không hợp lệ. Vui lòng nhập 'VND' hoặc 'USD'.");
}