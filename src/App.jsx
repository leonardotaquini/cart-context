import { Home } from './pages/Home'
import { CartProvider } from './context/Cart/CartProvider'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { CardList } from './components/CardList'
import { ProductProvider } from './context/Product/ProductProvider'
import { NotFound } from './pages/NotFound'
import { Cart } from './pages/Cart'

function App() {

  return (
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<CardList />} />
            <Route path='/cart' element={ <Cart /> } />
            <Route path='*' element={ <NotFound/> } />
          </Routes>
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>

  )
}

export default App
