import React from "react";
import './intro.css';
import { Link } from "react-scroll";
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png'

const Intro = () =>
{
   return(
      <section id="intro">
         <div className="introContent">
            <span className="hello">Hello,</span><br />
            <span className="introText">I'm <span className="introName">Udit</span><br />Website Designer</span>
            <p className="introPara">I am a Fresher Web Designer to Create User Friendly Websites..</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire Me" className="btnImg"/>Hire Me</button></Link>
         </div>
         <img src={bg} alt="Profile" className="bg" />
      </section>
   )
}

export default Intro;