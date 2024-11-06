let elements=`[{
    "head":1,
    "phone": "shop",
    "chemistry":"lab"
},
{"one":1, "two": 2}]`;
let parsed= JSON.parse(elements);
console.log(parsed[0].head);
console.log(JSON.stringify(parsed));