import { useDispatch } from 'react-redux'
import { setSelectedProduct } from '../features/products/productSlice'

export default function ProductCard({ product }) {
  const dispatch = useDispatch()

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.title} style={styles.image} />
      <div style={styles.body}>
        <p style={styles.title}>{product.title}</p>
        <p style={styles.price}>${product.price.toFixed(2)}</p>
        <span style={styles.badge}>{product.category}</span>
        <button
          style={styles.btn}
          onClick={() => dispatch(setSelectedProduct(product))}
        >
          View Details
        </button>
      </div>
    </div>
  )
}

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: 8,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    background: '#fff',
    boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
  },
  image: {
    width: '100%',
    height: 200,
    objectFit: 'contain',
    padding: 16,
    background: '#f9f9f9',
  },
  body: {
    padding: 12,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    flex: 1,
  },
  title: {
    fontSize: 13,
    fontWeight: 600,
    margin: 0,
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
  price: {
    fontSize: 18,
    fontWeight: 700,
    color: '#e44d26',
    margin: 0,
  },
  badge: {
    fontSize: 11,
    background: '#eef',
    color: '#446',
    padding: '2px 8px',
    borderRadius: 12,
    alignSelf: 'flex-start',
    textTransform: 'capitalize',
  },
  btn: {
    marginTop: 'auto',
    padding: '8px 12px',
    background: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    fontSize: 13,
  },
}
