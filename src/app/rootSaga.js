import { all } from 'redux-saga/effects'
import { watchFetchProducts } from '../features/products/productSaga'

// Root saga combines all feature sagas
export default function* rootSaga() {
  yield all([watchFetchProducts()])
}
