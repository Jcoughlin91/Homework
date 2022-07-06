const pizzaToppings = ["Cheese", "meat", "veggies", "Pineapple"];
function greetCustomer() {
let greeting = "Welcome to the Pizza Club! The toppings are";
  //console.log(`${greeting}`)
for (let toppings of pizzaToppings) {
greeting += ` ${ toppings }`;  
}
  console.log(greeting);
}
greetCustomer();

3
function getPizzaOrder(size, crust, ...toppings) {
  
let order = `One ${size} ${crust} crust pizza with`;  
  for (let topping of toppings) {
order += `${topping}`;
  }
console.log(`${order}...coming up!`);
return [size, crust, toppings];
} 
let customerOrder = getPizzaOrder( "large", "thick", " veggies ", " Pineapple ", " onions "
);



//4
function preparePizza([orderSize, orderCrust, orderToppings]) {
  console.log ("...Your order is coming!...");
  return {
    size: orderSize,
    crust: orderCrust,
    toppings: orderToppings
};
}
 let cookedPizza = preparePizza(customerOder)


//5
function servePizza (pizza) {
let orderReady = `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza! `;

for (let topping of pizza.toppings) {
  orderReady += `${topping},`;
}
console.log(`${topping}, Enjoy!`);
return pizzza;
}
servePizza(cookedPizza);


//6
greetCustomer();

const myPizza =
servePizza(preparePizza(getPizzaOrder("Cheese", "meat", "veggies", "Pineapple")));

console.log(myPizza);
