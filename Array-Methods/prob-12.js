let sports=["crickets","football"];
let sports1=["basketball","badminton","hockey"];
for(i=0;i<sports1.length;i++){
    sports.unshift(sports1[i]);
}
console.log(sports);

let string="HTML-CSS-JavaScript";
console.log(string.split("-"));