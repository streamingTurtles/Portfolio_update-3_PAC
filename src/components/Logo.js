import React from "react";
import { Link } from "react-router-dom";

function Logo() {
    return (
        <div class="fas fa-yin-yang" style={{fontSize: "25px"}}>
            <Link to="/" >
                 Peter A Cardillo
                </Link>

        </div>
    )
}


export default Logo;

