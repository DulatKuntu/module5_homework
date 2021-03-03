let a  =prompt("Enter a number");
a = +a;
if(typeof(a)=="number"){
    if(a%2==0){
        alert("Even");
    }else if(a%2==1){
        alert("Odd");
    }else{
        alert("Oops, an error");
    }
}

let x;

switch(typeof(x)){
    case "number":
        console.log("x-is number");
        break;
    case "string":
        console.log("x-is string");
        break;
    case "boolean":
        console.log("x-is boolean type");
        break;
    default:
        console.log("Type of x is not defined");
}