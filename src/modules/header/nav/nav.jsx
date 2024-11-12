import { About } from './link/about';
import { Contact } from './link/contact';
import { Order } from './link/order';
import { Product } from './link/product';

function Navbar() {
    return (
        <>
        <About/>
        <Contact/>
        <Order/>
        <Product/>
        </>
    )
}

export {Navbar};