import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }


  foodDetails= [
    {
      id:1,
      foodName:"Paneer Grilled Sandwich",
      foodDetails:"Pan-fried Masasla Paneer",
      foodPrice:200,
      foodImg:"https://i.postimg.cc/PJFLGvvR/60043279.webp"
    },
    {
      id:2,
      foodName:"Veggie Supreme",
      foodDetails:"Onion,Green Capsicum,Mushroom,Black Olives,Sweet Corn",
      foodPrice:369,
      foodImg:"https://i.postimg.cc/hPfzLsHW/veggie-pizza-side-view-out-of-oven.webp"
    },
    {
      id:3,
      foodName:"Paneer Burger",
      foodDetails:" Paneer",
      foodPrice:150,
      foodImg:"https://i.postimg.cc/7ZKHXbp8/1-1-10.jpg"
    },
    {
      id:4,
      foodName:"Veg Masala Roll in Naan",
      foodDetails:"A Homely mix of mashed potato and veggies, seasoned with indian spices ",
      foodPrice:140,
      foodImg:"https://i.postimg.cc/C1wg63pJ/kathi-roll.jpg"
    },
    {
      id:5,
      foodName:"Induglence Brownie",
      foodDetails:"(Eggless) Indugle in richly decadent choclate brownie created with love and topped with bitter-sweet",
      foodPrice:105,
      foodImg:"https://i.postimg.cc/XqT0CbCh/recipe-4391.jpg"
    },
    {
      id:6,
      foodName:"Oreo Cheesecake ice Cream",
      foodDetails:"Pan-fried Masasla Paneer",
      foodPrice:209,
      foodImg:"https://i.postimg.cc/FK9g4kBW/Oreo-Cheesecake-Ice-Cream-Cake-26.jpg"
    },
    {
      id:7,
      foodName:"Mixed-Fried Rice",
      foodDetails:"A little bit of everything comes together so well in this mixed fried rice made with chicken, prawns, eggs and veggies.",
      foodPrice:200,
      foodImg:"https://i.postimg.cc/3xFkjSxN/Mixed-Vegetable-Fried-Rice-3-1.webp"
    },
    {
      id:8,
      foodName:"Kothu-Porotta",
      foodDetails:"shredded flatbread tossed in spicy veggies, eggs, or chicken",
      foodPrice:175,
      foodImg:"https://i.postimg.cc/fWV04fBq/Kothu-Parotta-5.webp"
    },
    {
      id:9,
      foodName:"Paneer-Kathi-Roll",
      foodDetails:"Indian flatbread called paratha, then stuffed with paneer (cheese) that has been marinated in yogurt and spices, as well as onions and peppers.",
      foodPrice:209,
      foodImg:"https://i.postimg.cc/5tBJgxT6/Paneer-kathi-Roll-Featured-1.jpg "
    },
  ]
}
