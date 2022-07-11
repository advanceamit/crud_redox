import React from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { addstudent } from '../action/userAction'
import { useDispatch } from 'react-redux';

const  Updat = (props) => {
    console.log("jii",props.id);
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [phone,setPhone]=useState()
    const [show, setShow] = useState(false);
    const data=useSelector((state=>state.user))
    const[editdata,setEditdata]=useState(data)
    
    console.log(data)
    console.log("editdata",editdata);
    const dispatch=useDispatch()

    
    
    console.log(name,email,phone);
    const click =()=>{
        editdata[props.id].name=name
        editdata[props.id].email=email
        editdata[props.id].phone=phone
        setEditdata([...editdata])
        dispatch(addstudent([...editdata]))
        
        

        
        
        setShow(false)
    }
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  return (
    <>
     <Button variant="primary" onClick={handleShow}>
        edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Students Details</Modal.Title>
        </Modal.Header>
        <Form>
        <Form.Group controlId="name">
          <Form.Label>Enter Name</Form.Label>
          <Form.Control type="text" name="name" onChange={(e)=>setName(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control type="email" name="email"  onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Enter Phone</Form.Label>
          <Form.Control type="number" name="phone"  onChange={(e)=>setPhone(e.target.value)} />
        </Form.Group>
        </Form>
        <Modal.Footer>
          
          <Button variant="primary" onClick={click}>
            Save 
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Updat