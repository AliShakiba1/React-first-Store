import React from 'react'
import './Modal.css'

const Modal = props => {
  return (
    <div
      className="modal"
      style={{
        transform: props.showOrNot ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.showOrNot ? '1' : '0',
      }}
    >
      {props.children}
    </div>
  )
}

export default Modal
