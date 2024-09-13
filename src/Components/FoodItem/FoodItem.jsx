import React from 'react'
import './FoodItem.css'
import { assests } from '../../assets/assests'

const FoodItem = ({id,name,price,description,image}) => {
  return (
    <div className='fooditem'>
        <div className="fooditem-img-conainer">
            <img src={image} alt="" className="fooditem-img" />
        </div>
        <div className="fooditem-info">
            <div className="fooditem-name-rating">
                <p>{name}</p>
             
            </div>
            <p className="fooditem-descriptio">{description}</p>
            <p className="fooditem-price">${price}</p>
        </div>

    </div>
  )
}

export default FoodItem
