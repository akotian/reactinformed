import React from 'react'

const RangeSlider = (props) => (
  <div className="row">
    {/* Bootstramp messing with input[range] CSS */}
    <div className="col-md-10">
      <input
        type="range" min="1" max={props.maxValue}
        value={props.currentValue}
        onChange={props.handleInputChange}/>
    </div>
  </div>
)

export default RangeSlider
