let sum = 0; 
let reversed_sum = 0;

function reversedSum(num1, num2) {
    // string reversal approach
    let result_num1 = Number(num1.toString().split('').reverse().join('')); 
    let result_num2 = Number(num2.toString().split('').reverse().join('')); 
    //console.log(result_num1); 
    //console.log(result_num2); 
    sum = result_num1 + result_num2;
    //console.log(sum);
    reversed_sum = Number(sum.toString().split('').reverse().join('')); 
    //console.log(reversed_sum);
    //console.log("end");
    return reversed_sum;
}

// test cases 
console.log(reversedSum("24", 1));
console.log(reversedSum(4358, "754"));
console.log(reversedSum(305, 794));
console.log(reversedSum(1200, 0));