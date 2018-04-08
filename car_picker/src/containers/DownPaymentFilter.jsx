import React, {Component} from 'react'
import {connect} from 'react-redux'

import {MAX_DOWNPAYMENT_INITIAL} from '../constants'
import {updateMaxDownPayment} from '../actions'
import RangeSlider from '../components/RangeSlider'

class DownPaymentFilter extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          MAX DOWN PAYMENT
        </div>
        <div className="col-md-4">
          &#36;{this.props.maxDownPaymentSession}
        </div>
        <div className="row">
          <RangeSlider
            maxValue={MAX_DOWNPAYMENT_INITIAL}
            currentValue={this.props.maxDownPaymentSession}
            handleInputChange={
              (e) => this.props.updateMaxDownPayment(e.target.value)
            } />
        </div>
      </div>
    )

  }
}

export default connect(
  state => ({
    maxDownPaymentSession: state.maxDownPaymentSession
  }),
  {updateMaxDownPayment})(DownPaymentFilter)
