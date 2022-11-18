import React from "react";
import "./InfoCard.css"
import { Heading } from "@chakra-ui/react";
import profPic from "../../images/Circular.png"
import homeIcon from "../../images/icons/home.png"
import { Link } from "react-router-dom";




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
                    <figure><img src={profPic} alt="prof-pic" id="profPic"/></figure>
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
        <div className="part3">
            <Heading size='2xl' id="nameFull"> 
                Esteban Munoz
            </Heading>
            <Link to="/"><img src={homeIcon} alt='home-icon' className='homeIcon'/></Link>
        </div>
    </div>
    );
  };
  
  export default InfoCard;