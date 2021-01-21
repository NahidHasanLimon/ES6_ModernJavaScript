// starting arrow function
var display;

// various methos

 display = function display (params) {
     console.log('from display function 1',params);
 }
 display = function  (params) {
     console.log('from display function 2',params);
 }
 display =   (params) => {
     console.log('from display function 3',params);
 }
 display =   params => {
     console.log('from display function 4',params);
 }
 display("checking Param.");