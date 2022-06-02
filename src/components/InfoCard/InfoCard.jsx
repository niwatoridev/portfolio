import React from "react";
import "./InfoCard.css"
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import profPic from "../../images/Circular.png"


const InfoCard = () => {
    return (
    <div className="main-Sec">
        <div className="Main-Div-Info">
            <div className="Info-1">
                <div>
                    <Heading size='lg' id="textInfo">+52 2223900810</Heading>   
                </div>
                <div>
                    <Heading size='lg' id="textInfo">esmunozdev@gmail.com</Heading>   
                </div>
                <div>
                    <Heading size='lg' id="textInfo">México</Heading>   
                </div>
            </div>
            <div className="Info-2">
                    <img src={profPic} alt="prof-pic" className="profPic"/>
            </div>
            <div className="Info-3">
                <div>
                    <Heading size='lg' id="textInfo">Digital Native</Heading>   
                </div>
                <div>
                    <Heading size='lg' id="textInfo">Front-end Passionated</Heading>   
                </div> 
                <div>   
                    <Heading size='lg' id="textInfo">México</Heading>   
                </div>
            </div>
        </div>
    </div>
    );
  };
  
  export default InfoCard;