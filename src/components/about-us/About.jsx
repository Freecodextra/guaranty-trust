import Top from '../top/Top'
import Footer from '../footer/Footer'
import GetStarted from '../get-started/GetStarted'
import "../services/services.css"
import "./about.css"
import Video from '../video/video'
import asset6 from "../../assets/asset 6.webp"
import { Service } from '../services/Services'
import { GrSearch } from "react-icons/gr"
import { FcComboChart } from "react-icons/fc"
import { FiTarget } from "react-icons/fi"
import AboutImg from "../../assets/11122.jpg"
import img1 from "../../assets/5-YoungExec_AmariRuff-e1557499013944.png"
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa"
import { Link } from 'react-router-dom'

function About() {
    const datas = [
        {
            icon: <GrSearch />,
            head: "Our Vision",
            body: "Our vision is to achieve global relevant in the business technology space."
        },
        {
            icon: <FcComboChart />,
            head: "Our Mission",
            body: "We will achieve our vision by delivering value to our clients all over the world."
        }, 
        {
            icon: <FiTarget />,
            head: "Our Goal",
            body: "Our goal is to be one of the top digital agency in Africa within the next 1o years."
        }, 
    ]
    const bulletPoints = [
        {
            head: "Trusted Digital Partner to our clients",
            body: "we are a welltrusted brand and digital partner to our valued clients, helping to guide them through the ever-evolving and often challenging corporate world."
        },
        {
            head: "Data Driven and Customer Centric",
            body: "We employ data driven modern research methodology to detect the current trends digital and how to harness them to create unique solutions for our clients."
        },
        {
            head: "Business Growth Hacking",
            body: "We have access to the best business consultants and growth hackers to accelerate businesses and sale them"
        },
    ]
  return (
    <>
    <Top />
    <section className="section services-sec" style={{paddingTop: "50px"}}>
        <h1>WE DELIVER DIGITAL SOLUTIONS TO BUSINESSES</h1>
        <p className="text" style={{paddingBottom: "50px", textTransform: "lowercase"}}>We design and develop software tools and digital assets boost businesses and increase profits</p>
    <Video />
        <div className="services">
        {
                datas.map((data, index) => {
                    return <Service key={index} {...data} />
                })
            }
        </div>
    </section>
    <section className="section about-us">
        <div className="about-img center">
            <img src={AboutImg} alt="" />
        </div>
        <div className="about-txt">
            <div className="about-txt-head">
                <h1>About Guaranty Trust</h1>
                <p>We are passionate about helping you grow your businesses in the highly competitive world of business by using digital business tools.</p>
                <p>Simply put; we put tech into your business to give you an edge over your competitors</p>
            </div>
            <div className="about-txt-body">
                {
                    bulletPoints.map((bulletPoint,index) => {
                        return <BulletPoint key={index} {...bulletPoint} />
                    })
                }
            </div>
        </div>
    </section>
    <Achievements />
    <LeadershipTeam />
    <GetStarted />
    <Footer />
    </>
  )
}

function BulletPoint({head,body}) {
    return (
        <div className="bullet-point">
        <div className="bullet-icon">
        <FiTarget />
        </div>
        <div className="bullet-text">
            <h3>{head}</h3>
            <p>{body}</p>
        </div>
    </div>
    )
}

function Achievements() {
    return (
        <div className="section achievement">
            <img src={asset6} alt="" className="background" />
            <h1>we are proud of our achievements</h1>
            <p>Edensdigital has continued to be one of the top digital agency in Africa, delivering value to business owners across the world</p>
            <div className="figures center">
                <div className="figure">
                    <h1>200+</h1>
                    <span>Enterpreneur Community</span>
                </div>
                <div className="figure">
                    <h1>300+</h1>
                    <span>Happy Clients</span>
                </div>
                <div className="figure">
                    <h1>$800K+</h1>
                    <span>Revenue per year</span>
                </div>
            </div>
        </div>
    )
}

function LeadershipTeam() {
    const datas = [
        {
            name: "Olubayo Samuel",
            role: "Co-Founder and Lead Engineer",
            socials: ["https://www.facebook.com/", "https://www.twitter.com/", "https://ng.linkedin.com/in/"]
        },
        {
            name: "Apejua Olusegun",
            role: "Co-Founder and Business Lead",
            socials: ["https://www.facebook.com/", "https://www.twitter.com/", "https://ng.linkedin.com/in/"]
        },
        {
            name: "Henry Dada",
            role: "Co-Founder and Creative Director",
            socials: ["https://www.facebook.com/", "https://www.twitter.com/", "https://ng.linkedin.com/in/"]
        },
    ]
    return (
        <section className="section services-sec leadership-sec" style={{paddingTop: "50px"}}>
        <h1>OUR LEADERSHIP TEAM</h1>
        <p className="text" style={{paddingBottom: "50px", textTransform: "lowercase"}}>Our leaders have years of professional experience and impeccable reputation.</p>
        <div className="team-cards center">
            {
                datas.map((data, index) => {
                    const {name, role, socials} = data;
                    const [facebook, twitter, linkedin] = socials;
                    return (
                        <div className="team-card center" key={index}>
                            <div className="card-img">
                                <img src={img1} alt="image" />
                            </div>
                            <div className="card-details">
                                <h3>{name}</h3>
                                <p>{role}</p>
                            </div>
                            <div className="card-social">
                                <div className="social center">
                                    <Link to={facebook}><FaFacebookF /></Link></div>
                                <div className="social center">
                                    <Link to={twitter}><FaTwitter /></Link>
                                </div>
                                <div className="social center">
                                    <Link to={linkedin}><FaLinkedin /></Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </section>
    )
}
export default About