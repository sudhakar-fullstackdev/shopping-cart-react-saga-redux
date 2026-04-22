import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  products: [],
  error: '',
  selectedProduct: null,
  categoryFilter: 'all',
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Saga watches for this action type: products/fetchProductsRequest
    fetchProductsRequest(state) {
      state.loading = true
      state.error = ''
    },
    fetchProductsSuccess(state, action) {
      state.loading = false
      state.products = action.payload
    },
    fetchProductsFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },
    setSelectedProduct(state, action) {
      state.selectedProduct = action.payload
    },
    setCategoryFilter(state, action) {
      state.categoryFilter = action.payload
    },
  },
})

export const {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
  setSelectedProduct,
  setCategoryFilter,
} = productSlice.actions

export default productSlice.reducer
