export const UPDATE_MAX_DOWNPAYMENT = 'UPDATE_MAX_DOWNPAYMENT'
export const UPDATE_MAX_MONTHLY_PAYMENT = 'UPDATE_MAX_MONTHLY_PAYMENT'
export const UPDATE_SORT_ORDER = 'UPDATE_SORT_ORDER'

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

export function updateSortOrder(newSortOrder) {
  return {
    type: UPDATE_SORT_ORDER,
    payload: newSortOrder
  }

}
