const  input = require("readline-sync")
let n = input.questionInt("Enter The array Size: ")
let m = input.questionInt("enter check num: ")
let array=[];
let i = 0;


while(i<n)
{
  let a = input.questionInt("enter :")
    array[i]=a;
    i++   
}
i=0
let count=0;
while(i<n){
  
  if(array[i]==m)
  {
  count=1
 break;
  }
  i++
}

  if(count==1){
    console.log(" The number is exist: ",m)
  }
  else{console.log("The number not exist: ",m)}

    