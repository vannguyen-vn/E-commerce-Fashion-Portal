import React from 'react';
import { Modal, Button, Container, Col, Row } from 'react-bootstrap';

const Cart = ({ showCart, handleClose }) => {

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={showCart}
      onHide={handleClose}
      className='cart'
    >
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <div className='total'>Total: £447</div>
      </Modal.Footer>
    </Modal>
  )
}

export default Cart;