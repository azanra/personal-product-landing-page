import './App.css';
import { Header } from './modules/header/header';
import { Order } from './modules/body/order/order';
import { AboutContainer } from './modules/body/about/about';
import { ProductContainer } from './modules/body/product/product';

function App() {

  return (
    <>
        <Header/>
        <Order/>
        <AboutContainer/>
        <ProductContainer/>
    </>
  )
}

export default App
