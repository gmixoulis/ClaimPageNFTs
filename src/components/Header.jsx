import { Link } from "react-router-dom";
import { ethers} from "ethers";
import Web3Token from 'web3-token';
import  "../styles/base/AccordionHeader.css";
import ThemeControls from "./base/web3modal";
import { useWeb3Modal, Web3Button } from '@web3modal/react';
import { useAccount } from 'wagmi';
import { Web3Modal } from '@web3modal/react'


/*
let token="";



const metamask = async () =>{
  if (!window.ethereum) {
    return console.log('Please install and activate the metamask extension!');
  }
  await window.ethereum.request({ method: 'eth_requestAccounts' });


  // Connection to MetaMask wallet
  const web3Modal = new Web3Modal();
  const connection = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);
  const signer = provider.getSigner();


  const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    if(chainId !== '0x1')
    {
      //alert('Incorrect network! Switch your metamask network to Rinkeby');
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x1' }],
     })
    }  

    // generating a token with 1 day of expiration time
  try {  token = await Web3Token.sign(async msg => {
    
        try {
          return await signer.signMessage(msg);
        }
        catch (err) {
          const { reason } = err;
          if (reason === "unknown account #0") {
            return console.log('Have you unlocked metamask and are connected to this page?')
          }

          console.log(err.toString());
        }} , 
        {
      domain: 'metaverse.unic.com',
      statement: 'I accept the WoD Terms of Service: https://service.org/tos',
      expires_in: '1 hour',
      });
    }

  catch (err) {
      
      console.log(err.toString());
  }

  

};

*/





 


const Header = () => {

    
    const { isConnected } = useAccount()
    const { open } = useWeb3Modal()

    return (


<nav id="header" className=" px-2 sm:px-4 py-2.5  fixed w-full z-20 top-0 left-0  ">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <a id="logo" href="/" className="flex items-center">
      <img src="https://cdn-ghogl.nitrocdn.com/JRPGnZvVoyflYCWOeOGQaVwOcwyxumHT/assets/static/optimized/rev-667b92a/wp-content/uploads/2020/12/UNIC-header-logo-white-1.png" className="h-6 mr-3 sm:h-9" alt="Unic Logo"/>
  </a>
  <div className="flex md:order-2">
    <ThemeControls />
      
        <Web3Button />

      {/* Alternatively Use custom button */}
      {!isConnected && <button onClick={() => open()}> </button>}
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-black-500 rounded-lg md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
  </div>
  <div  className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul id="link-containers" className="flex flex-col p-4 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  bg-black-800 md:bg-black-900 border-black-700">
      <li>
        <Link to='/' className="block py-2 pl-3 pr-4  bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 text-white" aria-current="page">Home</Link>
      </li>
      <li>
        <Link to='/explore' id='explore' className="block py-2 pl-3 pr-4 rounded  md:hover:bg-transparent  md:p-0 md:hover:text-white text-black-400 hover:bg-black-700 hover:text-white  border-black-700">All Courses</Link>
      </li>
      <li>
        <Link to='/profile' className="block py-2 pl-3 pr-4 rounded  md:hover:bg-transparent  md:p-0 md:hover:text-white text-black-400 hover:bg-black-700 hover:text-white  border-black-700">Profile</Link>
      </li>
     
    </ul>
  </div>

  </div>
</nav>

      
       
      
    );
}

export default Header;
