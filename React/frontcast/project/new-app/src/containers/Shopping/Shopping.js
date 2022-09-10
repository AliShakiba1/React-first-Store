import React from 'react'
import Control from '../../components/Control/Control'
import Wrapper from '../../hoc/Wrapper'

const prices = {
  product1: 12,
  product2: 31,
  product3: 42,
  product4: 124,
}

class Shopping extends React.Component {
  state = {
    products: {
      product1: 0,
      product2: 0,
      product3: 0,
      product4: 0,
    },
    totalPrice: 0,
  }

  addProductHandler = type => {
    const preCount = this.state.products[type]
    const newCount = preCount + 1
    const updatedProduct = {
      ...this.state.products,
    }
    updatedProduct[type] = newCount
    const prePrice = this.state.totalPrice
    const newPrice = prePrice + prices[type]
    this.setState({ totalPrice: newPrice, products: updatedProduct })
  }

  removeProductHandler = type => {
    const preCount = this.state.products[type]
    const newCount = preCount - 1
    const updatedProduct = {
      ...this.state.products,
    }
    updatedProduct[type] = newCount
    const prePrice = this.state.totalPrice
    const newPrice = prePrice - prices[type]
    this.setState({ totalPrice: newPrice, products: updatedProduct })
  }

  render() {
    return (
      <Wrapper>
        <Control
          addProduct={this.addProductHandler}
          removeProduct={type => this.removeProductHandler(type)}
          total={this.state.totalPrice}
        />
      </Wrapper>
    )
  }
}

export default Shopping
