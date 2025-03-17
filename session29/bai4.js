function updateProductById(array) {
    let id = +prompt("Mời bạn nhập id:");

    let newProductIndex = array.findIndex(item => item.id == id);

    if (newProductIndex === -1) {
        console.log("${id} không có trong mảng");
    } else {
        array[newProductIndex].name = prompt("Nhập tên:");
        check(array[newProductIndex].name);

        array[newProductIndex].price = prompt("Nhập giá:");
        check(array[newProductIndex].price);

        array[newProductIndex].category = prompt("Nhập danh mục:");
        check(array[newProductIndex].category);

        array[newProductIndex].quantity = prompt("Nhập số lượng:");
        if (!Number.isInteger(+array[newProductIndex].quantity) || array[newProductIndex].quantity < 0) {
            console.log("Số lượng phải đúng định dạng!");
            array[newProductIndex].quantity = prompt("Nhập lại số lượng:");
        }

        console.log(array);
    }
}
function check(a) {
    while (!a || a.trim() === "") {
        console.log("Lỗi!");
        a = prompt("Mời nhập lại:");
    }
}
let products = [
    { id: 1, name: "Sản phẩm A", price: 100, category: "Loại 1", quantity: 10 },
    { id: 2, name: "Sản phẩm B", price: 200, category: "Loại 2", quantity: 5 }
];
updateProductById(products);
