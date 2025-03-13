//Xây dựng hàm nhận vào một tham số là một 
// mảng cho trước. Hàm thực hiện tìm giá trị 
// nhỏ nhất trong mảng và trả về giá trị đó.
// function findMinValue(arr){
//     let number=[3,4,7,8];
//     for(let i=0; i<number.length;i++);
//     console.log("Gia tri nho nhat");
// }

//Xây dựng menu tính toán trên hai số, gồm các chức năng
// Cộng hai số.
// Trừ hai số.
// Nhân hai số.
// Chia hai số.
// Thoát.
let arr=[];
let choice=[];
    do {
    console.log("\n--- MENU ---");
    console.log("1.Cộng hai số ");
    console.log("2.Trừ hai số ");
    console.log("3.Nhân hai số ");
    console.log("4.Chia hai số ");
    console.log("5.Thoát");
        choice = Number(prompt("Mời bạn nhập vào lựa chọn của bạn"));
        switch (choice) {
            case 1:
                let number=prompt("Nhập vào cộng vào hai số");

                break;
            case 2:
                
                break;
    
            case 3: 
                
                break;
    
            case 4:
                break;
    
            case 5: 
            console.log("Thoát chương trình.");
                break;
            default:
            console.log("Lựa chọn không hợp lệ. Vui lòng thử lại!");
                break;
        }
    } while (choice !== 5);