import React, {Component} from 'react'

import ListCars from '../containers/ListCars'
import PaymentFilters from '../components/PaymentFilters'
import SortCars from '../containers/SortCars'

const App = () => (
  <div className="row">
    <div className="col-md-3">
      <PaymentFilters />
    </div>
    <div className="col-md-9 results-container">
      <div className="row">
        <SortCars />
      </div>
      <ListCars />
    </div>
  </div>
)

export default App
