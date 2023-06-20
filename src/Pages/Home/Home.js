import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Product from '../../components/Product/Product'
import './Home.css'
import { ProductList } from '../../productdata/Productlist'
import { useSelector } from 'react-redux';
const HomeContainer = () => {
      const mystore = useSelector(state => state)
      // console.log("mystore",mystore)


      const [filterdata, setFilterdata] = useState("")
      const myfun = (i) => {
            let data = i;
            console.log("getting inpd from header", i)
            setFilterdata(i)
      }
      console.log("stored inpdata--", filterdata)



      const filteru = ProductList.filter(item => item.title.toLowerCase().includes(filterdata.toLowerCase()))


      return (



            <div className='main'>
                  <div className='headernav'> <Header func={myfun} /> </div>
                  <div className='home'>
                        <img
                              className='home_image'
                              src="https://m.media-amazon.com/images/I/71oT8vw4TIL._SX3000_.jpg"
                              alt="" />


                        <div className='home_row'>

                              {filterdata.length === 0 ? (


                                    ProductList.map((p) => <Product {...p} key={p.id} />)
                              ) : (
                                    filteru.map((p) => <Product {...p} key={p.id} />)
                              )}
                        </div>
                  </div>


            </div>
      )
}


const Home = () => {
      return (

            <HomeContainer />

      )
}
export default Home