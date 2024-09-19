let loan=[4000,5,2];
let si=0;
let prin=loan[0];
let rate=loan[1];
let year=loan[2];
function simpleintrest(prin,rate,year){
    let mul=prin*rate*year;
    si=mul/100;
    return si;
}
simpleintrest(prin,rate,year);

