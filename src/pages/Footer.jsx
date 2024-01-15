import "../styles/FooterStyles.css";
import React from "react";
import { FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
export const Footer = () => {
  return (

//<footer aria-label="Site Footer" className="footer">
<footer aria-label="Site Footer" className="bg-zinc bg-zinc-900	footer" style={{paddingLeft:"0"}} > 
  <div className="mx-auto max-w-screen-xl px-4  pb-3 sm:px-6 lg:px-8">


    <div style={{textAlign:'left !important', paddingTop:"30px"}}
      className=" grid grid-cols-1 gap-8   pt-16 border-gray-800 md:grid-cols-4 lg:grid-cols-6"
    >
      <div className="text-center sm:text-left">
        <p className="text-lg font-medium text-white">
         Cyprus
        </p>

        <nav  className=" sm:text-lef mt-8">
          <ul className="space-y-4 text-sm " >
            <li>
              <p className=" transition  ulnav text-white "  >
                46 Makedonitissas Avenue, CY-2417 </p>
                </li>
                <li>
                  <p  className=" transition  ulnav text-white ">
                P.O. Box 24005, CY-1700  
              </p>
            </li>

        

            <li>
              <p className=" transition ulnav text-white ">
                Nicosia, Cyprus </p>
               </li>
               <li>
                <p className=" transition ulnav text-white ">
             <span> Phone: </span>  <a href="tel:+357 22 841 500"> +357 22 841 500</a>
              </p>
            </li>
            <li>
              <p
                className=" ulnav transition text-white  "
              >
              <span> Email:</span> <a  href="mailto:admissions@unic.ac.cy">admissions@unic.ac.cy</a>
              </p>
            </li>
          </ul>
        </nav>
      </div>

      <div className="text-center sm:text-left">
      <p className="text-lg font-medium text-white">
         Greece
        </p>

        <nav  className=" sm:text-lef mt-8">
          <ul className="space-y-4 text-sm " >
            <li>
              <p
                className=" transition  ulnav text-white "
             
              >
                265 Mesogeion Avenue</p>  
              
            </li>
          <li>
          <p  className=" transition  ulnav text-white "> 15451 Neo Psychico  
              </p>
          </li>
     
            <li> 
              <p
                className=" transition ulnav text-white "
               
              >
               Athens, Greece  </p>
               </li>

            <li>
             
             <p  className=" transition ulnav text-white "> <span>Phone: </span> <a href="tel:8011002345"> 8011002345, </a> <a href="tel:+30210 6748293">210 6748293</a>
              </p>
            </li>

            <li>
              <p className=" ulnav transition  text-white  ">
               <span> Email:</span> <a  href="mailto:greece.admissions@unic.ac.cy">greece.admissions@unic.ac.cy</a>
              </p>
            </li>
          </ul>
        </nav>
      </div>


      <div className="text-center sm:text-left">
        <p className="text-lg font-medium  text-white">
          Useful Links
        </p>

        <nav id="NavFooter" aria-label="Footer Helpful Nav" className="mt-8">
          <ul className="space-y-4 text-sm ulnav" style={{lineHeight:"10px"}}>
            <li>
              <a
                className=" transition  text-white "
                href="https://www.unic.ac.cy/all-programmes/" target="blank"
              >
                Academic Programmes
              </a>
            </li>

            <li>
              <a
                className=" transition  text-white "
                href="https://www.unic.ac.cy/student-support/accommodation/" target="blank"
              >
                Accommodation
              </a>
            </li>

            <li>
              <a
                className="group flex justify-center gap-1.5 sm:justify-start text-white"
                href="https://www.unic.ac.cy/brand" target="blank"
              >
           
                  UNIC Brand Center              </a>
            </li>
            <li>
              <a
                className="group flex justify-center gap-1.5 sm:justify-start text-white"
                href="https://www.unic.ac.cy/in-the-news/" target="blank"
              >
           
           UNIC in the News            </a>
            </li>
            <li>
              <a
                className="group flex justify-center gap-1.5 sm:justify-start text-white"
                href="https://www.unic.ac.cy/careers-at-unic/" target="blank"
              >
           
           Careers at UNIC            </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="text-center sm:text-left"></div>

      <div className="text-center sm:text-left md:col-span-4 lg:col-span-2">
        <p className="text-lg font-medium  text-white">
        GET SOCIAL WITH UNIC
        </p>

        <div className="mx-auto mt-8 max-w-md sm:ml-0">
        <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
        <li>
          <a href="https://twitter.com/UNIC_ENG" alt="Twitter"  target="blank"><FaTwitterSquare style={{color:"#bb1d2c", fontSize:"40px"}} /> </a>
        </li>

        <li>
          <a href="https://www.facebook.com/UniversityofNicosia" alt="Facebook" target="blank"><FaFacebookSquare style={{color:"#bb1d2c", fontSize:"40px"}} /> </a>
        </li>


        <li>
          <a href="https://discord.gg/joinunic" alt="Discord" target="blank"><BsDiscord style={{color:"#bb1d2c", fontSize:"40px", marginTop:"3px"}} /> </a>
        </li>


       
        
      </ul>
      <br></br>
      <div
              className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start"
            >
      <button   type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.unic.ac.cy/newsletters/';
      }} target="blank" className="bg-red-800 w-full text-white active:bg-red-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
      >
 Subscribe to our Newsletter
</button>
</div>
          
        </div>
      </div>
    </div>

    <div
      className="mt-10 border-t border-gray-100 pt-6 border-gray-800 sm:flex sm:items-center sm:justify-between"
    >
      <p
        className="text-center text-sm text-gray-500 text-gray-400 sm:text-left"
      >
        Copyright © University of Nicosia. <a>All Rights Reserved</a>  <span> | </span> <a href="https://www.unic.ac.cy/privacy-policy/" target="blank">Privacy Policy</a> <span> | </span>  <a href="https://www.unic.ac.cy/terms-and-conditions/" target="blank">Terms & Conditions</a>
      </p>

      
    </div>
  </div>
</footer>

  );
};

export default Footer;