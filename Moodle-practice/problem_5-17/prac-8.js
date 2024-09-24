//prob-12

let n=10;
let u=1;
while(n>=i){
    console.log(u);
    i++;
}


//prob-13
function robotmovement(bl){
    while(bl>20){
        console.log(`the battery level is ${bl}`);
        bl-=5;
    }
    console.log("battery low");  
}
robotmovement(60);

// //prob-14
let direction="north";
switch (direction){
    case "east":
        console.log("robot in north");
        break;
    case "west":
        console.log("robot in west direction");
        break;
    case "north":
        console.log("robot in north");
        break;
    case "south":
        console.log("robot in south direction");
        break;
    default:
        console.log("invalid");
        break;
}

//prob-15
let flightHeight=1000;
let i=flightHeight;
while(flightHeight>0){
    console.log(`flight altitude is ${flightHeight}`);
    flightHeight-=10;
}
console.log("flight Arrived");


//prob-16
let destination="paris";
switch(destination){
    case "paris":
        console.log("north runway");
        break;
    case "india":
        consol.log("south runway");
        break;
    case "switzerland":
        console.log("east runway");
        break;
    default:
        console.log("invalid entry")
        break;
    }

function flightAfterInterval(flightHeight){
    let count=0;
    for(i=0; i<=flightHeight;i+=100){
        console.log(`flight height height is ${i}`);
    }
}
flightAfterInterval(1000);


