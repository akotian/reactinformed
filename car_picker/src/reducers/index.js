import
  { UPDATE_MAX_DOWNPAYMENT, updateMaxDownPayment } from '../actions'
import carsData from '../cars_data.js'


// Setting default filter values, for initial paylaod
const maxMonthlyInitial = 1000
const maxDownPaymentInitial = 1000
// Max values for session when page loads is the same as Initial Default
const maxMonthlySession = 1000
const maxDownPaymentSession = 1000

// Adding default values to state, for easy management by reducers
const initialState = {
  ...carsData,
  ...{maxMonthlyInitial, maxDownPaymentInitial, maxMonthlySession, maxDownPaymentSession}
}

export default function carPickerApp(state=initialState, action) {
  switch(action.type) {
    case UPDATE_MAX_DOWNPAYMENT:
      return { ...state, ...{maxDownPaymentSession: parseInt(action.payload)} }
    default:
      return state
  }
}
