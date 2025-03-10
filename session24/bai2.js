let arr = [];
let choice;

do {
    choice = Number(prompt("===== MENU =====\n1. Nhập mảng số nguyên\n2. Hiển thị mảng\n3. Tìm các phần tử chẵn và lẻ\n4. Tính trung bình cộng của mảng\n5. Xóa phần tử tại vị trí chỉ định\n6. Tìm phần tử lớn thứ hai trong mảng\n7. Thoát chương trình\n================\nLựa chọn của bạn:"));

    switch (choice) {
        case 1:
            let n = Number(prompt("Nhập số phần tử của mảng:"));
            if (n <= 0) {
                console.log("Số phần tử phải lớn hơn 0!");
            } else {
                arr = [];
                for (let i = 0; i < n; i++) {
                    arr.push(Number(prompt("Nhập phần tử thứ " + (i + 1) + ":")));
                }
                console.log("Nhập mảng thành công!");
            }
            break;
        case 2:
            if (arr.length === 0) {
                console.log("Mảng chưa có phần tử nào!");
            } else {
                console.log("Mảng:", arr);
            }
            break;
        case 3:
            if (arr.length === 0) {
                console.log("Mảng chưa có phần tử nào!");
            } else {
                let even = [];
                let odd = [];
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] % 2 === 0) {
                        even.push(arr[i]);
                    } else {
                        odd.push(arr[i]);
                    }
                }
                console.log("Các phần tử chẵn:", even.length > 0 ? even : "Không có số chẵn");
                console.log("Các phần tử lẻ:", odd.length > 0 ? odd : "Không có số lẻ");
            }
            break;
        case 4:
            if (arr.length === 0) {
                console.log("Mảng chưa có phần tử nào!");
            } else {
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += arr[i];
                }
                let average = sum / arr.length;
                console.log("Trung bình cộng của mảng:", average);
            }
            break;
        case 5:
            if (arr.length === 0) {
                console.log("Mảng chưa có phần tử nào!");
            } else {
                let pos = Number(prompt("Nhập vị trí cần xóa (0 đến " + (arr.length - 1) + "):"));
                if (pos < 0 || pos >= arr.length) {
                    console.log("Vị trí không hợp lệ!");
                } else {
                    arr.splice(pos, 1);
                    console.log("Xóa thành công! Mảng mới:", arr);
                }
            }
            break;
        case 6:
            if (arr.length === 0) {
                console.log("Mảng chưa có phần tử nào!");
            } else if (arr.length < 2) {
                console.log("Mảng không đủ phần tử để tìm số lớn thứ hai!");
            } else {
                let max = arr[0];
                let secondMax = arr[0];
                for (let i = 1; i < arr.length; i++) {
                    if (arr[i] > max) {
                        secondMax = max;
                        max = arr[i];
                    } else if (arr[i] > secondMax && arr[i] < max) {
                        secondMax = arr[i];
                    }
                }
                if (secondMax === max) {
                    console.log("Không có số lớn thứ hai!");
                } else {
                    console.log("Phần tử lớn thứ hai:", secondMax);
                }
            }
            break;
        case 7:
            console.log("Thoát chương trình!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ!");
    }
} while (choice !== 7);