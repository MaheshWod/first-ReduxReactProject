import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Product from './Components/Product'
import ProductDetail from './Components/ProductDetail'
import NewCustomer from './Components/NewCustomer'
import store from './redux/store'
import { Provider } from 'react-redux'
const App = () => {



  return (
<>
<Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/new-customer' element= {<NewCustomer/>}/>
      <Route path='/product' element = {<Product/>}/>
      <Route path='/productdetail' element = {<ProductDetail/>}/>
    </Routes>
  </BrowserRouter>
  </Provider>


  
</>  
)
}

export default App