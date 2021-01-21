class Vehicle{
    constructor (description, wheels){
        this.description = description;
        this.wheels = wheels;
    }
    describeYouself(){
        console.log(`Um a ${this.description} and my wheels are ${this.wheels}`);
    }
}

//  let  yaris = new Vehicle("Yaris 2020",6);

//  yaris.describeYouself();

class privateCar extends Vehicle{
    constructor(){
        super("private car",19);
    }
}
let pCar = new privateCar();
pCar.describeYouself();
// Getter and Setter
 let attendance = {
     _list :[],
     set addName(name){
        this._list.push(name);
     },
     get list(){
         return this._list.join(", ");
     }
 }
 attendance.addName = "Nahid";
 attendance.addName = "Hasan";
 attendance.addName = "Tamim";
 attendance.addName = "Limon";
 console.log(attendance.list);

 class Bike {
     constructor (makingCost,tax){
        this.makingCost = makingCost;
        this.tax = tax;
     }
     get marketPrice(){
         return `Market Price is ${this.calcPrice()} BDT `
     }
     calcPrice(){
         return this.makingCost + this.tax;
     }
 }
  let fzs = new Bike(80005,150095);
  console.log(fzs.marketPrice);
