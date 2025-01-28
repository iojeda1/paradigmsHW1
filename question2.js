function find(nums) {
    let currcount = 0; 
    // let count = 0; 
    let max_count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1]) {
            currcount += 1;
            max_count = Math.max(currcount, max_count); 
        } else {
            currcount = 1; 
        }
    }
    return max_count; 
}

console.log(find([33,33,30,33,33,33])); 
console.log(find([33,0,33,33,0,33])); 
console.log(find([33,-10,33,33,8,3,33,33,9,33,33,33,33,33,33]));
console.log(find([33,33,5,33,33,33]));
console.log(find([null, "house", 9, undefined, "33"]));
console.log(find([33,33,30,33,33,33.0]));