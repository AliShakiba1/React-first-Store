import React from 'react'
import './BackDrop.css'

const BackDrop = props => {
  return props.show ? (
    <div className="back-drop" onClick={props.click}></div>
  ) : null
}

export default BackDrop
