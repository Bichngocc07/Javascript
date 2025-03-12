function filterArray(array){
    if(Array.isArray(Array)){
        console.log("Du lieu hop le");
    }
    if(array.length==0){
        console.log("Mang khong co phan tu nao");
    }
    let newArray=array.filter((item)=>item.length>5);
    console.log(newArray);
}