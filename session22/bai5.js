let array=[1,2,3,4,5];
let sumOdd=0;
let sumEven=0;
for(let i=0;i<array.length;i++){
(array[i]%2==0)?sumEven+= array[i]:sumOdd+=array[i]
}
console.log("Tong cac so chan":${sumEven});
console.log("Tong cac so chan":${sumOdd});