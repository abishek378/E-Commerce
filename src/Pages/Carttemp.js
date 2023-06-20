import React,{useCallback,useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../redux/actions/Actions';
import {tot} from "../redux/actions/Actions"

const Carttemp = (props) => {
    const dispatch=useDispatch()
    // console.log("myid",props.id)
    const mystore=useSelector(state=>state.myreducers)
    // console.log(mystore)

    const totstore=useSelector(state=>state.reducer2)
// console.log("tot",totstore)

//     const cartstore=useSelector(cart=>cart)
// console.log("cartstore",cartstore)



    const[selectvalue,setSelectvalue]=useState(1)
    const [i,setI]=useState(1)
    
  


    const selectfun = (e) => {
      setI(e.target.value);
      setSelectvalue(props.price * e.target.value);
  let total=props.price * e.target.value;
  // console.log(tot)
  dispatch(tot(props.id,total)) 
    };
    
   
  useEffect(()=>{

    console.log("cu",mystore)
  },[selectvalue])
    
        const handleDelete=()=>{
            dispatch(deleteItem(props.id))
            
                }

console.log("change", mystore)

  return (
    <div className='carttemp'>
<img src={props.image} alt="pic" height={350} width={400}></img>
<h1>Title:{props.title}</h1>



  <h4>
    Price: {props.price} {i > 1 ? `* ${i} items = ${selectvalue}` : ''}
  </h4>



<p>Rating:{props.rating}</p>
<p>myid=={props.id}</p>
<select style={{margin:"10px"}} value={i} onChange={selectfun}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
         </select>

         <button onClick={handleDelete}>Remove</button>
    </div>
  )
}

export default Carttemp