import React from 'react'
import { useSelector } from 'react-redux';
import Productcard from './Productcard';
import Addproduct from './Addproduct';

function Shop({ping,setping}) {
    const products = useSelector((state) => state.product.productlist);
  
    return (
    <>
    <div>
        <Addproduct ping={ping} setping={setping}/>
    </div>
    <div style={{display:"flex", justifyContent:"space-around",flexwrap:"wrap",padding:"50px"}}>
    {products?.map((el)=><Productcard  el={el} ping={ping} setping={setping}/>)}
    </div>
    </>
  )
}

export default Shop