let matrix=[];
let rows = 0;
let cols = 0;
let choice;

while (true) {
    console.log('\n===== CHƯƠNG TRÌNH MA TRẬN =====');
    console.log('1. Nhập ma trận');
    console.log('2. Tính tổng các phần tử trong ma trận');
    console.log('3. Tìm phần tử lớn nhất trong ma trận');
    console.log('4. Tính trung bình cộng các phần tử của một hàng');
    console.log('5. Đảo ngược các hàng trong ma trận');
    console.log('6. Thoát chương trình');
    console.log('=================================\n');

    choice = parseInt(readlineSync.question('Nhập lựa chọn của bạn: '));
    console.log();

    if (choice === 1) {
        while (true) {
            rows = parseInt(readlineSync.question('Nhập số hàng: '));
            cols = parseInt(readlineSync.question('Nhập số cột: '));
            if (!isNaN(rows) && !isNaN(cols) && rows > 0 && cols > 0) break;
            console.log('⚠ Vui lòng nhập số nguyên dương hợp lệ.');
        }

        matrix = [];
        for (let i = 0; i < rows; i++) {
            matrix[i] = [];
            for (let j = 0; j < cols; j++) {
                let value;
                while (true) {
                    value = parseFloat(readlineSync.question(`Nhập giá trị tại vị trí [${i}][${j}]: `));
                    if (!isNaN(value)) break;
                    console.log('⚠ Giá trị không hợp lệ. Vui lòng nhập số.');
                }
                matrix[i][j] = value;
            }
        }
        console.log('\nMa trận đã được nhập xong.\n');
    }

    else if (choice === 2) {
        if (matrix.length === 0) {
            console.log('⚠ Ma trận chưa được nhập. Vui lòng nhập ma trận trước.\n');
            continue;
        }
        let sum = 0;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                sum += matrix[i][j];
            }
        }
        console.log(`\nTổng các phần tử trong ma trận: ${sum}\n`);
    }

    else if (choice === 3) {
        if (matrix.length === 0) {
            console.log('Ma trận chưa được nhập. Vui lòng nhập ma trận trước.\n');
            continue;
        }
        let max = matrix[0][0];
        let maxIndex = [0, 0];
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (matrix[i][j] > max) {
                    max = matrix[i][j];
                    maxIndex = [i, j];
                }
            }
        }
        console.log(`\nPhần tử lớn nhất: ${max} tại vị trí [${maxIndex[0]}][${maxIndex[1]}]\n`);
    }

    else if (choice === 4) {
        if (matrix.length === 0) {
            console.log('Ma trận chưa được nhập. Vui lòng nhập ma trận trước.\n');
            continue;
        }
        let rowIndex;
        while (true) {
            rowIndex = parseInt(readlineSync.question('Nhập chỉ số hàng muốn tính trung bình cộng: '));
            if (!isNaN(rowIndex) && rowIndex >= 0 && rowIndex < rows) break;
            console.log('Chỉ số hàng không hợp lệ. Vui lòng nhập lại.');
        }
        let sum = 0;
        for (let j = 0; j < cols; j++) {
            sum += matrix[rowIndex][j];
        }
        console.log(`\nTrung bình cộng của hàng ${rowIndex}: ${sum / cols}\n`);
    }

    else if (choice === 5) {
        if (matrix.length === 0) {
            console.log('⚠ Ma trận chưa được nhập. Vui lòng nhập ma trận trước.\n');
            continue;
        }
        for (let i = 0; i < rows; i++) {
            matrix[i].reverse();
        }
        console.log('Đã đảo ngược các hàng trong ma trận.\n');
    }

    else if (choice === 6) {
        console.log('Thoát chương trình.\n');
        break;
    }

    else {
        console.log('Lựa chọn không hợp lệ. Vui lòng chọn lại.\n');
    }
}
