import logo from './logo/logo.svg'
import { Navbar } from './nav/nav';
import '../../App.css';

function Header() {
    return (
        <div className='div-container'>
            <div className="logo-section">
                <img src={logo}></img>
            </div>
            <div className='nav-section flex-align-items'>
                <Navbar/>
            </div>
        </div>
    )
}

export {Header};