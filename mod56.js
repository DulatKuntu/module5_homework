let arr=[2,1,0,2,null,1];
let result=true;
let i = 1;
while(i<arr.length){
    if(arr[i-1]!=arr[i]){
        result = false;
        break;
    }
    i++;
}
console.log(result);
let even=0,odd=0;
for(i=0;i<arr.length;i++){
    if(typeof(arr[i])=="number"){
        if(arr[i]%2==0){
            if(arr[i]!=0){
                even++
            }
        }else if(arr[i]%2==1){
            odd++;
        }
    }
}
console.log(even,odd)