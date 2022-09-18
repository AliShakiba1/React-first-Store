import React from 'react'
import Wrapper from '../../hoc/Wrapper'
import Btn from '../UI/Button/button'
import './order.css'

const Order = props => {
  const summery = Object.keys(props.products).map(item => {
    return (
      <li key={item}>
        {item}:{props.products[item]}
      </li>
    )
  })
  return (
    <Wrapper>
      <h3>Order</h3>
      <ul>{summery}</ul>
      <p>Total Price : {props.total}</p>
      <p>Continue ? </p>
      <Btn btnType="success" click={props.yes}>
        Yes
      </Btn>
      <Btn btnType="danger" click={props.no}>
        no
      </Btn>
    </Wrapper>
  )
}

export default Order
