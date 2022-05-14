import React from "react";
import './ThankYou2.css'

function ThankYou2(){

    
    return(        
        <div id="thankyou" className="bodythankyou2">
        <div className="thankyoucontent">
 <div className="wrapper-1">
    <div className="wrapper-2">
       <img src="https://i.ibb.co/Lkn7rkG/thank-you-envelope.png" alt="thank-you-envelope" border="0"/>
     <h1 className="h1thankyou">Thank you!</h1>
      <p>for contacting us, we will reply promptly</p> 
      <p>once your message is received. </p>
      <button className="go-home">
        {/* <a className="athankyou" href="https://codepen.io/LeenaStark/full/VOxrJO">
        home page</a> */}
        <a href="homepage"> home page</a> 
      </button>
    </div>
   
    <div className="footer-like">
      <p>
      </p>
    </div>
</div>
      </div>
      </div>
    );
}

export default ThankYou2;

