import { Home } from './pages/Home'
import { CartProvider } from './context/Cart/CartProvider'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { CardList } from './components/CardList'
import { ProductProvider } from './context/Product/ProductProvider'

function App() {

  return (
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<CardList />} />
          </Routes>
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>

  )
}

export default App
