// Xây dựng menu quản lý sinh viên, gồm các chức năng:
// Nhập danh sách sinh viên.
// Cho người dùng nhập số lượng số sinh viên, nhập lần lượt tên đầy đủ từng sinh viên.
// Hiển thị danh sách sinh viên.
// Tìm sinh viên theo tên.
// Cho người dùng nhập tên sinh viên cần tìm kiếm, hiển thị tên đầy đủ sinh viên nếu tìm thấy, trong trường hợp không tìm thấy sinh viên thông báo sinh viên không có trong danh sách .
// Xóa sinh viên khỏi danh sách.
// Cho người dùng nhập tên sinh viên cần xóa, trong trường hợp có nhiều sinh viên trùng tên thì xóa sinh viên đầu tiên.
// Thoát.
function menu() {
    console.log("\n--- MENU QUẢN LÝ SINH VIÊN ---");
    console.log("1. Nhập danh sách sinh viên");
    console.log("2. Hiển thị danh sách sinh viên");
    console.log("3. Tìm sinh viên theo tên");
    console.log("4. Xóa sinh viên khỏi danh sách");
    console.log("5. Thoát");
}

function inputStudents() {
    let students = [];
    let num = Number(prompt("Nhập số lượng sinh viên: "));
    for (let i = 0; i < num; i++) {
        let name = prompt("Nhập tên đầy đủ sinh viên: ");
        students.push(name);
    }
    return students;
}

function displayStudents(students) {
    console.log("\n--- DANH SÁCH SINH VIÊN ---");
    for (let student of students) {
        console.log(student);
    }
}

function findStudent(students) {
    let name = prompt("Nhập tên sinh viên cần tìm: ");
    let index = students.indexOf(name);
    if (index !== -1) {
        console.log(`Sinh viên ${name} có trong danh sách.`);
    } else {
        console.log("Sinh viên không có trong danh sách.");
    }
}

function deleteStudent(students) {
    let name = prompt("Nhập tên sinh viên cần xóa: ");
    let index = students.indexOf(name);
    if (index !== -1) {
        students.splice(index, 1);
        console.log(`Đã xóa sinh viên ${name} khỏi danh sách.`);
    } else {
        console.log("Sinh viên không có trong danh sách.");
    }
}

let students = [];
let choice;

do {
    menu();
    choice = Number(prompt("Mời bạn nhập vào lựa chọn của bạn: "));

    switch (choice) {
        case 1:
            students = inputStudents();
            break;
        case 2:
            displayStudents(students);
            break;
        case 3:
            findStudent(students);
            break;
        case 4:
            deleteStudent(students);
            break;
        case 5:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng thử lại!");
    }
} while (choice !== 5);
