function findMaxAndPosition(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }

    if (arr.length === 0) {
        return "Mảng ko có dữ liệu";
    }

    const max = Math.max(...arr);

    const position = arr.indexOf(max);

    return {
        max: max,
        position: position
    };
}

console.log(findMaxAndPosition([10, 9, 5, 11, 24, 5])); 

console.log(findMaxAndPosition([])); 

console.log(findMaxAndPosition("abc")); 

console.log(findMaxAndPosition([4, 6, 8, 10, 11, 13])); 
