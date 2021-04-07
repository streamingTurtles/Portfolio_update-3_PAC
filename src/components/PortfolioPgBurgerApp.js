import React from "react";
import  PortfolioBurgerAppPic_1_1367x642  from "../assets/images/portfolio-burgerApp-pic-1_1367x642.png";

function PortfolioPgBurgerApp() {
    return (

        

    <div class="container">
    <hr />
    <p></p>
    <h1>Burger App</h1>
    <p>This is a fun little app that tracks a user eating a Hamburger or saving it for later.</p>      

    <div class="container">     
      <div class="row">        
        <div class="col-sm-6 bg-success">
          <a href="https://github.com/streamingTurtles/13-NHE-BurgerApp">
              <img alt="burger app pic" class="img-responsive" width="525" height="300" 
                 src= { PortfolioBurgerAppPic_1_1367x642 }/></a>
          
        </div>
        <div class="col-sm-6 bg-warning">
          <p></p>
          <p>
            The following technologies were used to make this Fullstack Application:
          </p>  
          <ul>
            <li>HTML, CSS, Javascript</li>
            <li>This application uses the MVC (modle, view, controller) pattern.  Implementing MVC with the following technologies:</li>
            <ul>
                <li>Node(backend server)</li>
                <li>Express(server/router framework)</li>
                <li>mySQL(database)</li>
                <li>Handlebars(frontEnd framework)</li>
            </ul>
            
            <li>This app is deployed on Heroku</li>
            <li><a href="https://github.com/streamingTurtles/13-NHE-BurgerApp">Link to gitHub repo</a></li>
            <li><a href="https://radiant-springs-30491.herokuapp.com/">Live Heroku Link</a></li>
          </ul>  
        </div>
      </div>
    </div>
  </div>
)

};

export default PortfolioPgBurgerApp;