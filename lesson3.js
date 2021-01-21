// starting spread operator
let web = ["JavaScript","PHP","CSS"];
let mobile = ["Android","Flutter","React Natvie"];

let technologies = ["Java","Go Lang",...web,...mobile]
console.log(technologies);
//  staritng destructing arrays
let univesities = [
    "BUBT",
    "DU",
    "CU",
    "AUST",
    "KU"
];
console.log(univesities);
let [first,second,,,fifth] = [
    "BUBT",
    "DU",
    "CU",
    "AUST",
    "KU"
];
console.log(second);
console.log(fifth);
console.log(univesities.includes('DU'));