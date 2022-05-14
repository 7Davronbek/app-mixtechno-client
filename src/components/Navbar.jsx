import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [burger, setBurger] = useState(false)
    const [navbar, setNavbar] = useState(false)
    const location = useLocation()
    const changeNavbar = () => {
        if (window.scrollY >= 30) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNavbar);
    return (
        <>
            <div className={`navBar ${navbar ? 'active' : ''}`}>
                <div className="container">
                    <div className={`row align-items-center `}>
                        {/* Burger */}

                        <div className="col-lg-1 col-3">
                            <Link to="/">
                                <img src="./image/logo.svg" alt="" className='logo' />
                            </Link>
                        </div>

                        <div onClick={() => setBurger(!burger)} className={`burger pr-4 ml-auto d-flex d-lg-none ${burger ? 'burgered' : ''}`}>
                            <div className="burger1"></div>
                            <div className="burger2"></div>
                            <div className="burger3"></div>
                        </div>

                        <div className={`col-lg-11 nimadur ${burger ? '' : 'burgered'}`}>
                            <ul className={`nav-menu d-flex justify-content-around align-items-center`}>

                                <li>
                                    <Link onClick={() => setBurger(false)} to='/' className={`nav-text ${location.pathname === '/' ? 'actived' : ''}`}> ГЛАВНАЯ </Link>
                                </li>
                                <li>
                                    <Link onClick={() => setBurger(false)} to='/services' className={`nav-text ${location.pathname === '/services' ? 'actived' : ''}`}> НАШИ УСЛУГИ </Link>
                                </li>
                                <li>
                                    <Link onClick={() => setBurger(false)} to='/portfolio' className={`nav-text ${location.pathname === '/portfolio' ? 'actived' : ''}`}> ПОРТФОЛИО </Link>
                                </li>
                                <li>
                                    <Link onClick={() => setBurger(false)} to='/about' className={`nav-text ${location.pathname === '/about' ? 'actived' : ''}`}> О КОМПАНИИ </Link>
                                </li>
                                <li>
                                    <Link onClick={() => setBurger(false)} to='/contact' className={`nav-text ${location.pathname === '/contact' ? 'actived' : ''}`}> КОНТАКТЫ </Link>
                                </li>

                                <a href="tel: +998946408356" className="myBtn text-uppercase">
                                    +998 (90) 125-56-96
                                </a>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
