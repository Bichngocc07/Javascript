const readlineSync = require('readline-sync');

let matrix = [];
let rows = 0;
let cols = 0;

while (true) {
    console.log('\n===== CHƯƠNG TRÌNH MẢNG 2 CHIỀU =====');
    console.log('1. Nhập mảng 2 chiều');
    console.log('2. Hiển thị mảng 2 chiều');
    console.log('3. Tính tổng các phần tử trong mảng');
    console.log('4. Tính tổng đường chéo chính');
    console.log('5. Tính tổng đường chéo phụ');
    console.log('6. Tính trung bình cộng hàng/cột');
    console.log('7. Thoát chương trình');
    console.log('=====================================\n');

    let choice = parseInt(readlineSync.question('Nhập lựa chọn của bạn: '));
    console.log();

    if (choice === 1) {
        while (true) {
            rows = parseInt(readlineSync.question('Nhập số hàng: '));
            cols = parseInt(readlineSync.question('Nhập số cột: '));
            if (!isNaN(rows) && !isNaN(cols) && rows > 0 && cols > 0) break;
            console.log('Vui lòng nhập số nguyên dương hợp lệ.');
        }

        matrix = [];
        for (let i = 0; i < rows; i++) {
            matrix[i] = [];
            for (let j = 0; j < cols; j++) {
                let value;
                while (true) {
                    value = parseFloat(readlineSync.question(`Nhập giá trị tại [${i}][${j}]: `));
                    if (!isNaN(value)) break;
                    console.log('Giá trị không hợp lệ. Vui lòng nhập số.');
                }
                matrix[i][j] = value;
            }
        }
        console.log('\nMảng 2 chiều đã được nhập xong.\n');
    }

    else if (choice === 2) {
        if (matrix.length === 0) {
            console.log('Mảng chưa được nhập. Vui lòng nhập mảng trước.\n');
            continue;
        }
        console.log('Mảng 2 chiều:');
        for (let i = 0; i < rows; i++) {
            console.log(matrix[i].join(' '));
        }
        console.log();
    }

    else if (choice === 3) {
        if (matrix.length === 0) {
            console.log('Mảng chưa được nhập. Vui lòng nhập mảng trước.\n');
            continue;
        }
        let sum = 0;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                sum += matrix[i][j];
            }
        }
        console.log(`\nTổng các phần tử trong mảng: ${sum}\n`);
    }

    else if (choice === 4) {
        if (matrix.length === 0) {
            console.log('Mảng chưa được nhập. Vui lòng nhập mảng trước.\n');
            continue;
        }
        if (rows !== cols) {
            console.log('Mảng không phải là ma trận vuông, không thể tính tổng đường chéo chính.\n');
            continue;
        }
        let sum = 0;
        for (let i = 0; i < rows; i++) {
            sum += matrix[i][i];
        }
        console.log(`\nTổng đường chéo chính: ${sum}\n`);
    }

    else if (choice === 5) {
        if (matrix.length === 0) {
            console.log('Mảng chưa được nhập. Vui lòng nhập mảng trước.\n');
            continue;
        }
        if (rows !== cols) {
            console.log('Mảng không phải là ma trận vuông, không thể tính tổng đường chéo phụ.\n');
            continue;
        }
        let sum = 0;
        for (let i = 0; i < rows; i++) {
            sum += matrix[i][cols - i - 1];
        }
        console.log(`\nTổng đường chéo phụ: ${sum}\n`);
    }

    else if (choice === 6) {
        if (matrix.length === 0) {
            console.log('⚠ Mảng chưa được nhập. Vui lòng nhập mảng trước.\n');
            continue;
        }
        console.log('1. Tính trung bình hàng');
        console.log('2. Tính trung bình cột');
        let option = parseInt(readlineSync.question('Chọn phương án: '));

        if (option === 1) {
            let rowIndex;
            while (true) {
                rowIndex = parseInt(readlineSync.question('Nhập chỉ số hàng: '));
                if (!isNaN(rowIndex) && rowIndex >= 0 && rowIndex < rows) break;
                console.log('⚠ Chỉ số hàng không hợp lệ. Vui lòng nhập lại.');
            }
            let sum = 0;
            for (let j = 0; j < cols; j++) {
                sum += matrix[rowIndex][j];
            }
            console.log(`\nTrung bình cộng hàng ${rowIndex}: ${sum / cols}\n`);
        }

        else if (option === 2) {
            let colIndex;
            while (true) {
                colIndex = parseInt(readlineSync.question('Nhập chỉ số cột: '));
                if (!isNaN(colIndex) && colIndex >= 0 && colIndex < cols) break;
                console.log('Chỉ số cột không hợp lệ. Vui lòng nhập lại.');
            }
            let sum = 0;
            for (let i = 0; i < rows; i++) {
                sum += matrix[i][colIndex];
            }
            console.log(`\nTrung bình cộng cột ${colIndex}: ${sum / rows}\n`);
        }

        else {
            console.log('⚠ Lựa chọn không hợp lệ.\n');
        }
    }

    else if (choice === 7) {
        console.log('Thoát chương trình.\n');
        break;
    }

    else {
        console.log('Lựa chọn không hợp lệ. Vui lòng chọn lại.\n');
    }
}
