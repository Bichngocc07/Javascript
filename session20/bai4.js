    for (let i = 0; i < str.length; i++) {
        if (str[i] === search) {
            found = true;
            break;
        }
    }
    if (found) {
        console.log("Tồn tại từ cần tìm kiếm");
    } else {
        console.log("Không tồn tại từ cần tìm kiếm");
    }
