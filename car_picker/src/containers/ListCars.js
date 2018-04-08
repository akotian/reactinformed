import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {fetchCars} from '../actions'

import Card from '../components/Card'


class ListCars extends Component {

  // componentDidMount() {
  //   // Fetch the list of available cars here
  // }
  showCarTile(car) {
    if(car.partnerPrequalification.downPayment <= this.props.maxDownPaymentSession) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="row">
        {this.props.autos.map((car, index, allCars) =>
          <div key={car.id}>
            {this.showCarTile(car) ? <Card {...car} />: ''}
          </div>
        )}
      </div>
    )
  }
}

export default connect(
  state => ({
    autos: state.autos,
    maxDownPaymentSession: state.maxDownPaymentSession
  }),
  null)(ListCars)
