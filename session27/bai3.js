// Xây dựng menu tính toán hình học, gồm các chức năng:
// Tính diện tích hình tròn.
// Tính chu vi hình tròn.
// Tính diện tích hình chữ nhật.
// Tính chu vi hình chữ nhật.
// Thoát.
function main(){
    let choice = 0 ;
    do{
        choice=+prompt("1 Dien tich,2 Chu vi,3 Chieu dai");
        switch(choice){
            case 1:
                let a =+prompt("Nhap ban kinh hinh tron");
                if(!Number.isInteger(a)){
                    console.log("Khong thoa man");
                }else{
                    let dienTich=Math.PI*a*a;
                    console.log(dienTich)
                }
            case 2:
                let b =+prompt("Nhap ban kinh hinh tron");
                if(!numbers.isInteger(a)){
                    let chuvi=2*Math*r;
                } else{
                    console.log("Khong thoa man");
                    break;
                }
                case 3:
                    let c = +prompt("NHap vao chieu dai");
                    let d = +prompt("Nhap vao hinh chu nhat");
                    if(!numbers.isInteger(a) &&!numbers.isInteger(b) ){
                        console.log("du lieu khong hop le");
                    }else{
                        let dienTich=a*b;
                        console.log(dienTich);
                    }
        }
    }while(choice!==5);
}