import React from "react";
import RowContainer from "../../components/RowContainer";
// import PortfolioPg from "../../components/PortfolioPg";
import PortfolioPgBurgerApp from "../../components/PortfolioPgBurgerApp";
import PortfolioPgNoteTaker from "../../components/PortfolioPgNoteTaker";
import PortfolioPgEmpMgmtSys from "../../components/PortfolioPgEmpMgmt";
import PortfolioPgWeatherDash from "../../components/PortfolioPgWeatherDash";

function Portfolio() {
    return (
      <div>
          
          <RowContainer>

             
            <PortfolioPgBurgerApp />
            <PortfolioPgNoteTaker />
            <PortfolioPgEmpMgmtSys />
            <PortfolioPgWeatherDash />



          </RowContainer>
      </div>

    )
};

export default Portfolio;