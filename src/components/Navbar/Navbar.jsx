import { useState } from 'react';
import img from '../../assets/image/aboutme.jpg';
import { FaBars, FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import './Navbar.css'



const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 80) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)


    return (
        <header className={color ? 'navbar navbar-bg' : 'navbar'}>
            <nav className="nav-container container">
                <NavLink to='/' className='logo'>
                    <img className='logo_img' src={img} alt="Nav Logo" /><span>Mostafij</span>
                </NavLink>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><NavLink className={({ isActive }) => isActive ? "active-item" : "pending-item"} to='/'>Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "active-item" : "pending-item"} to='/about'>About</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "active-item" : "pending-item"} to='/project'>Projects</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "active-item" : "pending-item"} to='/contact'>Contact</NavLink></li>
                </ul>
                <div className='hamburgar' onClick={handleClick}>
                    {
                        click ? (<FaTimes size={30} style={{ color: "#fff" }} />) : (<FaBars size={30} style={{ color: "#fff" }} />)
                    }
                </div>
            </nav>
        </header>
    );
};

export default Navbar;















