const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },get appetizers(){
        return this._courses.appetizers;
      },
      set appetizers(appetizers){
        this._courses.appetizers = appetizers;
    },get mains(){
        return this._courses.mains;
      },
      set mains(mains){
        this._courses.mains = main;
    },get desserts(){
        return this._courses.desserts;
      },
      set desserts(dessert){
        this._courses.desserts = dessert;
      },
      get courses(){
          return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
          }
      },
      addDishToCourse(courseName,dishName,dishPrice){
          let dish = {
            name: dishName,
            price: dishPrice
          }
         return  this._courses[courseName].push(dish); 
      },
      getRandomDishFromCourse(courseName){
          let dishes = this._courses[courseName];
          let rnd = Math.floor(Math.random() * dishes.length)
          return dishes[rnd];
      },
      generateRandomMeal(){
        let appetizer = menu.getRandomDishFromCourse('appetizers');
      
        let main = menu.getRandomDishFromCourse('mains');
        let dessert = menu.getRandomDishFromCourse('desserts');
      
        let totalPrice = appetizer.price + main.price + dessert.price
         return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} ... The price is ${totalPrice}.`;
    }
      
  };
  
  menu.addDishToCourse('appetizers','Queso',23);
  menu.addDishToCourse('mains','Carne',300);
  menu.addDishToCourse('desserts','Pastel',234);
  
  menu.addDishToCourse('appetizers','Brocoli',234);
  menu.addDishToCourse('mains','Pescado',243);
  menu.addDishToCourse('desserts','Puddin',243);
  
  menu.addDishToCourse('appetizers','Edamames',44);
  menu.addDishToCourse('mains','Pollo',44);
  menu.addDishToCourse('desserts','Nieve',44);
  
  let meal = menu.generateRandomMeal()
  console.log(meal);
  