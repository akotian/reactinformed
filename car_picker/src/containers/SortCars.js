import React, {Component} from 'react'
import {connect} from 'react-redux'

import {updateSortOrder} from '../actions'
import {
  SORT_DOWNPAYMENT_ASCENDING, SORT_DOWNPAYMENT_DESCENDING,
  SORT_MONTHLY_PAYMENT_ASCENDING, SORT_MONTHLY_PAYMENT_DESCENDING
} from '../constants'


class SortCars extends Component {

  sortCars = (e) => {
    const newSortOrder = e.target.getAttribute("data-sort")
    this.props.updateSortOrder(newSortOrder)
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-2">
          {this.props.autoCount.toLocaleString()} vehicles
        </div>
        <div className="col-md-10">
          Sort By:&nbsp;
          <div className="btn-group" role="group" onClick={(e) => this.sortCars(e)}>
            <button type="button" className="btn btn-default" data-sort={SORT_DOWNPAYMENT_ASCENDING}>
              Down Payment $-$$
            </button>
            <button type="button" className="btn btn-default" data-sort={SORT_DOWNPAYMENT_DESCENDING}>
              Down Payment $$-$
            </button>
            <button type="button" className="btn btn-default" data-sort={SORT_MONTHLY_PAYMENT_ASCENDING}>
              Monthly Payment $-$$
            </button>
            <button type="button" className="btn btn-default" data-sort={SORT_MONTHLY_PAYMENT_DESCENDING}>
              Monthly Payment $$-$
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    autoCount: state.autoCount,
  }),
  {updateSortOrder})(SortCars)
