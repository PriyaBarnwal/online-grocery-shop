import {GET_ALLPRODUCTS} from './constants'
import products from '../../products.json'

export const getAllProducts =()=>async(dispatch)=> {
  console.log(products)
  dispatch({
    type: GET_ALLPRODUCTS,
    payload: products
  })
}