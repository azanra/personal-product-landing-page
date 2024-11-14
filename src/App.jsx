import './App.css';
import { Header } from './modules/header/header';
import { Order } from './modules/body/order/order';
import { AboutContainer } from './modules/body/about/about';

function App() {

  return (
    <>
        <Header/>
        <Order/>
        <AboutContainer/>
    </>
  )
}

export default App
