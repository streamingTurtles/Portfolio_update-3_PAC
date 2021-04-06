import React from "react";

import ST_BusinessCard  from "../assets/images/ST-businessCard.jpg";
import  PeterCardilloProfilePic  from "../assets/images//Peter-Cardillo-Profile-Pic.jpg";

function AboutContent() {
    return ( 
        <div class="row" id="bkgndImg">
            
            <div class="col-md-12">   
            <img src={ PeterCardilloProfilePic } alt="profile" class="img-thumbnail" width="150" height="100"/>
                <p class="pSpace">Hi, I am a fullstack developer.  I am currently enrolled in the Columbia Engineering Bootcamp Fullstack Coding Curriculum Program.  I have been involved in engineering throughout my entire career.  My experience spans not just with code, but with networks and systems integration.</p>         
                <p>
                    Here are more details about my experience and insight.  My career started in systems engineering more than 20 years ago.  Programming and coding had a different approach and workflow compared with today's open source technologies.  Although many of the eariler systems and platforms are still in operation today, their surrounding environment has out paced them.  Seeing this transition happen, I decided to retool my engineering and programing skills to meet the needs of this new technological era.  I started this transition about 5-7 years ago, and I can finally say - I get it!  That may sound like a long time to grasp something, but I must confess, the web may look simple and easy at first glance into its subject matter, but I assure its not.  Some may argure that Web Technologies are all one big "hack", but this is an attempt to address the complicated nature at the core of these current technologies.
                    
                        
                        <p class="pSpace">Although I have been programming in various non-web languages for several years, I have been drawn to web programming, specifically fullstack development since I appreciate knowing how complete systems opperate.  Stay tuned for more updates throughout this site, representing the new skills and techniques I have learned.  Check out my <a href="https://radiant-springs-30491.herokuapp.com/">FullStack Burger App,</a> recently added this year.</p>
                        
                      It's been famously said and quoted "You Don't Know Javascript" for a reason.  I am currently building another site named <a href="https:streamingturtles.com">streamingTurtles.com</a>, which is linked to the various images in the portfolio secion of this app.  Streaming Turtles, LLC is a small startup company that services the business application needs for small businesses.  Please see my card for some of my skillsets.  Feel free to eMail or call about any cool ideas you are looking to implement in your personal or business endeavours.  Oh, and by the way - streaming turtles are real!  And, that's a story for another day.  Thank you for stopping by and checking out my portfolio site.  Happy Coding!
                </p>
                <br/>
            </div>

            <div class="col-md-4">
                <div class="card-body">

                 <h5 class="card-title"> 
                 <a href="https://streamingturtles.github.io/Portfolio_update_PAC/img/ST-businessCard.jpg">
                 <i class='far fa-address-card' > My Business Card</i>
                 </a>                 
                 </h5>

                 
                 <img src={ST_BusinessCard}  alt="my stw business card" class="img-thumbnail" width="400" height="250"/>
                 
                 
   
                 
                
                </div>

                
              
              
              







            </div>


       





        </div>
    )
    
};

export default AboutContent;