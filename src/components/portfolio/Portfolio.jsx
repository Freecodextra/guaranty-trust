import Top from '../top/Top'
import Footer from '../footer/Footer'
import GetStarted from '../get-started/GetStarted'
import "../services/services.css"
import "./portfolio.css"
import { PiDesktopTowerLight } from "react-icons/pi"
import { TfiVideoClapper } from "react-icons/tfi"
import { TbBrandIntercom } from "react-icons/tb"
import { BsArrowRight } from "react-icons/bs"

function Portfolio() {
const datas = [
    {
        icon: <PiDesktopTowerLight />,
        head: "Web/ Mobile Development",
        body: "See our previously ompleted web development projects. click the button below to see"
    },
    {
        icon: <TbBrandIntercom />,
        head: "Branding and Design",
        body: "Checkout our branding and design portfolio. We have the best graphic designers and visual communicators"
    },
    {
        icon: <TfiVideoClapper />,
        head: "Video Marketing",
        body: "See our previous works on animated videos, short video ads and produt explainer videos for social media ads"
    },
]
  return (
    <>
    <Top />
    <section className="section services-sec" style={{paddingTop: "50px"}}>
        <h1>Our Portfolio</h1>
        <p className="text" style={{paddingBottom: "50px", textTransform: "lowercase"}}>Which of our previous works will you like to see first?</p>
        <div className="services">
        {
                datas.map((data, index) => {
                    return <Service key={index} {...data}/>
                })
            }
        </div>
    </section>
    <GetStarted />
    <Footer />
    </>
  )
}

function Service({icon, head, body}) {

  return (
      <div className="service">
          <div className="service-icon">
              {icon}
          </div>
          <div className="service-head">
              <h4>{head}</h4>
          </div>
          <div className="service-body">
              <p>{body}</p>
          </div>
          <div className="service-btn">
            <button>See Portfolio <BsArrowRight /></button>
          </div>
      </div>
  )
}

export default Portfolio