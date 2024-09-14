import React from 'react'
import './FoodItem.css'
import { assests } from '../../assets/assests'

const FoodItem = ({id,name,price,description,image}) => {
  return (
    <div className='fooditem' id='fooditem'>
        <div className="fooditem-img-conainer">
            <img src={image} alt="" className="fooditem-img" />
        </div>
        <div className="fooditem-info">
            <div className="fooditem-name-rating">
                <p>{name}</p>
             <img className='fooditem-rating' src={assests.star} alt="" />
            </div>
            <p className="fooditem-description">{description}</p>
            <p className="fooditem-price">${price}</p>
        </div>

    </div>
  )
}

export default FoodItem
