class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.topping = [];
  }

  static SIZE_SMALL = {
          price: 50,
          calories: 20,
  };

  static SIZE_BIG = {
          price: 100,
          calories: 40,
  };

  static STUFFING_CHEESE = {
          price: 10,
          calories: 20,
  };

  static STUFFING_SALATE = {
          price: 20,
          calories: 5,
  };

  static TOPPING_POTETOES = {
          price: 15,
          calories: 10,
  };

  static TOPPING_SAUCE = {
          price: 15,
          calories: 0,
  };

  static TOPPING_MAYO = {
          price: 20,
          calories: 5,
  };

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


let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
console.log(hamburger);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());