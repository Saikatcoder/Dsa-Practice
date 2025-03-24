// for (let i = 1; i <= 5; i++) {
//   for(let j=1; j<=5; j++){
//      process.stdout.write("💓") 
//   }
//     console.log();
    
// }



// Right angle tringle  ✅ 
// const prompt = require("prompt-sync")(); // ✅ `()` add karna zaroori hai
  let n =Number(prompt("enter a number from user"))
    for (let i = 1; i<=n; i++) {
        for(let j=1; j<=i; j++){
            process.stdout.write("💓")
        }
        console.log();
        
    }
  
    for(let i=1; i<=n; i++){
        for(let j=1; j<=n-i+1; j++){
            process.stdout.write("🦐")
        }
        console.log();
        
    }

// mirror triangle 
for(let i=1; i<=n; i++){
    for(let j=1; j<=n-i; j++){
        process.stdout.write(" ")
    }
    for(let j=1; j<=i; j++){
        process.stdout.write("* ")
    }
    console.log();
    
}

for (let i = 1; i <=n; i++) {
    console.log(" ".repeat((n - i) * 2) + "* ".repeat(i)); 
}

for (let i = 1; i <=n; i++) {
   
    for(let j=1; j<=n;j++){
        if(i==j || i+j == n+1){
            process.stdout.write("🦐 ")
        }else process.stdout.write(" ")
    }
    console.log();
    
    
}


let arr = [85,78,96,85,63,75]
function revarse (arr){
    let newArr = [...arr]
    for(let i=0; i<newArr.length; i++){
        newArr[i--]
    }
    return newArr
}



console.log(revarse([85,78,96,85,63,75]));



function duplicateNumber(arr){
    let newarr = [...arr];

    for(let i=0; i<arr.length; i++){

        for (let j = i+1; j < newarr.length; j++) {
            if(arr[i] === newarr[j] && !newarr.includes(arr[i])){
                return newarr.push(arr[i])
            }
            
        }
    }
    return `no duplicate value`
}


function intersection(arr1,arr2){
    let intersection =[] ;
    for(let i=0; i<arr1.length; i++){
        for (let j = 1; j <arr2.length; j++) {
           if(arr1[i] === arr2[j]){
                return intersection.push(arr1[i])
           }
        }
    }
   return `no duplicaate value`
}


