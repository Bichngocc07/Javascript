let a = prompt('moi ban nhap vao mot day so bat ki');
let b = [];
if (Number.isInteger(Number(a))) {
    for(i=a.length-1 ; i >=0 ; i--) {
        b += a[i];
    }
    console.log(b);
} else {
    console.log('nhap so hop le');
}