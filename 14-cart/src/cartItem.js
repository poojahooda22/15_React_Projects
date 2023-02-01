import React from 'react'
import { useGlobalContext } from './context'

const CartItem = ({ id, img, title, price, amount }) => {
    
    return (
      <article className='cart-item'>
        <img src={img} alt={title} />
        <div>
          <h4>{title}</h4>
          
        </div>
        <div>
         
        </div>
      </article>
    )
  }
  
  export default CartItem