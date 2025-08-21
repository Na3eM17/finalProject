import { useState } from 'react'
import './assets/component/header.css'
import './assets/component/index.css'
import {Service} from './cardMotion'
import { Typewriter } from 'react-simple-typewriter';
import user from "../public/icons/user-square.png"
import book from "../public/icons/reading.png"
import like from "../public/icons/like.png"
import AI from "../public/icons/robot.png"

function App() {

 function servic1(){
  window.location.hash = "#service1";
}
function servic2(){
  window.location.hash = "#service2";
}function servic3(){
  window.location.hash = "#service3";
}
  return (
    <>
     <div className="container">
      {/*lesft side*/}
      <div className="header">
        {/*button and logo*/}
        <div className="logo-btn">
          <div className="logo">
            <div className="img">
              <img src={user} alt=""/>
            </div>
          </div>
          <div className="btn">
            <button>log out</button>
          </div>
        </div>
        {/*project name text*/}
        <div className="readMateText">
          <h1>ReadMate</h1>
          <p>
            <Typewriter
              words={['Hello', 'Welcome to ReadMate','here you can find','a recommendation books', 'Enjoy!']}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
        </p>
        </div>
        {/*services container*/}
          <div className="services-container">
            <p>Our services</p>
            <div className="services">
              <Service onClick={servic1} title="Recommended book" image={book}/>
              <Service onClick={servic2} title="suggestions" image={like} />
              <Service onClick={servic3} title="ask ai" image={AI}/>
            </div>
            
              <ul>
                <li>lol</li>
                <li>lol</li>
                <li>lol</li>
                <li>lol</li>
              </ul>
          </div>
        </div>
        
        <div className="scroll-container">
         <div className="section "id='service1'>servic1</div>
         <div className="section" id='service2'>servic2</div>
         <div className="section" id='service3'>servic55</div>
         <div className="section"></div>
        </div>
      
     </div>
    </>
  )
}

export default App
