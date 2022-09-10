import React from 'react'
import './button.css'

const Btn = props => {
  return (
    <button className={`btn ${props.btnType}`} onClick={props.click}>
      {props.children}
    </button>
  )
}

export default Btn
