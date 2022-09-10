import React from 'react'
import Wrapper from '../../../hoc/Wrapper'
import BackDrop from '../BackDrop/BackDrop'
import './Modal.css'

const Modal = props => {
  return (
    <Wrapper>
      <BackDrop show={props.showOrNot} click={props.modalClose} />
      <div
        className="modal"
        style={{
          transform: props.showOrNot ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.showOrNot ? '1' : '0',
        }}
      >
        {props.children}
      </div>
    </Wrapper>
  )
}

export default Modal
