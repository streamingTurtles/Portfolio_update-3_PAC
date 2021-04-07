import React from "react";
import  PortfolioFitnessTrack_Pic  from "../assets/images/portfolio-NewProj-fitnessTracker-pic-4.png";

function PortfolioFitnessTrack() {
    return (

        

    <div class="container">
    <hr />
    <p></p>
    <h1>A Fitness Tracker App</h1>
    <p>This is an application that allows you to add and track your workouts, for either cardio or resistance traiining. You can add your workout metrics and get feedback on the workout as seen in the duration of your workouts and in a weekly dashboard view.</p>      

    <div class="container">     
      <div class="row">        
        <div class="col-sm-6 bg-success">
          <a href="https://github.com/streamingTurtles/17-Fitness-Tracker">
              <img alt="burger app pic" class="img-responsive" width="525" height="300" 
                 src= { PortfolioFitnessTrack_Pic }/></a>
          
        </div>
        <div class="col-sm-6 bg-warning">
          <p></p>
          <p>
            The following technologies were used to make this application:
          </p>  
          <ul>
            <li>HTML, CSS, Javascript, Node, MongoDB-Atlas</li>
            <li>Heroku deployment</li>
            <li>using MongoDB Atlas database</li>

            
            
            <li><a href="https://github.com/streamingTurtles/17-Fitness-Tracker">Link to gitHub repo</a></li>
            <li><a href="https://blooming-taiga-93429.herokuapp.com/?id=60512ad42d8d850015644c81">Heroku Deployed Live Link</a></li>
          </ul>  
        </div>
      </div>
    </div>
  </div>
)

};

export default PortfolioFitnessTrack;