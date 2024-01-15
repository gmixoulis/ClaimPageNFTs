import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { useWeb3Modal, Web3Button } from '@web3modal/react';
import { useAccount } from 'wagmi';
import { EthereumClient, modalConnectors, walletConnectProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
//dapp
import { DAppProvider } from "@usedapp/core";
import NFTDetail from "./pages/NFTDetail";
import Header from "./components/Header";

import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'

const projectId = process.env.REACT_APP_WALLET_CONNECT;

const chains = [chain.mainnet,  chain.goerli];
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: projectId }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "CLAIM_PAGE", chains }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);
ReactDOM.render(



  <BrowserRouter>
      <Header/>
      <WagmiConfig client={wagmiClient}>

      <Routes>

        <Route path="/" element={<DAppProvider config={{}}><Home /></DAppProvider>} />
        <Route path="/explore" element={<DAppProvider config={{}}><Explore /></DAppProvider>} />
        <Route path="/detail" element={<DAppProvider config={{}}><NFTDetail /></DAppProvider>} />
        <Route path="/profile" element={<DAppProvider config={{}}><Profile /></DAppProvider>} />
    
      </Routes>
      </WagmiConfig>
        <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
      />
    </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();