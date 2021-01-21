
// Enhancing object literal
function skier (name,sound){
    return {
        name,
        // name:name,
        sound,
        // sound:sound,
        powderYell: function (params) {
            let yell  = this.sound.toUpperCase();
            console.log("Inside Powder Yell");
            console.log(`${yell} !! ${yell}`);     
        }

    }
}
skier("JavaScript","Fucking Good").powderYell();


// objects with spread operator
const dayFoods = {
    breakfast: "Hungry",
    lunch: "Biriyani",
    
}
const nightFoods = {
    eveningSnacks : "Cha and Biscuit",
    dinner : "Noodles"
}

const foods = {
    ...dayFoods,
    ...nightFoods
}

console.log(foods);
//Satrting Destructing objects
const degrees = {
    name : "B.Sc in CSE",
    cost : 30000,
    availableVarsity : [
        "BUBT","AUST","SUST","SothEast"
    ]
}

 function carrerMarketting({name,availableVarsity}){
     console.log("inside from carrerMarketting");
    console.log(`Take Admission on this  ${name} degree and Subjects Availble are ${availableVarsity}`);
 }
 carrerMarketting(degrees);



const {degreeName,availableVarsity,cost} = {
    degreeName : "B.Sc in EEE",
    cost : 30000,
    availableVarsity : [
        "BUBT","AUST","SUST","SouthEast"
    ]
}
console.log(degreeName,availableVarsity,cost);


// starting iteratings
 for (let letter of "Nahid") {
     console.log(letter);
 }
 let topics = new Map();
 topics.set("HTML","/htmls");
 topics.set("css","/css");
 topics.set("js","/js");

 for (let entries of topics.entries()) {
    console.log(entries);
}