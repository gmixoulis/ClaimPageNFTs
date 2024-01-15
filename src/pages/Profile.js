import { useParams } from 'react-router-dom';
import MarketplaceJSON from "../marketplace.json";
import axios from "axios";
import { useState, useCallback } from "react";
import "../styles/Home.css"
import Footer from './Footer';
import {RingLoader} from "react-spinners";
import { useEffect } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useEthers, useEtherBalance } from "@usedapp/core";
import Manifest_GOERLI from "../Manifest_GOERLI.json";
import CardList from "../components/CardList";


export default function Profile () {

    const particlesInit = useCallback(async engine => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
        }, []);

    const particlesLoaded = useCallback(async container => {
        console.log(container);
    }, []);

    const [loading, setLoading] = useState(false);
    useEffect(()=>{
      setLoading(true);
      setTimeout(()=>{
        setLoading(false)
      }, 1900)
    },[])
    //const [data, updateData] = useState([]);
    const [dataFetched, updateFetched] = useState(false);
    const [address, updateAddress] = useState("0x");
    const [data, updateData] = useState([]);


    async function getNFTData() {
        const ethers = require("ethers");
        let sumPrice = 0;
        //After adding your Hardhat network to your metamask, this code will get providers and signers
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const addr = await signer.getAddress();
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        var contract="";
        //Pull the deployed contract instance
        if(chainId === '0x1')
        {
            contract = new ethers.Contract(MarketplaceJSON.address, MarketplaceJSON.abi, signer)

        }
        else{
            contract = new ethers.Contract(Manifest_GOERLI.address, Manifest_GOERLI.abi, signer)
        }  
        var count =1;
        while (count != await contract.uri(count)){
          count = count +1;
        }
        let NFTlist=[];

        for (let i=0; i<= count; i++){
        let transaction = await contract.balanceOf(addr,i);
        if (Number(transaction) !==0){
            NFTlist.push(i);
        }
        var UriList=[];
        for (var j in NFTlist){
            let transaction2 = await contract.uri(j);
            UriList.push(transaction2);          }
             }
             UriList=UriList.slice(1);
               

    var NFTlist2=[];
    for (var i=0; i < UriList.length ; i++){
        let meta = await axios.get(UriList[i]);
        NFTlist2.push(meta.data); 
      }

      const items = await Promise.all(NFTlist2.map(async (i,index) => {
        if (i.name != "Placeholder Token"){
          //const attrs = i.attributes.reduce((prev, curr) => 
          //  ({...prev, [curr.trait_type]: curr.value}), {});
          //console.log(attrs["Course Code"])
          let item = { 
             
              image: i.image_url,
              //course: attrs["Course Code"],
              name: i.name,
              //semester: attrs["Semester"],
              //year: attrs["Year"], 
              //instrt1: attrs["Instructor 1"],
              //instr2: attrs["Instructor 2"],
              description: i.description,
              external_url: i.external_url,
              uri: index+1
          }
          return item;
      }}));
      updateFetched(true);
      updateData(items.filter(function( element ) {
        return element !== undefined })); 
      

        updateAddress(addr);
    }
    

    //const params = useParams();
    //const tokenId = params.tokenId;
    if(!dataFetched)
        getNFTData();
    
    const {account} = useEthers();

    return (
        <div>
             {
       loading? <div className="containerClip flex items-center justify-center h-screen"> 
       <br></br>
       <RingLoader color={'#d63636'}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"/>  </div> : <>
     
        <Particles id="tsparticles" url="https://raw.githubusercontent.com/matteobruni/tsparticles/main/websites/particles.js.org/presets/hollowknight.json"  init={particlesInit} loaded={particlesLoaded} />

        <div className="  container mx-auto grid  place-items-top" style={{position:"relative", zIndex:"0!important", minHeight:"50vh", marginTop:"16vh", marginBottom:"10vh"}}>
            
            <div className="profileClass">
            <div className="flex text-center flex-col mt-11 md:text-2xl text-white">
                <div className="mb-5">
                    <h2 className="font-bold">Wallet Address</h2>  
                    {address}
                </div>
            </div>
            <div className="flex flex-row text-center justify-center mt-10 md:text-2xl text-white">
                    <div>
                        <h2 className="font-bold">No. of NFTs</h2>
                       {/* {data.length} */}
                    </div>
                    
            </div>
            <div className="flex flex-col text-center items-center mt-11 text-white">
                <h2 className="font-bold">Your NFTs</h2>
                
                <CardList  list={data} />
                <div className="mt-10 text-xl">
                  {/*  {data.length === 0 ? "Oops, No NFT data to display (Are you logged in?)":""} */}
                </div>
            </div>
            </div>
            

        </div>
        <Footer/>
        </>
        }
        </div>
        
    )
};
