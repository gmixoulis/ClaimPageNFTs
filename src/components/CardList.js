//GLB MODELS
import React from "react";
import NFTCard from "./NFTCard";
import "../styles/CardList.css";
import { useNavigate } from "react-router-dom";




export default function Marketplace({ list,type="horizontal" }) {

  let navigate = useNavigate();

  return (
    <div id="card-list" className=" container grid grid-cols-5 mx-5 cols-start-2 gap-1 mx-auto"  style={{flexDirection:type=="horizontal" ? "row" : "column"}}>
      {list.map((item,index) => (
        
        
        <NFTCard nftName={item.name} nftSrc={item.image} year={item.year} tag={item.semester} key={index} 
        onClick={()=>navigate('/detail',{state:{item:item}})}/>
     
      ))}
    </div>
  );
};