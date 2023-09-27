import { useRef } from 'react'
import Logo from "../../assets/G Logo.png"
import { RiCustomerService2Fill } from "react-icons/ri"
import { FcMenu } from "react-icons/fc"
import { FaTimes } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import './top.css'

function Top() {
  const navBar = useRef();
  const navLists = useRef();
  function openNavBar() {
    navBar.current.style.left = "0";
  }
  function closeNavBar() {
    navBar.current.style.left = "200%";
  }
  return (
    <div className='top'>
        <div className="logo center">
          <FcMenu className='burger hidden' onClick={openNavBar} />
          <NavLink to="/"><img src={Logo} alt="logo" /></NavLink>
        </div>
        <div className="links-call" ref={navBar}>
          <FaTimes className='cancel hidden' onClick={closeNavBar} />
        <div className="links center">
          <ul ref={navLists}>
            <li className='hidden home'>home</li>
            <li><NavLink to="/portfolio">portfolio</NavLink></li>
            <li><NavLink to="/about-us">about us</NavLink></li>
            <li><NavLink to="/blog">blog</NavLink></li>
          </ul>
        </div>
        <div className="call-to-ation">
          <span><a href="tel:+2349016242310">call now</a></span>
          <a href="https://api.whatsapp.com/send?phone=2349016242310">
          <button className='top-btn'>get started</button>
          </a>
        </div>
        </div>
          <div className="contact">
            <button>contact us <RiCustomerService2Fill id='customer' /> </button>
          </div>
    </div>
  )
}

export default Top