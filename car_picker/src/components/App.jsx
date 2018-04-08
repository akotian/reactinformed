import React, {Component} from 'react'

import ListCars from '../containers/ListCars'
import PaymentFilters from '../components/PaymentFilters'


// export class App extends Component {
//
//   render() {
//     <div>Hello I am the redux App</div>
//   }
//
// }

const App = () => (
  <div className="row">
    <div className="col-md-3">
      <PaymentFilters />
    </div>
    <div className="col-md-9 results-container">
      <div className="row">
        Vehicle Count, Downpayment Filter here
      </div>
      <ListCars />
    </div>
  </div>
)

export default App
