import React from "react";
import  PortfolioNoteTakerPic_1_1367x642  from "../assets/images/portfolio-noteTaker-pic_1_1367x642.png";

function PortfolioPgNoteTaker() {
    return (

        

    <div class="container">
    <hr />
    <p></p>
    <h1>NoteTaker App</h1>
    <p>This is a basic note taking application.  When the app is started, you are taken to a page where you are able to add and delete your notes.  Each note can have a title and will persist in memory on the server in a "database-like" json object. </p>      

    <div class="container">     
      <div class="row">        
        <div class="col-sm-6 bg-success">
          <a href="https://github.com/streamingTurtles/11-Note-Taker">
              <img alt="note taker app pic" class="img-responsive" width="525" height="300" 
                 src= { PortfolioNoteTakerPic_1_1367x642 }/></a>
          
        </div>
        <div class="col-sm-6 bg-warning">
          <p></p>
          <p>
            The following technologies were used to make this app:
          </p>  
          <ul>
            <li>HTML, CSS, Javascript</li>
            <li>This application represents the beginning use of backend server routing and JSON formatting for "database-like" storage capabilities</li>
            <ul>
                <li>Node(server)</li>
                <li>Express(server/router framework)</li>
                <li>JSON (javascript object notation)</li>
            </ul>
            
            <li>This app is deployed on Heroku</li>
            <li><a href="https://github.com/streamingTurtles/11-Note-Taker">Link to gitHub repo</a></li>
            <li><a href="https://mighty-badlands-31851.herokuapp.com/">Live Heroku Link</a></li>
          </ul>  
        </div>
      </div>
    </div>
  </div>
)

};

export default PortfolioPgNoteTaker;