import React from "react";
import './ThankYou.css'

function ThankYou(){

    
    return(        
        <div id="thankyou" className="bodythankyou">
        <div className="contentthankyou">
        <div className="wrapper-1thankyou">
          <div className="wrapper-2thankyou">
            <h1 className="h1thankyou">Thank you !</h1>
            <p>Thanks for choosing us. </p>
            <p>you should receive a confirmation email soon  </p>
            <button className="go-home">
            <a href="homepage"> go home</a>           
            </button>
          </div>
          <div className="footer-likethankyou">
            <p>Email not received?
             <a href="contactUs">Click here to send again</a>
            </p>
          </div>
      </div>
      </div>
      
      
      
      <link href="https://fonts.googleapis.com/css?family=Kaushan+Script|Source+Sans+Pro" rel="stylesheet" />
      </div>
    );
}

export default ThankYou;

