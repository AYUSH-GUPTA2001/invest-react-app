import './Home.css';
import React from 'react';
import image1 from '../../assets/Sponsor-amico (1).png';
import image2 from '../../assets/Webinar-pana.png';
import image3 from '../../assets/Worried-amico.png';
import image4 from '../../assets/right-arrow (1).png';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <>
        {/* <div className='main-container'>
            <h1>LOGO</h1>
            <div className="container">
                  <img className="abc" src={img} alt=""/>

                  <img src={image} alt=""/>
                  
            </div>
            </div>
            <div className="side-container1">
           
                
            </div>
    
        <div className="container2">
         <h1>GIVE YOUR SAVING A WING </h1>
        </div>
        
        <h3>WE FIRST LISTEN THEN GIVE ADVICE </h3> */}
     <div className='main-container'>
     <h1 id="logo">INCVEST</h1>
     
      <div className='box'>
        
       <img  src={image1} alt='' className="image1" /> 
      
        <h1 id='quote'>GIVE YOUR SAVING A WING</h1>
        <h4 id='quote2'>WE FIRST LISTEN THEN GIVE ADVICE</h4>
      </div>

      <div className='box'>
      <div class="blue-div"><img src={image2} alt=""  className="image2" /> <Link to="/advisor"><button className='advisor'>FOR ADVISOR <img alt="" src={image4} className="image4" /> </button></Link></div>
      
    <div class="blue-div"><img src={image3} alt=""  className="image3" />  <Link to="/investor"><button className='investor'>FOR INVESTOR <img src={image4} alt="" className="image4" /> </button></Link></div>
      </div>
</div>
       

        
        </>
    )
}

export default Home