import React from "react";
import  PortfolioEmpDir_Pic  from "../assets/images/portfolio-NewProj-employee-directory-pic-1.png";

function PortfolioEmpDir() {
    return (

        

    <div class="container">
    <hr />
    <p></p>
    <h1>Employee Directory App</h1>
    <p>This is an app that accesses a random employee db to create a user directory that you can sort by first or last name and rearrange its order</p>      

    <div class="container">     
      <div class="row">        
        <div class="col-sm-6 bg-success">
          <a href="https://github.com/streamingTurtles/19-employee-directory">
              <img alt="burger app pic" class="img-responsive" width="525" height="300" 
                 src= { PortfolioEmpDir_Pic }/></a>
          
        </div>
        <div class="col-sm-6 bg-warning">
          <p></p>
          <p>
            The following technologies were used to make this Fullstack Application:
          </p>  
          <ul>
            <li>HTML, CSS, Javascript</li>
            <li>This is a React Application.  Implementing the following technologies:</li>
            <ul>
                <li>React</li>
                <li>Node</li>
            </ul>
            
            <li>This app is deployed on gitHub Pages</li>
            <li><a href="https://github.com/streamingTurtles/19-employee-directory">Link to gitHub repo</a></li>
            <li><a href="https://streamingturtles.github.io/19-employee-directory/">gitHub Pages Live Link</a></li>
          </ul>  
        </div>
      </div>
    </div>
  </div>
)

};

export default PortfolioEmpDir;