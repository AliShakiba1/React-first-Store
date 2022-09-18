import React from 'react'
import Layout from './components/Layout/Layout'
import Account from './containers/Account/Account'
import Checkout from './containers/Checkout/Checkout'
import Shopping from './containers/Shopping/Shopping'

class App extends React.Component {
  render() {
    return (
      <div className="tes">
        <Layout>
          <Switch>
            <Route path="/account" component={Account} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/" exact component={Shopping} />
            <Route
              exact
              render={() => <h1 style={{ textAlign: 'center' }}>Not Found</h1>}
            />
          </Switch>
        </Layout>
      </div>
    )
  }
}

export default App
