function printName(firstName,lastName) {
    console.log("First Name is: ",firstName ,"Second Name is :",lastName);
    console.log(`Hello Your First name is ${firstName} and Last Name is  ${lastName}`);
}
printName("Nahid Hasan","Limon");

function createEmail(firstName,price) {
    let shipping = 95;
    console.log(`Hi, ${firstName}! 
    Thanks! for Staying with us:
        Total : ${price}
        Grand Total :  ${price+shipping} `);
}
createEmail("Ariyan Drimik",5.00);
// end of template string learing
// starting searching string
const university = "Bangladesh"
console.log("University name is : ",university);
console.log("is univesity name start with'Ban' ?",university.startsWith("Ban"));
console.log("is univesity name ends with'sh' ?",university.endsWith("sh"));
console.log(university.includes('gl'));
console.log("is glh incuded ?",university.includes('glh'));
console.log("start in postion",university.search('Ban'));

// starting lesson primitives symbols.

const id = Symbol();
const studentInfo = {
    id: 1,
    name: "Nahid Hasan Limon",
    department : "CSE",
    courses : [
        "Algorithm","OOP","Data Structure"
    ]
}
studentInfo[id] = 56666;
console.log(studentInfo);

