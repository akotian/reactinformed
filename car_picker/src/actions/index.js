export const UPDATE_MAX_DOWNPAYMENT = 'UPDATE_MAX_DOWNPAYMENT'
export const UPDATE_MAX_MONTHLY_PAYMENT = 'UPDATE_MAX_MONTHLY_PAYMENT'

export function updateMaxDownPayment(newMax) {
  return {
    type: UPDATE_MAX_DOWNPAYMENT,
    payload: newMax
  }
}

export function updateMaxMonthlyPayment(newMax) {
  return {
    type: UPDATE_MAX_MONTHLY_PAYMENT,
    payload: newMax
  }
}
