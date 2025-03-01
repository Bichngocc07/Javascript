if (username === "ADMIN") {
    let password = prompt("Nhập mật khẩu:");
    
    if (password === null) {
        alert("Cancelled");
    } else if (password === "TheMaster") {
        alert("Welcome");
    } else {
        alert("Wrong password");
    }
} else {
    alert("I Don’t know you");
}