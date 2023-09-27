import "./get-started.css"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"
import img1 from "../../assets/asset 6.webp"

function GetStarted() {
  return (
    <section className="get-started center">
        <div className="socials">
        <FaFacebookF className='icon' />
        <FaTwitter className='icon' />
        <FaInstagram className='icon' />
        <FaLinkedin className='icon' />
        <FaYoutube className='icon'/>
        </div>
        <h1>Start your next project with us</h1>
        <a href="https://api.whatsapp.com/send?phone=2349016242310">
          <button>get started</button>
          </a>
        <img src={img1} alt="" className='background' />
    </section>
  )
}

export default GetStarted