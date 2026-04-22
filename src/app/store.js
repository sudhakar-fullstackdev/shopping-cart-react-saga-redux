import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import productReducer from '../features/products/productSlice'
import rootSaga from './rootSaga'

// 1. Create saga middleware instance
const sagaMiddleware = createSagaMiddleware()

// 2. Inject into Redux store, disable default serializable check (saga uses effects)
const store = configureStore({
  reducer: {
    products: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
})

// 3. Start root saga AFTER store creation
sagaMiddleware.run(rootSaga)

export default store
