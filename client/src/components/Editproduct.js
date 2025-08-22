import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addproduct, editproduct } from '../redux/productslice';
import { useDispatch } from 'react-redux';


function Editproduct({ el,ping,setping}) {

const dispatch = useDispatch()
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[edited,setedited]=useState({
    
 name: el?.name,
 price: el?.price,
 qte: el?.qte,
 img:el?.img,
 images:el?.images
 

  })
  return (
     <>
      <Button variant="primary" onClick={handleShow}>
        Edit Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<Form>
 <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name product</Form.Label>
        <Form.Control type="text" placeholder={el?.name} onChange={(e)=>setedited({...edited,name:e.target.value})} />
        
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Quantite</Form.Label>
        <Form.Control type="text" placeholder={el?.qte} onChange={(e)=>setedited({...edited,qte:e.target.value})}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder={el?.img} onChange={(e)=>setedited({...edited,img:e.target.value})} />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder={el?.price} onChange={(e)=>setedited({...edited,price:e.target.value})} />
        
      </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"   
            onClick={() => {
              dispatch(editproduct({id:el?._id,edited}));
                setping(!ping);
                handleClose();
            }}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Editproduct