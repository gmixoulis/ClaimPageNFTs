import Hero from "../components/Hero";
import Footer from "./Footer";
import "../styles/Home.css";
import CardList from "../components/CardList";
import React, { useState, useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
//import marketplace from "../marketplace.json";
import Manifest_GOERLI from "../Manifest_GOERLI.json";

import axios from "axios";
import "../styles/base/AccordionHeader.css";
import { RingLoader, PuffLoader } from "react-spinners";
import { useEffect } from "react";

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3900);
  }, []);

  const sampleData = [
    {
      name: "NFT#1",
      description: "Connect your wallet to fetch the available NFTs",
      image:
        "https://i.seadn.io/gae/vMsejsaDsN85rufzK8KD5CbzEWtAlavI6CwslDhUD0WTEyIpxm7LChQIRTYRVOWfYOshShAY3In1dT5kieTdw-pA2_-oo3wMIYvX?auto=format&w=1920",
    },
  ];
  const [data, updateData] = useState(sampleData);
  const [dataFetched, updateFetched] = useState(false);
  const [con, setCon] = useState(true);

  async function getAllNFTs() {
    let NFTlist = [];
    let UriList = [];
    const ethers = require("ethers");
    if (!window.ethereum) {
      setCon(true);
    }

    await window.ethereum.request({ method: "eth_requestAccounts" });

    //After adding your Hardhat network to your metamask, this code will get providers and signers
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    setCon(false);
    //Pull the deployed contract instance
    let contract = new ethers.Contract(
      Manifest_GOERLI.address,
      Manifest_GOERLI.abi,
      signer
    );
    //create an NFT Token
    var count = 1;
    while (count != (await contract.uri(count))) {
      let transaction = await contract.uri(count);
      UriList.push(transaction);
      count = count + 1;
    }
    for (var i = 0; i < UriList.length; i++) {
      let meta = await axios.get(UriList[i]);
      NFTlist.push(meta.data);
    }
    //NFTlist.map(i => {console.log(i.attributes)});

    //Fetch all the details of every NFT from the contract and display
    const items = await Promise.all(
      NFTlist.map(async (i, index) => {
        if (i.name != "Placeholder Token") {
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
            uri: index + 1,
          };
          return item;
        }
      })
    );
    updateFetched(true);
    updateData(
      items.filter(function (element) {
        return element !== undefined;
      })
    );
  }

  if (!dataFetched) {
    getAllNFTs();
  }

  const [tag, setTag] = useState("All");
  const [year, setYear] = useState("All");
  //tag filters
  function _getUniqueTags() {
    const Tags = [...new Set(data.map((item) => item.semester))];
    Tags.push("All");
    return Tags.map((campus, index) => (
      <button
        type="button"
        className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 "
        key={index}
        onClick={() => setTag(campus)}
      >
        {campus}
      </button>
    ));
  }
  //year based filters
  function _getUniqueYears() {
    const Years = [...new Set(data.map((item) => item.year))];
    Years.push("All");
    return Years.map((year, index) => (
      <button
        type="button"
        className="ttext-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 text-white"
        key={index}
        onClick={() => setYear(year)}
      >
        {year}
      </button>
    ));
  }
  const tags = _getUniqueTags();
  const years = _getUniqueYears();

  return (
    <div id="home">
      {loading ? (
        <div className="containerClip w-full h-full  flex items-center justify-center h-screen">
          <br></br>
          <RingLoader
            color={"#d63636"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />{" "}
        </div>
      ) : (
        <>
          <Particles
            id="tsparticles"
            url="https://raw.githubusercontent.com/matteobruni/tsparticles/main/websites/particles.js.org/presets/amongUs.json"
            init={particlesInit}
          />

          <div
            id="mainContainer"
            className="container"
            style={{ position: "relative", zIndex: "0!important" }}
          >
            <Hero />

            {con ? (
              <div className="container mx-auto grid  place-items-center">
                <h2
                  id="metamaskText"
                  className="text-2xl text-transparent bg-clip-text bg-gradient-to-r to-rose-600 from-sky-400"
                >
                  Have you connected your wallet (Metamask)?{" "}
                </h2>
                <br></br> <br></br>
                <div>
                  {" "}
                  <br></br> <br></br> <br></br>
                  <PuffLoader
                    color={"#d63636"}
                    loading={con}
                    size={260}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </div>{" "}
              </div>
            ) : (
              <div id="FilterCardlist" className="container">
                <div className=" rounded-md shadow-sm  grid col-start-1  ">
                  <p id="card-list-header-text"> Available Courses </p>
                </div>
                <div id="filters">
                  <div
                    id="tags"
                    className="rounded-md shadow-sm grid grid-cols-6 col-span-2 "
                  >
                    <div className=" col-start-2 col-span-1">
                      <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                        Period:{" "}
                      </h1>
                    </div>
                    {tags}
                  </div>
                  <br></br>
                  <br></br>
                  <div
                    id="years"
                    className=" rounded-md shadow-sm grid grid-cols-6  col-span-2"
                  >
                    <div className=" col-start-2 col-span-1">
                      <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                        Year:{" "}
                      </h1>
                    </div>
                    {years}
                  </div>
                </div>

                <CardList
                  list={data.filter((newVal) => {
                    return tag === "All" && year === "All"
                      ? true
                      : (newVal.semester === tag || tag === "All") &&
                          (newVal.year === year || year === "All");
                    //return hotDropsData.keys();
                  })}
                />
              </div>
            )}
          </div>

          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
