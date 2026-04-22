import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchProductsAPI } from './productAPI'
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
} from './productSlice'

// Worker saga: runs on each fetchProductsRequest dispatch
function* fetchProductsSaga() {
  try {
    // call() invokes fetchProductsAPI and waits for the Promise to resolve
    const products = yield call(fetchProductsAPI)
    // Success: send products array to reducer
    yield put(fetchProductsSuccess(products))
  } catch (error) {
    // Failure: send error message to reducer
    yield put(fetchProductsFailure(error.message || 'Failed to fetch products'))
  }
}

// Watcher saga: listens for fetchProductsRequest, cancels prior call if new one comes in
export function* watchFetchProducts() {
  yield takeLatest(fetchProductsRequest.type, fetchProductsSaga)
}
