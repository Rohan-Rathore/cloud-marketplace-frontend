import React from 'react'
import { Modal , Button} from 'react-bootstrap'

function ShowPredefineReq(props) {
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
          {props.reqs.details['csp_name']}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='lead'>
          {props.reqs.title}
        </p>
        <div className='fw-bold'>
          Service - {props.reqs.details['service_name']} 
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className='delete-btn'  onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  )
}

export default ShowPredefineReq