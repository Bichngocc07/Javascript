function menu() {
    console.log("\n--- MENU XỬ LÝ SỐ NGUYÊN ---");
    console.log("1. Nhập danh sách số nguyên");
    console.log("2. Tính trung bình các số");
    console.log("3. Tìm số chẵn lớn nhất");
    console.log("4. Tìm số lẻ nhỏ nhất");
    console.log("5. Thoát");
}
function inputNumbers() {
    let numbers = [];
    let num = Number(prompt("Nhập số lượng số nguyên: "));
    for (let i = 0; i < num; i++) {
        let number = Number(prompt(`Nhập số nguyên thứ ${i + 1}: `));
        numbers.push(number);
    }
    return numbers;
}
function calculateAverage(numbers) {
    let sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
}
function findMaxEven(numbers) {
    let maxEven = null;
    for (let num of numbers) {
        if (num % 2 === 0 && (maxEven === null || num > maxEven)) {
            maxEven = num;
        }
    }
    return maxEven;
}
function findMinOdd(numbers) {
    let minOdd = null;
    for (let num of numbers) {
        if (num % 2 !== 0 && (minOdd === null || num < minOdd)) {
            minOdd = num;
        }
    }
    return minOdd;
}
function main() {
    let numbers = [];
    let choice;

    do {
        menu();
        choice = Number(prompt("Mời bạn nhập vào lựa chọn của bạn: "));

        switch (choice) {
            case 1:
                numbers = inputNumbers();
                break;
            case 2:
                if (numbers.length === 0) {
                    console.log("Danh sách trống. Vui lòng nhập danh sách số nguyên trước.");
                } else {
                    let average = calculateAverage(numbers);
                    console.log("Trung bình các số là:", average);
                }
                break;
            case 3:
                if (numbers.length === 0) {
                    console.log("Danh sách trống. Vui lòng nhập danh sách số nguyên trước.");
                } else {
                    let maxEven = findMaxEven(numbers);
                    console.log(maxEven !== null ? `Số chẵn lớn nhất là: ${maxEven}` : "Không có số chẵn trong danh sách.");
                }
                break;
            case 4:
                if (numbers.length === 0) {
                    console.log("Danh sách trống. Vui lòng nhập danh sách số nguyên trước.");
                } else {
                    let minOdd = findMinOdd(numbers);
                    console.log(minOdd !== null ? `Số lẻ nhỏ nhất là: ${minOdd}` : "Không có số lẻ trong danh sách.");
                }
                break;
            case 5:
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng thử lại!");
        }
    } while (choice !== 5);
}
