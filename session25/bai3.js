function filterNumbers(arr) {
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }

    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newArray.push(arr[i]);
        }
    }

    if (newArray.length == 0) {
        console.log("Mảng không có số chẵn");
        return;
    }

    console.log(newArray);
}
