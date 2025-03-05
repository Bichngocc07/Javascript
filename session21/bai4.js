let a = parseFloat(prompt("Nhập hệ số a: "));
let b = parseFloat(prompt("Nhập hệ số b: "));
let c = parseFloat(prompt("Nhập hệ số c: "));
let delta = b * b - 4 * a * c;
if (a === 0) {
    if (b === 0) {
        document.write(c === 0 ? "Phương trình có vô số nghiệm" : "Phương trình vô nghiệm");
    } else {
        let x = -c / b;
        document.write("Phương trình có một nghiệm: x = " + x);
    }
} else {
    if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.write("Phương trình có hai nghiệm phân biệt: x1 = " + x1 + ", x2 = " + x2);
    } else if (delta === 0) {
        let x = -b / (2 * a);
        document.write("Phương trình có nghiệm kép: x = " + x);
    } else {
        document.write("Phương trình vô nghiệm");
    }
}
