import React from 'react'
import { useStateValue } from '../providers/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import './Checkout.css';
import Subtotal from './Subtotal';
function Checkout() {

    const [{ basket, user} , dispatch] = useStateValue();

  return (
    <div className='checkout'>

        <div className='checkout__left'>
          
          {/* <img className='checkout_ad'
          src=' https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
          /> */}

        <h2 className='checkout__title'> Your Shopping Basket</h2>

        
              {/* <CheckoutProduct id="56215"
                title="This is my Product"
                image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                price="199"
                rating="4"
                /> */}
             
             { basket.map(item => (
               <CheckoutProduct 
               id={item.id}
               title={item.title}
               image ={item.image}
               price={item.price}
               rating={item.rating}
               />

             ) )}






 
        
       </div> 

       <div className='checkout__right'>
          <Subtotal />
       </div>
      
    </div>
  )
}

export default Checkout
