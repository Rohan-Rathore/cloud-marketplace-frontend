import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import axios from 'axios';

function ConfirmDelete(props) {
  const [deletetext, setdeletetext] = useState('');
  const id = props.sid;
  const header = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
  const deleteService = () =>{
    console.log(deletetext);
    if (deletetext !== '') {
      axios({
        method: 'delete',
        url: `http://localhost:8000/api/service/remove/${id}`,
        headers: header
      })
      .then((res)=>{
        console.log(res);
        props.callDeleteService(true);
        props.onHide();
      }).catch((err)=>{
        console.log(err); //handle error
      })
    }
    else{
      console.log('please enter delete text in text box.');
    }
  }
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Confirm Delete Service
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='s-input'>
          <input type="text" placeholder='delete' className='' onChange={(e)=>setdeletetext(e.target.value)} />
          <p>To delete the service enter <strong>delete</strong> in text box then click delete button.</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className='delete-btn' onClick={()=>deleteService()}>Delete</button>
      </Modal.Footer>
    </Modal>
  )
}

export default ConfirmDelete