import React from 'react';
import MyNavbar from './Components/MyNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainCoverflow from './Components/MainCoverflow'
import './App.css';
import ProjectDisplay from './Components/ProjectDisplay';
import Cube3D from './Components/Cube3D';
import ProjectCarousel from './Components/ProjectCarousel'
import { Container, Row, Col } from 'react-grid-system';
// npm install react-grid-system --save
import {SocialQR, LocationApp, OnlinePiano, MiniGames, BlackJack} from './Data/ProjectContent';
import WebProjectDisplay from './Components/WebProjectDisplay';

function App() {
  
  return (
    <div>
      <MyNavbar/>

      <div className="container" id="banner">
        <Row>
          <Col xsm={1} sm={1} md={1} lg={1} xl={1}></Col>

          <Col xsm={11} sm={11} md={11} lg={5} xl={5}>
            <div className="banner_half">
              <Cube3D/>
            </div>
          </Col>

          <Col xsm={11} sm={11} md={11} lg={5} xl={5}>
            <div className="banner_half">
              <h1 className="textCenter">Tech Stacks</h1>
              <hr className="bannerHr"/>
              <h4 className="bannerStackHeadings">Languages:</h4>
              <h5 className="bannerStackList">Javascript ⋅ Python ⋅ Java ⋅ C ⋅ HTML/CSS</h5>
              <hr className="bannerHr"/>
              <h4 className="bannerStackHeadings">Frameworks and IDE</h4>
              <h5 className="bannerStackList">React ⋅ Bootstrap ⋅ Express ⋅ Android Studio</h5>
              <hr className="bannerHr"/>
              <h4 className="bannerStackHeadings">Database and Development Tools:</h4>
              <h5 className="bannerStackList">MySQL / PostgreSQL ⋅ MongoDB ⋅ Git ⋅ Node.js ⋅ JSON ⋅ Firebase</h5>

            </div>
          </Col>

          <Col xsm={1} sm={1} md={1} lg={1} xl={1}></Col>
        </Row>
      </div>

      <div className="proj-blackjack">
        <WebProjectDisplay 
        name="BlackJack" 
        title={BlackJack.title} 
        content={BlackJack.content} 
        content2={BlackJack.content2}
        content3={BlackJack.content3} 
        display={BlackJack.display}
        iconImg={BlackJack.iconImg}
        github={BlackJack.github}
        content4={BlackJack.content4}
        host={BlackJack.host}/>
      </div>

      <div className="proj-online-piano">
        <WebProjectDisplay 
        name="OnlinePiano" 
        title={OnlinePiano.title} 
        content={OnlinePiano.content} 
        content2={OnlinePiano.content2}
        content3={OnlinePiano.content3} 
        display={OnlinePiano.display}
        iconImg={OnlinePiano.iconImg}
        github={OnlinePiano.github}
        content4={OnlinePiano.content4}
        host={OnlinePiano.host}/>
      </div>

      <div className="proj-socialQR">
        <ProjectDisplay 
        name="SocialQR" 
        title={SocialQR.title} 
        content={SocialQR.content} 
        content2={SocialQR.content2} 
        content3={SocialQR.content3} 
        images={SocialQR.carouselPics}
        github={SocialQR.github}/>
      </div>
      <div className="proj-location">
        <ProjectDisplay 
        name="Locate" 
        title={LocationApp.title} 
        content={LocationApp.content} 
        content2={LocationApp.content2} 
        images={LocationApp.carouselPics}
        github={LocationApp.github}/>
      </div>

      <div className="proj-mini-games">
        <ProjectDisplay 
        name="MiniGames" 
        title={MiniGames.title} 
        content={MiniGames.content} 
        content2={MiniGames.content2} 
        content3={MiniGames.content3} 
        images={MiniGames.carouselPics}
        github={MiniGames.github}/>
      </div>
    </div>
  );
}

export default App;
