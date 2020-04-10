import React from 'react';
import './App.css';
import heroBG from './img/HeroBg.jpg'
import pizza from './img/pizzabox.png'
import osborn from './img/osborn.jpg'
import photo from './img/photoportfolio.png'
import weather from './img/weather.png'
function App() {
  return (
    <div class="container">
      <nav>
        <div class="nav-wrapper #616161 grey darken-2">
          <a href="#" class="brand-logo"><img src="img/logo.png" alt="" /></a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"
          ><i class="material-icons">menu</i></a
          >
          <ul class="right hide-on-med-and-down">
            <li><a href="#about">About Me</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <ul class="sidenav" id="mobile-demo">
        <li><a href="#about">About Me</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div class="parallax-container v-align wrapper" id="border1">
        <div class="container">
          <div class="col 6 white-text" id="firstworld">
            <h4 class="thin-text center-align valign">
              Taylor Osborn <br />
              Full Stack Developer <br />
              Solver of first world Problems
            </h4>
          </div>
        </div>
        <div class="parallax"><img src={heroBG} /></div>
      </div>
      <div class="container">
        <div class="row center-align">
          <h2 id="about">About Me</h2>
          <img src={osborn} alt="" id="taylor" />
          <p id="bio">
            My name is Taylor Osborn and I graduate of the University of
            Oregon full stack web development boot camp, currently residing in Portland OR. I am
            familiar with HTML, CSS, and JavaScript, JSON and API usage as well
            as frameworks such as jQuery and React, as well as MySQL, MongoDB, and Node. My goal is to enter the industry as a front end,
            back end, or full stack web developer.
          </p>
        </div>
      </div>
      <div class="parallax-container v-align wrapper" id="border2">
        <div class="container"></div>
        <div class="parallax"><img src={heroBG} /></div>
      </div>

      <div class="portfolio center-align">
        <div class="row center-align" id="portfolio-container">
          <h2 id="portfolio">Portfolio</h2>

          <div class="col">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src={pizza}
                    alt="Avatar"
                    id="pizza-photo"
                    
                  />
                </div>
                <div class="flip-card-back">
                  <a href="https://trafaelosborn.github.io/PizzaBox/"><h4 class="portfolio-link">PizzaBox</h4></a>
                  <p>Nutriton and recipe search app using Semantic UI and the Edamam API</p>
                  <a class="btn-floating btn-med scale-transition #212121 grey darken-4" href="https://github.com/trafaelosborn/PizzaBox">
                    <i class="fab fa-github-square"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src={photo}
                    alt="Avatar"
                    id="photo-photo"
                    
                  />
                </div>
                <div class="flip-card-back">
                  <a href="http://thetaylorosborn.com"><h4 class="portfolio-link">Photo Portfolio</h4></a>
                  <p>A personal photography portfolio using HTML, CSS, jQuery, and a splash of PHP</p>
                  <a class="btn-floating btn-med scale-transition #212121 grey darken-4" href="https://github.com/trafaelosborn/Photo_Portfolio">
                    <i class="fab fa-github-square"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src={weather}
                    alt="Avatar"
                    id="weather-img"
                  />
                </div>
                <div class="flip-card-back">
                  <a href="http://thetaylorosborn.com"><h4 class="portfolio-link">Weather App</h4></a>
                  <p>Weather app using the OpenWeather API</p>
                  <a class="btn-floating btn-med scale-transition #212121 grey darken-4" href="https://github.com/trafaelosborn/WeatherApp">
                    <i class="fab fa-github-square"></i>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="parallax-container v-align wrapper" id="border3">
      <div class="container"></div>
      <div class="parallax"><img src={heroBG} /></div>
    </div>



      

    <div class="parallax-container v-align wrapper" id="border4">
        <div class="container center-align">
          <div class="col 6 white-text" id="footer-icons">
            <a class="btn-large scale-transition grey darken-1 footer-button" href="https://github.com/trafaelosborn">
              <i class="fab fa-github"></i>
            </a>
            <a class="btn-large scale-transition grey darken-1 footer-button" href="https://www.linkedin.com/in/taylor-osborn-b1b315195/">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div class="parallax"><img src={heroBG} /></div>
      </div>


      </div>
    

  );
}

export default App;
