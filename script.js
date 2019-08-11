class Ingredients {
  constructor(price, calories) {
    this.price = price;
    this.calories = calories;
  }  
}

let SIZE_SMALL = new Ingredients(50, 20);
let SIZE_BIG = new Ingredients(100, 40);
let STUFFING_CHEESE = new Ingredients(10, 20);
let STUFFING_SALATE = new Ingredients(20, 5);
let TOPPING_POTETOES = new Ingredients(15, 10);
let TOPPING_SAUCE = new Ingredients(15, 0);
let TOPPING_MAYO = new Ingredients(20, 5);


class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.topping = [];
  }

  addTopping(toppingItem){ 
    return this.topping.push(toppingItem);
  };

  calculateCalories(){
  return this.topping.reduce(function(sum, current) {    
      return sum + current.calories;   
    }, this.size.calories + this.stuffing.calories);
  };

  calculatePrice(){
    return this.topping.reduce(function(sum, current) {    
        return sum + current.price;   
    }, this.size.price + this.stuffing.price);
  };

}


let hamburger = new Hamburger(SIZE_SMALL, STUFFING_CHEESE);
console.log(hamburger);
hamburger.addTopping(TOPPING_MAYO);
console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());
hamburger.addTopping(TOPPING_SAUCE);
console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());