
let menu = {
    _courses : {
     appetizers : [],
     mains: [],
     desserts : []
   },
   get appetizer(){
     this._courses.appetizers
   },
   set appetizer(meal){
     this._courses.appetizers = meal
   },
   get mains(){
     this._courses.mains
   },
   set mains(meal){
     this._courses.mains = meal
   },
   get desserts(){
     this._courses.desserts
   },
   set desserts(meal){
     this._courses.desserts = meal
   },
   get courses(){
     return this._courses
   },
   addDishToCourse(courseName,dishName,dishPrice){
     const dish = {
       name : courseName,
       price : dishPrice
     };
     return this._courses[courseName].push(dish)
   },
 
   getRandomDishFromCourse(courseName){
     const dishes = this._courses[courseName];
     const randomIndex = Math.floor(Math.random() * dishes.length)
     return dishes[randomIndex];
   },
   generateRandomMeal(){
     let appetizer = this.getRandomDishFromCourse("appetizers")
     let main = this.getRandomDishFromCourse("mains")
     let dessert = this.getRandomDishFromCourse("desserts")
     let total = appetizer.price + main.price + dessert.price;
     return `Order is ${appetizer.name},${main.name},${dessert.name} and its costs ${total}`
   }
 }
 
 menu.addDishToCourse("appetizers", "soup", 5.30)
 menu.addDishToCourse("appetizers", "salad", 4.80)
 menu.addDishToCourse("appetizers", "fries", 3.60)
 
 menu.addDishToCourse("mains", "waakye", 7.30)
 menu.addDishToCourse("mains", "fufu", 9.10)
 menu.addDishToCourse("mains", "omo tuo", 9.90)
 
 menu.addDishToCourse("desserts", "cake", 2.10)
 menu.addDishToCourse("desserts", "iced cream", 2.35)
 menu.addDishToCourse("desserts", "caramel", 1.40)
 
 const meal = menu.generateRandomMeal()
 console.log(meal)
 