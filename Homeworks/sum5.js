let num = 15;  // 1111 in binary
let shiftCount = 0;

for (let i = 0; i < 4; i++) {
    if (num & 1) {
        shiftCount++;
    }
    num = num >> 1;
}
