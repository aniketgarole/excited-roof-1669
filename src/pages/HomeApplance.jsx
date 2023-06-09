import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
import Sidebar from '../components/Sidebar'
import ProductItem from '../components/ProductItem'
import { useSearchParams } from 'react-router-dom'
import { getapplince } from '../Redux/Applince/action'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
const HomeApplance = () => {
  let [search,setsearch]=useSearchParams()
  let url="https://jolly-hose-hen.cyclic.app/quickdata/?category=home"
  const data=["FURNITUR","Mattresses","Wardrobes","Shoe RacksShoe Racks","Home Decor"]
  const grocerydata=useSelector(state=>state.applince.applince)
  console.log(grocerydata)
  const dispatch=useDispatch()
  useEffect(()=>{
    let name=search.getAll("name")
    let order=search.get("order")
    let obj={
      params:{
        name,
        _sort:order&&"price",
        _order:order
      }
    }

    dispatch(getapplince(url,obj))
  },[search])
  return (
    <>
    <NavBar/>
    <div style={{display:"flex"}}>
    <Sidebar data={data}/>
    <ProductItem grocerydata={grocerydata}/>

    </div>
    <Footer/>
    </>
  )
}

export default HomeApplance