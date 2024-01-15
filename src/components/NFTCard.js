import React, {  useState } from "react";
import "../styles/NFTCard.css";
import { FaEthereum } from "react-icons/fa";
import { ColorExtractor } from 'react-color-extractor'
import Card from "./base/Card";
import Button from "./base/Button";
import { Colors } from "../constants/Colors";





const NFTCard = ({ tag, year, nftName, nftSrc, onClick }) => {
  const [colors, setColors] = useState([]);



  const getColors = colors => {
    setColors(c => [...c, ...colors]);
    //console.log(colors);
  }





  return (
    <Card onClick={onClick}
      blurColor={colors[0]}

      child={<>
        { <><ColorExtractor getColors={getColors}>
          <img className="nft-image" src={nftSrc} />
        </ColorExtractor></>}
        <div className="wrapper">
          <div className="info-container">
            <p className="owner"> UNIC.NFT</p>
            <p className="name">{nftName}</p>
            
          </div>

          <div className="price-container">
            <p className="price-label">Platform</p>
            <p className="price">
              
              <FaEthereum /> 
            </p>
          </div>
        </div>
        <div className="buttons">
          {/* <button className="buy-now">Buy Now</button> */}
          <Button color={Colors.buttons.primary} textContent="Claim" onClick={onClick} />
          <div className="like-container">
            <p> # {tag}, {year}</p>
          </div>
        </div>
      </>}>

    </Card>
  );
};

export default NFTCard;

