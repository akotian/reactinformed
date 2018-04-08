import {MAX_MONTHLY_PAYMENT_INITIAL, MAX_DOWNPAYMENT_INITIAL} from '../constants'
import
  { UPDATE_MAX_DOWNPAYMENT, UPDATE_MAX_MONTHLY_PAYMENT } from '../actions'
import carsData from '../cars_data.js'


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
    default:
      return state
  }
}
