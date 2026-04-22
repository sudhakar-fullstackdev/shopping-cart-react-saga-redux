import ProductList from './components/ProductList'

export default function App() {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px 16px' }}>
      <h1 style={{ marginBottom: 24, fontSize: 26, fontWeight: 700 }}>
        Products Store
      </h1>
      <ProductList />
    </div>
  )
}
