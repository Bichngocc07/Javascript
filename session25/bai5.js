let rows = parseInt(prompt('Nhập số hàng của mảng: '));
let cols = parseInt(prompt('Nhập số cột của mảng: '));
let arr = Array.from({ length: rows }, () => Array(cols).fill(0));

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        arr[i][j] = parseInt(prompt(`Nhập phần tử tại hàng ${i + 1}, cột ${j + 1}: `));
    }
}

while (true) {
    console.log("\nMenu:");
    console.log("1. Nhập mảng 2 chiều");
    console.log("2. Hiển thị mảng 2 chiều");
    console.log("3. Tính tổng các phần tử trong mảng");
    console.log("4. Tính tổng đường chéo chính");
    console.log("5. Tính tổng đường chéo phụ");
    console.log("6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột");
    console.log("7. Thoát chương trình");

    let choice = parseInt(prompt("Nhập lựa chọn của bạn: "));

    if (choice === 1) {
        rows = parseInt(prompt('Nhập số hàng của mảng: '));
        cols = parseInt(prompt('Nhập số cột của mảng: '));
        arr = Array.from({ length: rows }, () => Array(cols).fill(0));
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                arr[i][j] = parseInt(prompt(`Nhập phần tử tại hàng ${i + 1}, cột ${j + 1}: `));
            }
        }
    } else if (choice === 2) {
        console.log("Mảng 2 chiều:");
        arr.forEach(row => console.log(row.join(' ')));
    } else if (choice === 3) {
        let sum = arr.flat().reduce((sum, val) => sum + val, 0);
        console.log(`Tổng các phần tử trong mảng: ${sum}`);
    } else if (choice === 4) {
        let sum = arr.reduce((sum, row, i) => sum + row[i], 0);
        console.log(`Tổng đường chéo chính: ${sum}`);
    } else if (choice === 5) {
        let sum = arr.reduce((sum, row, i) => sum + row[cols - 1 - i], 0);
        console.log(`Tổng đường chéo phụ: ${sum}`);
    } else if (choice === 6) {
        let type = prompt('Bạn muốn tính trung bình cộng của hàng hay cột (nhập "row" hoặc "col"): ');
        let index = parseInt(prompt(`Nhập chỉ số ${type === 'row' ? 'hàng' : 'cột'}: `));
        let sum = 0, len = type === 'row' ? arr[index].length : rows;

        if (type === 'row') {
            sum = arr[index].reduce((sum, val) => sum + val, 0);
        } else {
            for (let i = 0; i < rows; i++) {
                sum += arr[i][index];
            }
        }

        console.log(`Trung bình cộng các phần tử trong ${type} ${index}: ${sum / len}`);
    } else if (choice === 7) {
        console.log("Thoát chương trình.");
        break;
    } else {
        console.log("Lựa chọn không hợp lệ! Vui lòng chọn lại.");
    }
}
