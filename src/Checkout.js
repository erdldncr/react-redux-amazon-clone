import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import CheckoutProduct from './CheckoutPrdocut'
export default function Checkout() {
  const[{basket,user},dispatch]=useStateValue()
  

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>{user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {basket.map(item=>(
          <CheckoutProduct
            {...item}
          />

        ))}
        </div>
      </div>
      <div className="checkout__right">
          <Subtotal/>

        
      </div>
    </div>
  );
}
