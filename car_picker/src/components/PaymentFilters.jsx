import React from 'react'

import DownPaymentFilter from '../containers/DownPaymentFilter'

const PaymentFilters = (props) => (
  <div>
    <div className="row">
      <div className="col-md-12">
        <button type="button" className="btn btn-default">
          <span className="glyphicon glyphicon-filter"></span>
          Filters
        </button>
      </div>
    </div>
    <DownPaymentFilter />
  </div>
)

export default PaymentFilters
