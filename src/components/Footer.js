import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div className="container-fluid h-25">
                <div className="row">
                    <div className="col-lg-12 border-top border-info border-3 text-center text-bottom text-muted pt-3">
                       <span className="text-muted"><a href="https://www.streamingTurtles.com"><small>Copyright &copy; My Website -  www.streamingTurtles.com</small></a></span>          
                    </div>
                </div>
            </div>
        </footer>

    //     <footer className="footer bg-light">
    //     <div className="container" style="text-align: center">
    //       <span className="text-muted"><a href="https://www.streamingTurtles.com"><small>Copyright &copy; My Website -  www.streamingTurtles.com</small></a></span>
    //     </div>
    //   </footer>
    )
};

export default Footer;