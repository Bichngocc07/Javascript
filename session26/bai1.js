function filterNumbers() {
    let array = [];
    for (let i=0;i<10;i++){
    let number=+prompt("Nhap gia tri");
    //Check dk đây phải là số
    if(number.isInterger(number)){
        array.push(number);
    }
    }
}
array=[1,2,5,2];
let.newArray=array.filter(item=>item>=10)
newArray.length==0;
console.log("Khong co phan tu >=10" )=console.log(newArray);
