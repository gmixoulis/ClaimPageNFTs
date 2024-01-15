import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Card from "../components/base/Card";
import "../styles/NFTDetail.css";
import { ColorExtractor } from "react-color-extractor";
import Button from "../components/base/Button";
import { FaEthereum, FaRegTimesCircle } from "react-icons/fa";
//import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useMobile } from "../hooks/isMobile";
import { useNavigate } from "react-router-dom";

import LazyClaim_GOERLI from '../LazyClaim_GOERLI.json';




const NFTDetail = () => {
  const isMobile = useMobile();
  let navigate = useNavigate();


  const [colors, setColors] = useState([]);

  //const [isLike, setIsLike] = useState(false);
  
  

  //const like = () => setIsLike(!isLike);

  const getColors = (colors) => {
    setColors((c) => [...c, ...colors]);
  };


  const { state } = useLocation();

  useEffect(() => {
    setColors([]);
  }, [state]);

  async function Claim(){
    const ethers = require("ethers");
  
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  
    //After adding your Hardhat network to your metamask, this code will get providers and signers
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
  
    let contract = new ethers.Contract(LazyClaim_GOERLI.address, LazyClaim_GOERLI.abi, signer);
    let transaction = await contract.airdrop(process.env.REACT_APP_LAZYCLAIM_GOERLI, state.item.uri,[signer.getAddress()], [1]);
    console.log(transaction);
    
  }




  



  return (
    <div>
      <button style={{width:"50px",marginTop: "20vh", marginRight: "17vw", display:"inline", float:"right"}} onClick={() =>  navigate(-1)}> <FaRegTimesCircle size="45" color="white" /></button>
      <div id="nft-detail-card-wrapper">
        <Card
          width={isMobile ? "100%" : "65vw"}
          height={isMobile ? "700px" : "60vh"}
          blurColor={colors[0]}
          child={
            //Detail Content
            <div id="detail-content">
             { <> <ColorExtractor getColors={getColors}>
                <img id="detail-image" src={state.item.image} />
              </ColorExtractor></>}

              <div id="detail-info" style={{}}>
                <div id='detail-info-container'>
                  <p id="collection"> # {state.item.semester}, {state.item.year}, {state.item.course}   </p>
                  <p id="name"> {state.item.name} </p> 
                  <p id="">Instructors:  {state.item.instrt1}, {state.item.instr2} </p>
                  <p id="description" > {state.item.description} </p>
                  <p id="description" > <a href={state.item.external_url} target="blank"> HERE! </a>  </p>

                </div>

                <div id="detail-controls">
                  <Button onClick={ Claim}
                    width={isMobile ? "70%" : "70%"}
                    height="50px"
                    child={
                      <div id="button-child">
                        <FaEthereum size="28px" />
                        Claim
                      </div>
                    }
                  ></Button>
                
                </div>
              </div>
            </div>
          }
        />
        
      </div>
    </div>
  );
};

export default NFTDetail ;
