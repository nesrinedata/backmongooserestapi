import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { deleteproduct } from '../redux/productslice';
import Editproduct from './Editproduct';
function Productcard({el,ping,setping}) {
    const dispatch = useDispatch();
  return (
   
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el?.img} />
      <Card.Body>
        <Card.Title>{el?.name}</Card.Title>
        <Card.Text>
         {el?.price}
        </Card.Text>
        <Button variant="primary"
        onClick={()=>{dispatch(deleteproduct(el?._id));setping (!ping)}}>Delete</Button>
      
      <Editproduct el={el} ping={ping} setping={setping}/>
      </Card.Body>
    </Card>


  )
}

export default Productcard