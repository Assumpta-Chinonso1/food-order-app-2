import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
 
    const { food_lists} = useContext(StoreContext)
    
  return (
    <div className='food-display' id='food-display'>
        
        <h2>Top Dishes Avaliable</h2>
        <div className="foodDisplay-items">
          {food_lists.map((item,index) => {
            return <FoodItem key={index} id={item._id} name={item.name}
            price={item.price} description={item.description} image={item.image} />
          })}
        </div>

        </div>
  )
}

export default FoodDisplay