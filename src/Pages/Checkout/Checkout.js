import React from 'react'
import './Checkout.css'
import Header from '../../components/Header/Header'
import { useSelector } from 'react-redux'
import Carttemp from '../Carttemp'
import { useDispatch } from 'react-redux'
import { emparr } from '../../redux/actions/Actions'
const Checkout = () => {
  const dispatch = useDispatch()
  const mystore = useSelector(state => state.myreducers)
  console.log(mystore)
  return (
    <div>
      <div className='nav'> <Header /> </div>

      {mystore.length > 0 ? (
        <div className='listbox'>
          <button className='checkbtn' onClick={() => {
            alert("ordered successfully")
            dispatch(emparr())
          }}>Checkout</button>
          {mystore.map((item, index) => <div className='indi'> <Carttemp {...item} index={index} key={index} /> </div>)}


        </div>) :
        (
          <div className='checkout'>

            <div className='checkout_left'>
              <span>  <img className='checkout_ad'
                src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
                alt="ad"
              /></span>
              <span> <h1> Checkout </h1></span>

              <h1>Your Amazon Cart is empty

                Shop today's deals</h1>




            </div>
            <div className='blank'>

            </div>

            <p>The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.

              Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.</p>
          </div>
        )}



    </div>
  )
}

export default Checkout