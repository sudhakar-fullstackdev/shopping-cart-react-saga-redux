import { useDispatch, useSelector } from 'react-redux'
import { setSelectedProduct } from '../features/products/productSlice'

export default function ProductModal() {
  const dispatch = useDispatch()
  const product = useSelector((state) => state.products.selectedProduct)

  if (!product) return null

  return (
    <div style={styles.overlay} onClick={() => dispatch(setSelectedProduct(null))}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button style={styles.close} onClick={() => dispatch(setSelectedProduct(null))}>
          ✕
        </button>
        <img src={product.image} alt={product.title} style={styles.image} />
        <h2 style={styles.title}>{product.title}</h2>
        <p style={styles.desc}>{product.description}</p>
        <div style={styles.footer}>
          <span style={styles.price}>${product.price.toFixed(2)}</span>
          <span style={styles.badge}>{product.category}</span>
          <span style={styles.rating}>
            ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
          </span>
        </div>
      </div>
    </div>
  )
}

const styles = {
  overlay: {
    position: 'fixed', inset: 0,
    background: 'rgba(0,0,0,0.5)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 1000,
  },
  modal: {
    background: '#fff',
    borderRadius: 12,
    padding: 28,
    maxWidth: 520,
    width: '90%',
    maxHeight: '85vh',
    overflowY: 'auto',
    position: 'relative',
  },
  close: {
    position: 'absolute', top: 12, right: 14,
    background: 'none', border: 'none',
    fontSize: 20, cursor: 'pointer', color: '#555',
  },
  image: { width: '100%', height: 220, objectFit: 'contain', marginBottom: 16 },
  title: { fontSize: 16, fontWeight: 700, marginBottom: 8 },
  desc: { fontSize: 13, color: '#555', lineHeight: 1.6, marginBottom: 16 },
  footer: { display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' },
  price: { fontSize: 22, fontWeight: 700, color: '#e44d26' },
  badge: {
    fontSize: 11, background: '#eef', color: '#446',
    padding: '2px 8px', borderRadius: 12, textTransform: 'capitalize',
  },
  rating: { fontSize: 12, color: '#888' },
}
