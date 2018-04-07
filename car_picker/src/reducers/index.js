// import { fetchCars } from '../actions'
import carsData from '../cars_data.js'

const initialState = {
  carsData
}

export default function carPickerApp(state=initialState, action) {
  switch(action.type){
    default:
      return state
  }
}
