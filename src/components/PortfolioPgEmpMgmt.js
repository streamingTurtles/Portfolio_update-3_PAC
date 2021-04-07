import React from "react";
import  PortfolioEmpMgmtSystemPic_1_1367x642  from "../assets/images/portfolio-employeeMgmtSystem-pic_1_1367x642.png";

function PortfolioPgEmpMgmtSys() {
    return (

        

    <div class="container">
    <hr />
    <p></p>
    <h1>Employee Management System App</h1>
    <p>This is a Command Line Terminal Application that interacts with a mySQL database, initially seeded with "mock" company & employee's information.  At the command line in the terminal, you can View, Add and Delete to the daabase per the questioned prompt.
    </p> 
    <div class="container">     
      <div class="row">        
        <div class="col-sm-6 bg-success">
          <a href="https://github.com/streamingTurtles/12-Employee-Mgmt-System">
              <img alt="employee management system app pic" class="img-responsive" width="525" height="300" 
                 src= { PortfolioEmpMgmtSystemPic_1_1367x642 }/></a>
          
        </div>
        <div class="col-sm-6 bg-warning">
          <p></p>
          <p>
            The following technologies were used to make this app:
          </p>  
          <ul>
            <li>HTML, CSS, Javascript</li>                     
            <li>Node(server)</li>
            <li>mySQL (database)</li>
            <li>inquirer, (a npm package for terminal prompting)</li>
            <li>asciiart-logo, (a npm package to display ascii text art in the terminal)</li>
            <li>dotenv, (a npm package to hide password data in the application)</li>     
            <li>This app has a Video DEMO, see below link</li>
            <li><a href="https://github.com/streamingTurtles/12-Employee-Mgmt-System">Link to gitHub repo</a></li>
            <li><a href="https://drive.google.com/file/d/1-W6xIO9kKL__tZIBBMcCMAr8LCG6Frjl/view">Click here to see a Live Demo of this application</a></li>
          </ul>  
        </div>
      </div>
    </div>
  </div>
)

};

export default PortfolioPgEmpMgmtSys;