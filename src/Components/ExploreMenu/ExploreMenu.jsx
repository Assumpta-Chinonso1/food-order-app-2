import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assests'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='exploreMenu' id='exploreMenu'>
      <h1>Explore our Menu</h1>
      <p className='exploreMenu-text'>We have the most flavorful dishes made with the freshest ingredients.
      Every bite is a taste of perfection. </p>
         
         <div className="exploreMenu-lists">
     {menu_list.map((item,index)=> {
          return (
            <div onClick={()=> setCategory(prev=> prev===item.menu_name? "All":item.menu_name)} key={index} className="exploreMenu-item">
           <img className={category===item.menu_name? "active":""} src={item.menu_image} alt="" />
           <p>{item.menu_name}</p>
            </div>
          )
     })}
         </div>
         <hr/>
         </div>

  )
}

export default ExploreMenu