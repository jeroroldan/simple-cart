import { useState } from 'react'
import './App.css'
import { ProductsListPage } from './pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ProductsListPage />
  )
}

export default App
