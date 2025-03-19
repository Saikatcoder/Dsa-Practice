
function calculate(num1,num2,operator){
    if(isNaN(num1) || isNaN (num2)) return `please enter a valid number`
    if(operator == "+"){
        return `${num1}+ ${num2}=`+ (num1 + num2) ;
    }else if(operator == "-"){
        return `${num1}-${num2}=`+ (num1 - num2) ;
    }else if(operator == "*"){
        return `${num1}x ${num2}=`+ (num1 * num2) ;
    }else if(operator == "/"){
        return `${num1} / ${num2}=`+ (num1 / num2) ;
    }

 }



//  using object maping
function Calculator(num1,num2,operator){
      if(isNaN(num1) || isNaN (num2)) return `please enter a valid number`;

      let calculate = {
        "+" :()=> num1 + num2,
        "-" :()=> num1 - num2,
        "*" :()=> num1 * num2 ,
        "/" :()=> num1 / num2,
      }

      return calculate[operator] !== undefined ? `${num1} ${operator} ${num2}= ${calculate[operator]}` : "Invalid operator! Please use +, -, *, or /";
}


for (let i = 0; i <=6; i++) {
  for (let j = 0; j <= 5; j++) {
    
    console.log("x");
    
    
  }
  console.log();
  
    
}

