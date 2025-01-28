let s = [];
let d = 2;
let n = 2; 
let dir = "down";
function enumerate(i,j) {
    let index = i; 
    while (s.length < j) {
        s.push(`${n}/${d}`);
        if (dir == "down") {
            n += 2; 
            dir = "upright";
        } else if (dir == "upright") {
            n -= 2; 
            d += 2; 
            if (n == 2) {
                dir = "right"; 
            } 
        } else if (dir == "right") {
            d += 2; 
            dir = "downleft"; 
        } else if (dir == "downleft") {
            n += 2; 
            d -= 2; 
            if (d == 2) {
                dir = "down";
            }
        }
    }
    // return s.slice(i-1,j);
    let final = []; 
}



console.log(enumerate(1, 15));
console.log(enumerate(1,2));
console.log(enumerate(3,6));

console.log(enumerate(-1,4));
console.log(enumerate(1,1));