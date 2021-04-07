import React from "react";
import  PortfolioWeatherDashPic_1_1367x642  from "../assets/images/portfolio-weatherDashboard-pic-1_1367x642.png";

function PortfolioPgWeatherDash() {
    return (

        

    <div class="container">
    <hr />
    <p></p>
    <h1>Weather Dashboard App</h1>
    <p>This App will return a 5 day forcast for the city entered.</p>      
    <div class="container">     
      <div class="row">        
        <div class="col-sm-6 bg-success">
          <a href="https://streamingturtles.github.io/6-WeatherDashboardHW_PAC/">
              <img alt="landing page pic of the weather app" class="img-responsive" width="525" height="300" 
                 src= { PortfolioWeatherDashPic_1_1367x642 }/></a>
          
        </div>
        <div class="col-sm-6 bg-warning">
          <p></p>
          <p>
            The following technologies were used to make this app:
          </p>  
          <ul>
            <li>HTML, CSS, Javascript</li>
            <li>Bootstrap</li>
            <li>OpenWeather API</li>
            <li><a href="https://github.com/streamingTurtles/6-WeatherDashboardHW_PAC">Link to gitHub repo</a></li>
            <li><a href="https://streamingturtles.github.io/6-WeatherDashboardHW_PAC/">Live Web URL</a></li>
          </ul>   
        </div>
      </div>
    </div>
  </div>
)

};

export default PortfolioPgWeatherDash;