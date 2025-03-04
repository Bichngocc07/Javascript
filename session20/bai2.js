let a=Number(prompt("nhập 1 số nguyên"));
let b="";
if((Number.isInteger(a))&&a>0){
    for(let i=0;i<=a;i++){
        if(i%5==0){
            b=b+i+"";
        }
    }
}
else{
    console.log("các số lần chia hết cho 5 từ 1 đến ${a}là${b}");
}
    console.log("dữ liệu nhập vào không hợp lệ");