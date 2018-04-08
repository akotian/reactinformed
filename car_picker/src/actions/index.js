export const UPDATE_MAX_DOWNPAYMENT = 'UPDATE_MAX_DOWNPAYMENT'

export function updateMaxDownPayment(newMax) {
  return {
    type: UPDATE_MAX_DOWNPAYMENT,
    payload: newMax
  }
}
