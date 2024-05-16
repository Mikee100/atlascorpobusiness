import React from 'react'
import NavigationBar from '../General Components/NavigationBar'
import './checkout.css'

import Form from './Form';


export default function Checkout({totalPrice,cartItems}) {
   

   
  return (
    <div className='checkout_container'>
        
<h4>Checkout</h4>
<p className='shippingdetails' >Shipping Details</p>
        <div className='' >
        <div className='order_summary_checkout' >
        <p>Order Summary</p>
        <p className='p_carttotal' >Subtotal</p>
<small className='cart_totalitemsprice' >${totalPrice}</small>
<p>Shipping:</p>
<p>VAT:</p>
<button className='checkout_btn' >Go to Payment Details</button>
      </div>
      

     <Form  />

        </div>


<NavigationBar   />
    </div>
  )
}
