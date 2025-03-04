/* 
    Nhập số nguyên từ 1 đến 1 số N 
*/
let a = prompt("nhap so vao"); // nhap so 
let sum = 0; // tao bien sum
if(a<0 || Number.isNaN(a) || Number.isInteger(a)){
    console.log("Du lieu nhap vao khong le");
}else{
    for( i = 0; i<=a; i++){ // vong lap 
        sum+= i; //+ tat ca  i < a
    }
}
console.log(sum); // in ra tong tat ca so tu 1-N

