import React, { useState } from 'react'
import './FoodItem.css'
import { assests } from '../../assets/assests'

const FoodItem = ({id,name,price,description,image}) => {

  const [addItem, setAddItem] = useState(0)

  return (
    <div className='fooditem' id='fooditem'>
        <div className="fooditem-img-conainer">
            <img src={image} alt="" className="fooditem-img" />
        </div>
        <div className="fooditem-info">
            <div className="fooditem-name-rating">
                <p>{name}</p>
             <img className='fooditem-rating' src={assests.star} alt="" />
             {
              (!addItem) 
              ? <img className='addItem' onClick={() => setAddItem(prev=>prev+1)} src={assests.add} alt="" />
              : <div className="foodAdd">
                   <img className='remove' onClick={()=> setAddItem(prev=>prev-1)} src={assests.remove} alt="" />
                   <p>{addItem}</p>
                   <img className='addItem' onClick={()=> setAddItem(prev=>prev+1)} src={assests.add} alt="" />
              </div>
             }
            </div>
            <p className="fooditem-description">{description}</p>
            <p className="fooditem-price">${price}</p>
        </div>

    </div>
  )
}

export default FoodItem
