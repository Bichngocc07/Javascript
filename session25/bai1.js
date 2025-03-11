/* 
Xây dựng hàm nhận vào một tham số là một mảng cho trước. Hàm 
thực hiện tìm giá trị nhỏ nhất trong mảng và trả về giá trị đó. 
*/
// khai báo hàm 
function findMin(arr) {
    // B1 kiểm tra xem arr có phải là mảng hay không?
    if(Array.isArray(arr)){
        // là mảng
        // xử lý
        if(arr.length==0){
            console.log("mảng không chứa phần tử");
            return "mảng không chứa phần tử"
        }
        let minItem= arr[0];
        for (let i = 0;  i< arr.length; i++) {
            if(arr[i]<minItem){
                minItem= arr[i];
            }
            
        }
        console.log("giá trị nhỏ nhất",minItem);
        
        return minItem;
    }
    console.log("giá trị không hợp lệ");
    
}
findMin([4,1,8,9]);
console.log(Array.isArray([]));