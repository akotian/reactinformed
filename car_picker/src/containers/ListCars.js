import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {fetchCars} from '../actions'

import Card from '../components/Card'


class ListCars extends Component {

  showCarTile(car) {
    const {partnerPrequalification: {downPayment, emi}} = car
    if(downPayment <= this.props.maxDownPaymentSession &&
        emi <= this.props.maxMonthlyPaymentSession) {
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
    maxDownPaymentSession: state.maxDownPaymentSession,
    maxMonthlyPaymentSession: state.maxMonthlyPaymentSession
  }),
  null)(ListCars)
