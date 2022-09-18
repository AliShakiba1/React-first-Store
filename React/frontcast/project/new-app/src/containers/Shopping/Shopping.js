import React from 'react'
import Control from '../../components/Control/Control'
import Order from '../../components/order/order'
import Modal from '../../components/UI/Modal/Modal'
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
    purchased: false,
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

  purchasedHandler = () => {
    this.setState({ purchased: true })
  }

  modalCloseHandler = () => {
    this.setState({ purchased: false })
  }

<<<<<<< HEAD
  render() {
=======
  purchasedContinueHandler = () => {
    this.props.history.push('/checkout')
    const orders = {
      products: this.state.products,
      totalPrice: this.state.totalPrice,
      customer: {
        name: 'ali',
      },
    }

    this.setState({ loading: true })

    axios
      .post('/orders.json', orders)
      .then(response => {
        this.setState({ loading: false, purchased: false })
        console.log(response)
      })
      .catch(err => console.log(err))
  }

  render() {
    let order = null

    let control = <Loader>Loading...</Loader>

    if (this.state.products) {
      control = (
        <Control
          addProduct={this.addProductHandler}
          removeProduct={type => this.removeProductHandler(type)}
          total={this.state.totalPrice}
          show={this.purchasedHandler}
        />
      )
      order = (
        <Order
          products={this.state.products}
          no={this.modalCloseHandler}
          total={this.state.totalPrice}
          yes={this.purchasedContinueHandler}
        />
      )
    }

    if (this.state.loading) {
      order = <Loader>Loading...</Loader>
    }

>>>>>>> 3cf3cec... adding acount page
    return (
      <Wrapper>
        <Modal
          showOrNot={this.state.purchased}
          modalClose={this.modalCloseHandler}
        >
          <Order
            products={this.state.products}
            no={this.modalCloseHandler}
            total={this.state.totalPrice}
            yes={() => console.log(' purchased contenue Hander ')}
          />
        </Modal>
        <Control
          addProduct={this.addProductHandler}
          removeProduct={type => this.removeProductHandler(type)}
          total={this.state.totalPrice}
          show={this.purchasedHandler}
        />
      </Wrapper>
    )
  }
}

export default Shopping
