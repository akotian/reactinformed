import React, {Component} from 'react'
import {connect} from 'react-redux'

import {MAX_MONTHLY_PAYMENT_INITIAL} from '../constants'
import {updateMaxMonthlyPayment} from '../actions'
import RangeSlider from '../components/RangeSlider'

class MonthlyPaymentFilter extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          MAX MONTHLY PAYMENT
        </div>
        <div className="col-md-4">
          &#36;{this.props.maxMonthlyPaymentSession}
        </div>
        <div className="row">
          <RangeSlider
            maxValue={MAX_MONTHLY_PAYMENT_INITIAL}
            currentValue={this.props.maxMonthlyPaymentSession}
            handleInputChange={
              (e) => this.props.updateMaxMonthlyPayment(e.target.value)
            } />
        </div>
      </div>
    )

  }
}

export default connect(
  state => ({
    maxMonthlyPaymentSession: state.maxMonthlyPaymentSession
  }),
  {updateMaxMonthlyPayment})(MonthlyPaymentFilter)
