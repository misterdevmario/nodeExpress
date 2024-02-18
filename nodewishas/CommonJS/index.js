// const sum = require('./add');

// console.log(sum(1, 2));
// // sum.js


// require('./batman')
// require('./superman')

// const superHero = require('./super-hero')

// console.log(superHero.getName())

// superHero.setName('Superman')
// console.log(superHero.getName())


// const SuperHero = require('./super-hero')

// const batman = new SuperHero('Batman')
// console.log(batman.getName())
// batman.setName('Bruce Wayne')
// console.log(batman.getName())

// const superman = new SuperHero('Superman')
// console.log(superman.getName())
// superman.setName('Clark Kent')
// console.log(superman.getName())

// const math = require('./math')

// const { add, minus } = math

// console.log(add(1, 2))
// console.log(minus(1, 2))

const data = require('./data.json')

//console.log(data, "Hello")

//BUILT_IN MODULES

const path = require('path')

 //console.log(__dirname)
 //console.log(__filename)

//  console.log(path.dirname(__filename))
//console.log(path.basename(__dirname))
//  console.log(path.extname(__filename))

//  console.log(path.parse(__filename))
//  console.log(path.isAbsolute(__filename))

//console.log(path.join("folder1", "//folder2", "folder3", "file.txt"))


//Callback pattern
// const greet = (name) => {
//     console.log(`Hello ${name}`)
// }

// const greetMario = (greetFn) =>{
//     const name = 'Mario'
//     greetFn(name)
// }

// greetMario(greet)

//module.exports = greet

//Events

// const EventEmitter = require('events')
// const emitter = new EventEmitter()

// emitter.on("Order pizza", ({sizes, toppings}) => {
//     console.log(`Pizza ordered:{sizes: ${sizes}, toppings: ${toppings}}`)
// })

// emitter.emit("Order pizza",{sizes: ['small', 'medium'], toppings: ['cheese', 'pepperoni']})

const PizzaShop = require('./pizzaShop/pizzaShop')
const DrinkMachine = require("./pizzaShop/drinkMachine")

const pizzaShop = new PizzaShop()
const drinkMachine = new DrinkMachine()

pizzaShop.on("order",(size, topping) => {
    console.log(`Pizza ordered: ${size}, ${topping}`)
    drinkMachine.serveDrink(size)
})

pizzaShop.order("Large","Pepperoni")
pizzaShop.displayOrderNumber()