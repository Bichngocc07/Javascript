let numbers = [];
let choice;

do {
    console.log("\n--- MENU ---");
    console.log("1. Nhập mảng số nguyên");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó");
    console.log("4. Tính tổng và trung bình cộng của các số dương trong mảng");
    console.log("5. Đảo ngược mảng");
    console.log("6. Kiểm tra mảng có đối xứng không");
    console.log("7. Thoát chương trình");

    choice = Number(prompt("Chọn một chức năng (1-7):"));

    switch (choice) {
        case 1: 
            let userInput = prompt("Nhập các số nguyên, cách nhau bởi dấu phẩy:");
            numbers = userInput.split(",").map(Number);
            console.log("Mảng đã được nhập thành công!");
            break;

        case 2:
            console.log("Mảng hiện tại là:", numbers);
            break;

        case 3: 
            if (numbers.length > 0) {
                let max = Math.max(...numbers);
                let index = numbers.indexOf(max);
                console.log(`Phần tử lớn nhất là ${max} ở chỉ số ${index}`);
            } else {
                console.log("Mảng trống, vui lòng nhập mảng trước!");
            }
            break;

        case 4: 
            if (numbers.length > 0) {
                let sum = 0;
                let count = 0;
                for (let i = 0; i < numbers.length; i++) {
                    if (numbers[i] > 0) {
                        sum += numbers[i];
                        count++;
                    }
                }
                let average = count > 0 ? sum / count : 0;
                console.log(`Tổng các số dương: ${sum}, Trung bình cộng: ${average}`);
            } else {
                console.log("Mảng trống, vui lòng nhập mảng trước!");
            }
            break;

        case 5: 
            if (numbers.length > 0) {
                for (let i = 0, j = numbers.length - 1; i < j; i++, j--) {
                    let temp = numbers[i];
                    numbers[i] = numbers[j];
                    numbers[j] = temp;
                }
                console.log("Mảng sau khi đảo ngược:", numbers);
            } else {
                console.log("Mảng trống, vui lòng nhập mảng trước!");
            }
            break;

        case 6: 
            if (numbers.length > 0) {
                let isSymmetric = true;
                for (let i = 0; i < numbers.length / 2; i++) {
                    if (numbers[i] !== numbers[numbers.length - 1 - i]) {
                        isSymmetric = false;
                        break;
                    }
                }
                console.log(isSymmetric ? "Mảng đối xứng" : "Mảng không đối xứng");
            } else {
                console.log("Mảng trống, vui lòng nhập mảng trước!");
            }
            break;

        case 7: 
            console.log("Thoát chương trình.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng thử lại!");
    }
} while (choice !== 7);