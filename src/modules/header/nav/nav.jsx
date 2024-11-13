import { About } from './link/about';
import { Contact } from './link/contact';
import { Order } from './link/order';
import { Product } from './link/product';
import '../../../App.css';

function Navbar() {
    return (
        <>
        <Order/>
        <About/>
        <Product/>
        <Contact/>
        </>
    )
}

export {Navbar};