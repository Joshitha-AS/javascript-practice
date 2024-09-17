let x = 12;  // 1100 in binary
let y = 5;   // 0101 in binary

while (x > 0) {
    x = x >> 1;
    y = y << 1;

}
console.log(x);
