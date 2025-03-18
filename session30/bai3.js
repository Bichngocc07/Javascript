let phoneStore = [];
let cart = [];

function displayPhonesByCompany(phoneStore) {
    let company = prompt("Nhập hãng điện thoại muốn xem (Ví dụ: Samsung, Apple, Xiaomi):").toLowerCase();
    let phones = phoneStore.filter(phone => phone.company.toLowerCase() === company);
    if (phones.length === 0) {
        console.log("Không tìm thấy điện thoại của hãng", company);
    } else {
        console.log("Danh sách điện thoại của hãng", company, ":", phones);
    }
}

function addPhone(phoneStore) {
    let id = phoneStore.length === 0 ? 1 : phoneStore[phoneStore.length - 1].id + 1;
    let name = prompt("Nhập tên điện thoại:");
    let price = parseFloat(prompt("Nhập giá tiền:"));
    let quantity = parseInt(prompt("Nhập số lượng:"), 10);
    let company = prompt("Nhập hãng điện thoại:");

    if (!name || isNaN(price) || isNaN(quantity) || !company) {
        console.error("Thông tin không hợp lệ. Vui lòng nhập lại.");
        return;
    }

    let newPhone = { id, name, price, quantity, company };
    phoneStore.push(newPhone);
    console.log("Đã thêm điện thoại mới:", newPhone);
}

function searchPhone(phoneStore) {
    let keyword = prompt("Nhập tên hoặc ID điện thoại cần tìm:");
    let result = phoneStore.filter(phone => 
        phone.name.toLowerCase().includes(keyword.toLowerCase()) || phone.id == keyword
    );
    if (result.length === 0) {
        console.log("Không tìm thấy kết quả.");
    } else {
        console.log("Kết quả tìm kiếm:", result);
    }
}

function buyPhone(phoneStore, cart) {
    let id = parseInt(prompt("Nhập ID điện thoại muốn mua:"), 10);
    let quantity = parseInt(prompt("Nhập số lượng muốn mua:"), 10);

    let phone = phoneStore.find(phone => phone.id === id);

    if (!phone) {
        console.error("Không tìm thấy điện thoại với ID này.");
        return;
    }
    if (phone.quantity < quantity) {
        console.error("Số lượng trong kho không đủ.");
        return;
    }

    phone.quantity -= quantity;

    let cartItem = cart.find(item => item.id === id);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({ ...phone, quantity });
    }

    console.log("Đã thêm vào giỏ hàng:", { ...phone, quantity });
}

function checkout(cart) {
    if (cart.length === 0) {
        console.log("Giỏ hàng trống.");
        return;
    }

    let totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    console.log("Thanh toán thành công. Tổng tiền:", totalAmount);

    cart.length = 0;
}

function sortPhonesByPrice(phoneStore, ascending = true) {
    phoneStore.sort((a, b) => ascending ? a.price - b.price : b.price - a.price);
    console.log("Danh sách điện thoại sau khi sắp xếp:", phoneStore);
}

function calculateTotalValue(phoneStore) {
    let totalValue = phoneStore.reduce((sum, phone) => sum + phone.price * phone.quantity, 0);
    console.log("Tổng giá trị của điện thoại trong kho:", totalValue);
}

function displayQuantityByCompany(phoneStore) {
    let companyStats = {};
    phoneStore.forEach(phone => {
        if (!companyStats[phone.company]) {
            companyStats[phone.company] = 0;
        }
        companyStats[phone.company] += phone.quantity;
    });
    console.log("Tổng số lượng điện thoại theo hãng:", companyStats);
}

function main() {
    while (true) {
        let choice = prompt(`
        1. Hiển thị danh sách điện thoại theo hãng
        2. Thêm điện thoại mới vào cửa hàng
        3. Tìm kiếm điện thoại theo tên hoặc id
        4. Mua điện thoại
        5. Thanh toán tất cả điện thoại trong giỏ hàng
        6. Sắp xếp điện thoại theo giá (Tăng dần)
        7. Sắp xếp điện thoại theo giá (Giảm dần)
        8. Hiển thị tổng giá trị điện thoại trong kho
        9. Hiển thị tổng số lượng điện thoại theo từng hãng
        10. Thoát chương trình
        Nhập lựa chọn của bạn:`);

        switch (choice) {
            case 1:
                displayPhonesByCompany(phoneStore);
                break;
            case 2:
                addPhone(phoneStore);
                break;
            case 3:
                searchPhone(phoneStore);
                break;
            case 4:
                buyPhone(phoneStore, cart);
                break;
            case 5:
                checkout(cart);
                break;
            case 6:
                sortPhonesByPrice(phoneStore, true);
                break;
            case 7:
                sortPhonesByPrice(phoneStore, false);
                break;
            case 8:
                calculateTotalValue(phoneStore);
                break;
            case 9:
                displayQuantityByCompany(phoneStore);
                break;
            case 10:
                console.log("Thoát chương trình.");
                return;
            default:
                console.error("Lựa chọn không hợp lệ. Vui lòng thử lại.");
        }
    }
}