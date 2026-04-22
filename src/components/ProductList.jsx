import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchProductsRequest,
  setCategoryFilter,
} from '../features/products/productSlice'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'

export default function ProductList() {
  const dispatch = useDispatch()
  const { loading, products, error, categoryFilter } = useSelector(
    (state) => state.products
  )

  // Dispatch on mount → saga picks up → fetches API → updates store
  useEffect(() => {
    dispatch(fetchProductsRequest())
  }, [dispatch])

  const categories = ['all', ...new Set(products.map((p) => p.category))]

  const filtered =
    categoryFilter === 'all'
      ? products
      : products.filter((p) => p.category === categoryFilter)

  if (loading) return <div style={styles.center}>Loading products...</div>
  if (error) return <div style={{ ...styles.center, color: 'red' }}>Error: {error}</div>

  return (
    <div>
      <div style={styles.filters}>
        {categories.map((cat) => (
          <button
            key={cat}
            style={{
              ...styles.filterBtn,
              ...(categoryFilter === cat ? styles.activeFilter : {}),
            }}
            onClick={() => dispatch(setCategoryFilter(cat))}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={styles.grid}>
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <ProductModal />
    </div>
  )
}

const styles = {
  center: {
    textAlign: 'center',
    padding: 60,
    fontSize: 18,
    color: '#666',
  },
  filters: {
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap',
    marginBottom: 24,
  },
  filterBtn: {
    padding: '6px 14px',
    border: '1px solid #ccc',
    borderRadius: 20,
    background: '#fff',
    cursor: 'pointer',
    fontSize: 13,
    textTransform: 'capitalize',
  },
  activeFilter: {
    background: '#333',
    color: '#fff',
    borderColor: '#333',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: 20,
  },
}
