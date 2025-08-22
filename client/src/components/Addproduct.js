import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addproduct } from '../redux/productslice';
import { useDispatch } from 'react-redux';


function Addproduct({ping,setping}) {

const dispatch = useDispatch()
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[newproduct,setnewproduct]=useState({
    
 name: "",
 price: 0,
 qte: "",
 img:"",
 images:["","",""]
 

  })
  return (
     <>
      <Button variant="primary" onClick={handleShow}>
        Add Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<Form>
 <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name product</Form.Label>
        <Form.Control type="text" placeholder="Enter name product" onChange={(e)=>setnewproduct({...newproduct,name:e.target.value})} />
        
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Quantite</Form.Label>
        <Form.Control type="text" placeholder="Enter quantite" onChange={(e)=>setnewproduct({...newproduct,qte:e.target.value})}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Enter image product" onChange={(e)=>setnewproduct({...newproduct,img:e.target.value})} />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Enter price product" onChange={(e)=>setnewproduct({...newproduct,price:e.target.value})} />
        
      </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"   
            onClick={() => {
              dispatch(addproduct(newproduct));
                setping(!ping);
                handleClose();
            }}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Addproduct