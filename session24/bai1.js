let arr = [];
let choice;
do {
    choice = Number(prompt("===== MENU =====\n1. Nhập mảng\n2. Hiển thị mảng\n3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng\n4. Tính tổng các phần tử trong mảng\n5. Tìm số lần xuất hiện của một phần tử trong mảng\n6. Sắp xếp mảng tăng dần\n7. Thoát chương trình\n================\nLựa chọn của bạn:"));

    switch (choice) {
        case 1:
            let n = Number(prompt("Nhập số phần tử của mảng:"));
            if (n <= 0) {
                console.log("Số phần tử phải lớn hơn 0!");
                alert("Số phần tử phải lớn hơn 0!");
            } else {
                arr = [];
                for (let i = 0; i < n; i++) {
                    arr.push(Number(prompt("Nhập phần tử thứ " + (i + 1) + ":")));
                }
                console.log("Nhập mảng thành công!");
                alert("Nhập mảng thành công!");
            }
            break;
        case 2:
            if (arr.length === 0) {
                console.log("Mảng chưa có phần tử nào!");
                alert("Mảng chưa có phần tử nào!");
            } else {
                console.log("Mảng: " + arr);
                alert("Mảng: " + arr);
            }
            break;
        case 3:
            if (arr.length === 0) {
                console.log("Mảng chưa có phần tử nào!");
                alert("Mảng chưa có phần tử nào!");
            } else {
                let max = arr[0];
                let min = arr[0];
                for (let i = 1; i < arr.length; i++) {
                    if (arr[i] > max) max = arr[i];
                    if (arr[i] < min) min = arr[i];
                }
                console.log("Phần tử lớn nhất: " + max + "\nPhần tử nhỏ nhất: " + min);
                alert("Phần tử lớn nhất: " + max + "\nPhần tử nhỏ nhất: " + min);
            }
            break;
        case 4:
            if (arr.length === 0) {
                console.log("Mảng chưa có phần tử nào!");
                alert("Mảng chưa có phần tử nào!");
            } else {
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += arr[i];
                }
                console.log("Tổng các phần tử: " + sum);
                alert("Tổng các phần tử: " + sum);
            }
            break;
        case 5:
            if (arr.length === 0) {
                console.log("Mảng chưa có phần tử nào!");
                alert("Mảng chưa có phần tử nào!");
            } else {
                let num = Number(prompt("Nhập số cần tìm:"));
                let count = 0;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] === num) {
                        count++;
                    }
                }
                console.log("Số " + num + " xuất hiện " + count + " lần trong mảng");
                alert("Số " + num + " xuất hiện " + count + " lần trong mảng");
            }
            break;
        case 6:
            if (arr.length === 0) {
                console.log("Mảng chưa có phần tử nào!");
                alert("Mảng chưa có phần tử nào!");
            } else {
                for (let i = 0; i < arr.length - 1; i++) {
                    for (let j = 0; j < arr.length - i - 1; j++) {
                        if (arr[j] > arr[j + 1]) {
                            let temp = arr[j];
                            arr[j] = arr[j + 1];
                            arr[j + 1] = temp;
                        }
                    }
                }
                console.log("Mảng sau khi sắp xếp tăng dần: " + arr);
                alert("Mảng sau khi sắp xếp tăng dần: " + arr);
            }
            break;
        case 7:
            console.log("Thoát chương trình!");
            alert("Thoát chương trình!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ!");
            alert("Lựa chọn không hợp lệ!");
    }
} while (choice !== 7);