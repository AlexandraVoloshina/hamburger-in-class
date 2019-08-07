let topping = [];

class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
  }

  static SIZE_SMALL = [50, 20];
  static SIZE_BIG = [100, 40];
  static STUFFING_CHEESE = [10, 20];
  static STUFFING_SALATE = [20, 5];
  static TOPPING_POTETOES = [15, 10];
  static TOPPING_SAUCE = [15, 0];
  static TOPPING_MAYO = [20, 5];

  addTopping(toppingItem){      
    return topping.push(toppingItem);
  }

  calculateCalories(){
  return topping.reduce(function(sum, current) {    
      return sum + +current[1];   
    }, this.size[1] + this.stuffing[1]);
  }

  calculatePrice(){
    return topping.reduce(function(sum, current) {    
        return sum + +current[0];   
    }, this.size[0] + this.stuffing[0]);
  }

}

let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
console.log(hamburger);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());