// Tạo một hệ thống quản lý menu cho nhà hàng trong đó:

// Mỗi danh mục sẽ có một số món ăn.
// Mỗi món ăn trong danh mục sẽ có thông tin: tên món ăn, giá và mô tả.
// Các chức năng:

// Thêm món ăn vào danh mục.
// Xóa món ăn theo tên khỏi danh mục.
// Cập nhật thông tin theo tên của món ăn  (tên, giá, mô tả).
// Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.
// Tìm kiếm món ăn theo tên trong toàn bộ menu.
// Thoát
function addProduct(array) {
    let id;
    if (array.length === 0) {
        id = 1;
    } else {
        id = array[array.length - 1].id + 1;
    }

    let name = prompt("Nhập tên sản phẩm:");
    let price = +prompt("Nhập giá sản phẩm:");
    if (!Number.isInteger(price) || price <= 0) {
        console.log("Giá sản phẩm không hợp lệ.");
        return;
        // Kết thúc hàm nếu giá không hợp lệ
    }

    let category = prompt("Nhập danh mục sản phẩm:");
    let quantity = +prompt("Nhập số lượng sản phẩm:");
    if (!Number.isInteger(quantity) || quantity <= 0) {
        console.log("Số lượng không hợp lệ.");
        return;
        // Kết thúc hàm nếu số lượng không hợp lệ
    }

    array.push({ id, name, price, category, quantity });
    console.log("Sản phẩm đã được thêm thành công!");
}
