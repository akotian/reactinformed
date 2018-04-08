import React from 'react'

const Card = (props) => (
  <div className="col-md-4 tile">
    <div className="row">
      <div className="col-md-3">
        {/* Need logic here to determine when this needs to show */}
        <span className="label label-info">You Qualify</span>
      </div>
    </div>
    <div className="row">
      <img className="car-image" src={props.thumb}
        alt={`${props.make} ${props.model}`}/>
    </div>
    <div className="row">
      <div className="col-md-9">
        {props.year}&nbsp;{props.make.toUpperCase()}&nbsp;{props.model.toUpperCase()}
      </div>
      {/* UI does not show rounded values */}
      <div className="col-md-3 pull-right">
        ${Math.ceil(props.partnerPrequalification.emi)}&#47;mo
      </div>
    </div>
    <div className="row">
      <div className="col-md-9">
        {props.odometer} miles&middot;{props.city}{props.state}
      </div>
      <div className="col-md-3">
        ${props.partnerPrequalification.downPayment} down
      </div>
    </div>
  </div>
)

export default Card
