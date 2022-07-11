import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addstudent } from '../action/userAction'


const Tablee =()=> {
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [phone,setPhone]=useState()
    const[student,setStudent]=useState([])
    const [show, setShow] = useState(false);
    
    const dispatch=useDispatch()

  

  const click=(e)=>{
    e.preventDefault()
       
        
      const allinput={name,email,phone}
      setStudent([...student,allinput])
      
      dispatch(addstudent([...student,allinput]))
      setShow(false)
      
    
    
          
      }
 
  


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add student
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
  );
}

export default Tablee