let a = parseFloat(prompt("Nhập a:"));
let b = parseFloat(prompt("Nhập b:"));
let c = parseFloat(prompt("Nhập c:"));
if (a === 0) {
} else {
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
        document.write("Phương trình vô nghiệm ");
    } else if (delta === 0) {
        let x = -b / (2 * a);
        document.write(`Phương trình có nghiệm kép x1 = x2 = ${x}`);
}
}