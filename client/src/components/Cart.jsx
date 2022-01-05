import React, { useState, useEffect } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';

const Cart = ({ show, handleClose, itemInCart }) => {

  let total = itemInCart.reduce((previousValue, obj) => {
    return previousValue + (obj.price * obj.quantity)
  }, 0)

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={(show)}
      onHide={handleClose}
      className='cart'
    >
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <span id="empty-cart">{(itemInCart.length === 0) ? "Shopping cart is empty" :
          ""}</span>
        <Table responsive='sm'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Size</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {itemInCart.map((item) => (
              <tr key={item.productId}>
                <td><img src={item.thumb} className='thumb' /></td>
                <td>{item.name}</td>
                <td>{item.size}</td>
                <td>${Number(item.price)}</td>
                <td>{item.quantity}</td>
              </tr>))}
          </tbody>
        </Table>
      </Modal.Body>

      <Modal.Footer>

        <div className='total'>Total: ${total}</div>
      </Modal.Footer>
    </Modal>
  )
}

export default Cart;