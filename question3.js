let sequence = [];
let d = 2;
function enumerate(i,j) {
while (sequence.length < j) {
    for (let n = 2; n <= d; n += 2) {
        sequence.push(n/d);
    }
    d += 2; 
}
}


