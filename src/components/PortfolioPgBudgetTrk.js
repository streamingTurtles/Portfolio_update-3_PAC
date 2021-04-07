import React from "react";
import  PortfolioBudgetTrack_Pic  from "../assets/images/portfolio-NewProj-budget-Tracker-pic-1.png";

function PortfolioBudgetTrack() {
    return (

        

    <div class="container">
    <hr />
    <p></p>
    <h1>A Budget Tracker App</h1>
    <p>This is a PWA (progressive web application) that tracks your credits and debits while both online and offline.  While offline, you can still conduct transactions that will update once connected online again.</p>      

    <div class="container">     
      <div class="row">        
        <div class="col-sm-6 bg-success">
          <a href="https://github.com/streamingTurtles/18-Budget-Tracker">
              <img alt="burger app pic" class="img-responsive" width="525" height="300" 
                 src= { PortfolioBudgetTrack_Pic }/></a>
          
        </div>
        <div class="col-sm-6 bg-warning">
          <p></p>
          <p>
            The following technologies were used to make this PWA, progressive web application:
          </p>  
          <ul>
            <li>HTML, CSS, Javascript, Node, MongoDB-Atlas</li>
            <li>PWA is deployed on Heroku</li>
            <li>PWA Technologies:</li>
            <ul>
                <li>IndexDB</li>
                <li>Manifest file</li>
                <li>Service Worker</li>
            </ul>
            
            <li>This app is deployed on gitHub Pages</li>
            <li><a href="https://github.com/streamingTurtles/18-Budget-Tracker">Link to gitHub repo</a></li>
            <li><a href="https://infinite-dusk-05102.herokuapp.com/">Heroku Deployed Live Link</a></li>
          </ul>  
        </div>
      </div>
    </div>
  </div>
)

};

export default PortfolioBudgetTrack;