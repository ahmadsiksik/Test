import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import Sushi from '../../assets/Sushi.jpg'
import Schnitzel from '../../assets/Schnitzel.jpg'
import Barbecue from '../../assets/Barbecue.jpg'
import GreenBowl from '../../assets/GreenBowl.jpg'
import Falafel from '../../assets/Falafel.jpg'
import Shawarma from '../../assets/Shawarma.png'
import Pizza from '../../assets/Pizza.jpg'
import Mansaf from '../../assets/Mansaf.jpg'
import Koshary from '../../assets/Koshary.webp'
import Couscous from '../../assets/Couscous.jpg'


import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';

 const DUMMY_MEALS = [
   {
     id: 'm1',
     name: 'Sushi',
     description: 'Finest fish and veggies',
     price: 22.99,
     img:Sushi,
   },
   {
     id: 'm2',
     name: 'Schnitzel',
     description: 'A german specialty!',
     price: 16.5,
     img:Schnitzel,

   },
   {
     id: 'm3',
     name: 'Barbecue Burger',
     description: 'American, raw, meaty',
     price: 12.99,
     img:Barbecue,

   },
   {
     id: 'm4',
     name: 'Green Bowl',
     description: 'Healthy...and green...',
     price: 18.99,
     img:GreenBowl,

   },

   {
    id: 'm5',
    name: 'Falafel with Hummus',
    description: 'Arabic food',
    price: 1.99,
    img:Falafel,
  },

  {
    id: 'm6',
    name: 'Shawarma',
    description: 'popular Middle Eastern dish ',
    price: 4.5,
    img:Shawarma,

  },

  {
    id: 'm7',
    name: 'Pizza',
    description: 'italian fast food',
    price: 20.00,
    img:Pizza,

  },

  {
    id: 'm8',
    name: 'Mansaf',
    description: 'Jordanian food that is fat and infects idleness',
    price: 55.99,
    img:Mansaf,

  },

  {
    id: 'm9',
    name: 'Koshary',
    description: 'Egypts national dish',
    price: 4.99,
    img:Koshary,

  },
  
  {
    id: 'm10',
    name: 'Couscous',
    description: 'Traditionally served with a stew',
    price: 6.99,
    img:Couscous,

  },

 ];


 const AvailableMeals = () => {
   const [meals,setMeal]=useState([]);
   const [isLoad,setLoad]=useState(true);

 useEffect(()=>{
   const fitchdata=async()=>{
     const data = await fetch('https://none-3f229-default-rtdb.firebaseio.com/meals.json');
     const res = await data.json();
     const food=[];
     for (const key in res) {
       food.push({
         id:key,
         name:res[key].name,
         description:res[key].description,
         price:res[key].price,
       })
     }
     setMeal(food);
   setLoad(false);
   }

   fitchdata();

 },[])
 console.log(isLoad);

  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      img={meal.img}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {<ul>{mealsList}</ul>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
