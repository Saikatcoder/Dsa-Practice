function  findStrongNumber(num){
    let n = num
    let ans =0
    while(num>0){
       let rimender = num % 10
        let fact = 1;
        for (let i = 1; i <= rimender; i++) {
            
            fact *= i
        }
        ans +=  fact
        num = Math.floor(num/10)
    }
    return ans === n ? "Strong Number" : "Not a Strong number"
}


function findStrongnumber(num){
    let n = num;
    let ans =0
    let fact = [1]
    for (let i = 1; i <=9; i++) {
     
        fact[i] = fact[i-1] *i
    }
    while(num > 0){
        let rimender = num % 10
        ans += fact[rimender];
        num = Math.floor(num /10);
    }
    return ans === n ? "Strong number" : "Not a strong Number"
}



function secounMinimun(arr){
    let min = Math.min(arr[0], arr[1]);
    let smin =Math.min(arr[0], arr[1]);
    for(let i =0; i<arr.length; i++){
        if(arr[i] > min){
            smin = min;
            min = arr[i]
        }else if(arr[i] >smin){
            smin = arr[i]
        }
    }
    return smin
}