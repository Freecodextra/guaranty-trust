import React from 'react'
import "./footer.css"
import logo from "../../assets/G Logo.png"

function Footer() {
  return (
    <>
    <footer>
        <div className="one">
            <div className='image'>
            <img src={logo} alt="" className="logo" />
            <span>guaranty resources</span>
            </div>
            <p>We are a data-driven, customer-centric web design/development, Branding, and advertisement company</p>
        </div>
        <div className="two">
            <h3>Navigation</h3>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Portfolio</li>
                <li>Blog</li>
                <li>Get Started</li>
            </ul>
        </div>
        <div className="three">
            <h3>address</h3>
            <div className="spans">
            <span>SpacePad,</span>
            <span>Lekki Peninsula</span>
            <span>Lekki Phase 1,</span>
            <span>Ikate, Lagos</span>
            <span>Nigeria.</span>
            </div>
        </div>
        <div className="four">
            <h3>contact</h3>
            <span>For more information contact us on</span>
            <div className="addrs">
            <a href="tel:+2348101690141">+2348101690141</a>
            <div className="emails">
                <a href="mailto:admin@guarantyresoures.agency">admin@guarantyresoures.agency</a>
                <a href="mailto:guarantyresoures@gmail.com">guarantyresoures@gmail.com</a>
            </div>
            </div>
        </div>
    </footer>
        <div className="copyright">
            <p>@2022 - GUARANTY TRUST RESOURCES. All Rights Reserved.</p>
        </div>
    </>
  )
}

export default Footer