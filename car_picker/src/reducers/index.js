import {MAX_MONTHLY_PAYMENT_INITIAL, MAX_DOWNPAYMENT_INITIAL} from '../constants'
import {
  UPDATE_MAX_DOWNPAYMENT, UPDATE_MAX_MONTHLY_PAYMENT,
  UPDATE_SORT_ORDER } from '../actions'
import carsData from '../cars_data.js'

import {
  SORT_DOWNPAYMENT_ASCENDING, SORT_DOWNPAYMENT_DESCENDING,
  SORT_MONTHLY_PAYMENT_ASCENDING, SORT_MONTHLY_PAYMENT_DESCENDING
} from '../constants'


// Max values for session when page loads is the same as Initial Default
const maxMonthlyPaymentSession = MAX_MONTHLY_PAYMENT_INITIAL
const maxDownPaymentSession = MAX_DOWNPAYMENT_INITIAL

// Adding default values to state, for easy management by reducers
const initialState = {
  ...carsData,
  ...{maxMonthlyPaymentSession, maxDownPaymentSession}
}

export default function carPickerApp(state=initialState, action) {
  switch(action.type) {
    case UPDATE_MAX_DOWNPAYMENT:
      return { ...state, ...{maxDownPaymentSession: parseInt(action.payload)} }
    case UPDATE_MAX_MONTHLY_PAYMENT:
      return { ...state, ...{maxMonthlyPaymentSession: parseInt(action.payload)} }
    case UPDATE_SORT_ORDER:
      // Using inbuilt Array Sort function, to perform sorting Client side.
      // This Sort is a non stable sort
      if (action.payload === SORT_DOWNPAYMENT_ASCENDING) {
        return {...state,
                ...{autos: state.autos.sort((a, b) => (
                  a.partnerPrequalification.downPayment - b.partnerPrequalification.downPayment
                ))}}
      }
      else if (action.payload === SORT_DOWNPAYMENT_DESCENDING) {
        return {...state,
                ...{autos: state.autos.sort((a, b) => (
                  b.partnerPrequalification.downPayment - a.partnerPrequalification.downPayment
                ))}}
      }
      else if (action.payload === SORT_MONTHLY_PAYMENT_ASCENDING) {
        return {...state,
                ...{autos: state.autos.sort((a, b) => {
                  a.partnerPrequalification.emi - b.partnerPrequalification.emi
                })}}
      }
      else if (action.payload === SORT_MONTHLY_PAYMENT_DESCENDING) {
        return {...state,
                ...{autos: state.autos.sort((a, b) => (
                  b.partnerPrequalification.emi - a.partnerPrequalification.emi
                ))}}
      }
    default:
      return state
  }
}
