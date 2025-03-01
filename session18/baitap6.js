const a = parseFloat(document.getElementById("sideA").value);
const b = parseFloat(document.getElementById("sideB").value);
const c = parseFloat(document.getElementById("sideC").value);
    let result;
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            result = "Tam giác đều";
        } else if (a === b || b === c || a === c) {
            result = "Tam giác cân";
        } else if (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a) {
            result = "Tam giác vuông";
        } else {
            result = "Tam giác thường";
        }
    } else {
        result = "Ba cạnh này không tạo thành tam giác hợp lệ";
    }