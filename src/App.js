import React, { useEffect, useState } from 'react';
import './App.css';
import Image1 from './Images/logo.png';
import Image2 from './Images/godsavedme.jpg';
import Image3 from './Images/work-1.jfif';
import Image4 from './Images/work-2.jpg';
import Image5 from './Images/work-3.jfif';
import PDF1 from './Images/TANUSHRI _K_1.pdf';
import Server from 'axios';

const App = () => {

  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [Message, setMessage] = useState();

  const handleAboutNav = () => {
    setActive1(true);
    setActive2(false);
    setActive3(false);
    console.log(active1)
  };

  const handleAboutNav2 = () => {
    setActive1(false);
    setActive2(true);
    setActive3(false);
    console.log(active2)
  };

  const handleAboutNav3 = () => {
    setActive1(false);
    setActive2(false);
    setActive3(true);
    console.log(active3)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const URL = `https://sheet.best/api/sheets/eaaf6b90-fd8b-44fb-8d17-1d15e6e393e5`;
  
    Server.post(URL, ({
      Name , Email ,Message
    })).then((Response) => {
      if(Response){
        window.alert("Message sent successfully...!");
      }
    }).catch((Error) => {
      window.alert(Error);
    });
  }

  return (
    <div className='App'>
      <div id="header">
        <div className="container">
          <nav>
            <img src={Image1} alt='' className="logo" />
            <ul id="sidemenu">
              <li><a href="#header">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#Contact">Contact</a></li>
              <i className="fa-solid fa-xmark"></i>
            </ul>
            <i className="fa-solid fa-bars"></i>
          </nav>

          <div className="header-text">
            <p>Full Stack Web Developer</p>
            <h1> Hi , I am <span>Tanushri K </span>  <br></br> From India </h1>
          </div>
        </div>
      </div>

      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src={Image2} alt='' />
            </div>
            <div className="about-col-2">
              <h1 className="sub-title"> About Me</h1>
              <p>I am a Computer Science Engineering Student , Who Believes in Passion and HardWork. I am Pretty Confident and Optimistic in Technology.
                I Possess All the Skills That the Comapny is Looking For. Being a Fresher I am Flexible an Adaptive To Learn New Things.</p>
              <div className="tab-titles">
                <p className="tab-links" style={active1 ? { borderBottom: "3px solid red" } : null} onClick={handleAboutNav}>skills</p>
                <p className="tab-links" style={active2 ? { borderBottom: "3px solid red" } : null} onClick={handleAboutNav2}>Internships</p>
                <p className="tab-links" style={active3 ? { borderBottom: "3px solid red" } : null} onClick={handleAboutNav3}>Education</p>
              </div>
              <div className="tab-contents active-tab" id="skills" style={active1 === true ? { display: "block" } : { display: "none" }}>
                <ul>
                  <li><span>Java</span><br></br>Have Enough Knowledge About Oops</li>
                  <li><span>Cloud Computing</span><br></br>Azure Cloud Computing</li>
                  <li><span>Full Stack Web Development</span><br></br>MERN stack Development</li>

                </ul>
              </div>

              <div className="tab-contents" id="internships" style={active2 === true ? { display: "block" } : { display: "none" }}>
                <ul>
                  <li><span>2021</span><br></br>Full Stack Web Developer Intern at Edureka</li>
                  <li><span>2020</span><br></br>Azure Cloud Computing Intern at Verzeo</li>
                  <li><span>2019</span><br></br>Web Developer Intern at Code Cell Technologies</li>

                </ul>
              </div>

              <div className="tab-contents" id="education" style={active3 === true ? { display: "block" } : { display: "none" }}>
                <ul>
                  <li><span>2022 - B.E in Computer Science </span><br></br>Acharya Institute Of Technology</li>
                  <li><span>2019 - Diploma in Computer science</span><br></br>SJBGS Poltechnic</li>
                  <li><span>2016 - SSLC </span><br></br>Stella Maris High School</li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio">
        <div className="container">
          <h1 className="sub-title">My Work</h1>
          <div className="work-list">
            <div className="work">
              <img src={Image3} alt='' />
              <div className="layer">
                <h3>Online Food Ordering Website</h3>
                <p>This Website is Built on MERN stack.</p>
                <a href="#"><i className="fa-solid fa-up-right-from-square"></i></a>
              </div>
            </div>
            <div className="work">
              <img src={Image4} alt='' />
              <div className="layer">
                <h3>AI Vision based social distance Detection</h3>
                <p>Social Concern Project using Machine Learning.</p>
                <a href="#"><i className="fa-solid fa-up-right-from-square"></i></a>
              </div>
            </div>
            <div className="work">
              <img src={Image5} alt='' />
              <div className="layer">
                <h3>informative website about switzerland</h3>
                <p>This Website is Built on MERN stack.</p>
                <a href="#"><i className="fa-solid fa-up-right-from-square"></i></a>
              </div>
            </div>

          </div>
          <a href="#" className="btn">See more</a>
        </div>
      </div>

      <div id="Contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h1 className="sub-title">Contact Me</h1>
              <p><i className="fa-sharp fa-solid fa-share"></i>tanushrik311@gmail.com.com</p>
              <p><i className="fa-solid fa-phone"></i>7204866341</p>
              <div className="social-icons">
                <a href="https://facebook.com/"><i className="fa-brands fa-facebook"></i></a>
                <a href=""><i className="fa-brands fa-twitter-square"></i></a>
                <a href=""><i className="fa-brands fa-instagram"></i></a>
                <a href=""><i className="fa-brands fa-linkedin"></i></a>
              </div>
              <a href={PDF1} download className="btn btn2">Download CV</a>
            </div>
            <div className="contact-right">
              <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
                <input type="text" name="Name" placeholder="Your name" required  onChange={(e) => setName(e.target.value)}/>
                <input type="email" name="Email" placeholder="your mail" required  onChange={(e) => setEmail(e.target.value)}/>
                <textarea name="Message" rows="6" placeholder="your message" onChange={(e) => setMessage(e.target.value)}></textarea>
                <button type="submit" className="btn btn2">Submit</button>

              </form>
              <span id="msg"></span>

            </div>

          </div>
        </div>

        <div className="copyright">
          <p>Copyright @ tanushri.</p>
        </div>
      </div>
    </div>
  )
}

export default App