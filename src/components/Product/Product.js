import React,{useState} from 'react'
import "./Product.css"
import {useSelector} from "react-redux"
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/actions/Actions';
const Product = ({id,title,image,price,rating}) => {
  const dispatch=useDispatch()
  const toseestore=useSelector(state=>state.myreducers)

  // console.log("store",toseestore)
 
 
 
  // const[selectvalue,setSelectvalue]=useState(1)
  // const [i,setI]=useState(1)
  // const selectfun=(e)=>{
  //     // setSelectvalue(e.target.value)
  //     setI(e.target.value)
  //     setSelectvalue(`${price * e.target.value} `)
  //  console.log(price*e.target.value)
  //     // dispatch(cart(selectvalue))
  //     }
  //     console.log("sets",selectvalue)

  const obj={
    id,
    image,
    title,
    price,
    rating,
    total:price,
  }
// console.log(obj)



  const addtostore=()=>{
    console.log("im from add to cart")
    const item=toseestore.some((i)=> i.id === id)
    if(!item){
      dispatch(addItem(obj));
      // alert("added in cart")
    }else{
      console.log("ullathanda irukken")
      alert("already in cart")

    }
      
  }


  return (
    <div className='product'>
          <img className='product_img' src={image} alt="img"/>
            <div className='product_info'>
                <p><strong> {title} </strong></p>
                <p className='product_price'>
                    <small>Rs.</small>
                    <strong>{price}</strong>
                </p>

                <div className='product_rating'>
                    {
                        Array(rating).fill('*').join('')
                    }
                    
                </div>

            </div>

            {/* <select style={{margin:"10px"}} value={i} onChange={selectfun}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
         </select> */}
          

            <button onClick={addtostore}>Add to cart</button>



    </div>
  )
}

export default Product