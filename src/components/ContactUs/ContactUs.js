import React from "react";
import './ContactUs.css'
  function ContactUs () {

    /*new JustValidate('.fcf-form-class', {
        rules: {
            "Name": {
                "required": true,
                "minLength": 1,
                "maxLength": 100
            },
            "Email": {
                "required": true,
                "minLength": 1,
                "maxLength": 100,
                "email": true
            },
            "Message": {
                "required": true,
                "minLength": 1,
                "maxLength": 3000
            }
        },
        colorWrong: '#dc3545',
        focusWrongField: true,
        submitHandler: function (cform, values, ajax) {
    
            var button_value = getButtonValue('fcf-button');
            disableButton('fcf-button');
            ajax({
                url: cform.getAttribute('action'),
                method: 'POST',
                data: values,
                async: true,
                callback: function (response) {
                    var done = false;
                    if (response.indexOf('Fail:') === 0) {
                        // configration problem
                        showFailMessage(response);
                        enableButon('fcf-button', button_value);
                        done = true;
                    }
    
                    if (response.indexOf('Error:') === 0) {
                        // validation problem
                        showErrorMessage(response);
                        enableButon('fcf-button', button_value);
                        done = true;
                    }
    
                    if (response.indexOf('Success') === 0) {
                        showSuccessMessage(response);
                        done = true;
                    }
    
                    if (response.indexOf('Debug:') === 0) {
                        showDebugMessage(response);
                        enableButon('fcf-button', button_value);
                        done = true;
                    }
    
                    if (done === false) {
                        showErrorMessage('Error:Sorry, an unexpected error occurred. Please try later.');
                        enableButon('fcf-button', button_value);
                    }
    
                }
            });
    
        },
    });
    
    function getButtonValue(id) {
        return document.getElementById(id).innerText;
    }
    
    function disableButton(id) {
        document.getElementById(id).innerText = 'Please wait...';
        document.getElementById(id).disabled = true;
    }
    
    function enableButon(id, val) {
        document.getElementById(id).innerText = val;
        document.getElementById(id).disabled = false;
    }
    
    function showFailMessage(message) {
        var display = '<strong>Unexpected errors. </strong>(form has been misconfigured)<br>';
        display += message.substring(5);
        document.getElementById('fcf-status').innerHTML = display;
    }
    
    function showErrorMessage(message) {
        var display = '<strong>Validation problem:</strong><br>';
        display += message.substring(6);
        document.getElementById('fcf-status').innerHTML = display;
    }
    
    function showDebugMessage(message) {
        var display = '<strong>Debug details.</strong><br>(Please remember to switch off DEBUG mode when done!)<br>';
        display += message.substring(6);
        document.getElementById('fcf-status').innerHTML = display;
    }
    
    // Removing this credit is NOT allowed
    // Please purchase a pro license for credit removal rights
    var creditcontainer = document.querySelector(".buttons");
    var creditdiv = document.createElement('div');
    creditdiv.innerHTML = '<div class="field" style="font-size:0.9em;color:#aaa;padding-top:15px;padding-bottom:10px">Free contact form by <a href="https://www.majesticform.com" style="font-size:0.9em;color:#aaa;text-decoration:none" target="_blank">MajesticForm</a>.</div>';
    creditcontainer.parentNode.insertAdjacentElement('afterend', creditdiv);
    
    
    function showSuccessMessage(message) {
         message = '<br><br>' + message.substring(8);
        var content = document.getElementById('fcf-thank-you').innerHTML;
        document.getElementById('fcf-thank-you').innerHTML = content + message;
        document.getElementById('fcf-status').innerHTML = '';
        document.getElementById('fcf-form').style.display = 'none';
        document.getElementById('fcf-thank-you').style.display = 'block';
    }*/

      return(
          <div id="contactUs">          
        {/* <div style="max-width:500px;padding:30px"> */}
        <div style={{outerWidth: `500px`, padding : '30px'}}>
        <div id="fcf-form">
            <form class="fcf-form-class" id="freeversion" method="post" action="fcf-assets/fcf.process.php">

                <div class="field">
                    <label for="Name" class="label has-text-weight-normal">Your name</label>
                    <div class="control">
                        <input type="text" name="Name" id="Name" class="input is-full-width" maxlength="100"
                            data-validate-field="Name"/>
                    </div>
                </div>
                <div class="field">
                    <label for="Email" class="label has-text-weight-normal">Your email address</label>
                    <div class="control">
                        <input type="email" name="Email" id="Email" class="input is-full-width" maxlength="100"
                            data-validate-field="Email"/>
                    </div>
                </div>
                <div class="field">
                    <label for="Message" class="label has-text-weight-normal">Your message</label>
                    <div class="control">
                        <textarea name="Message" id="Message" class="textarea" maxlength="3000" rows="5" 
                        data-validate-field="Message"></textarea>
                    </div>
                </div>
                <div id="fcf-status" class="fcf-status"></div>
                <div class="field">
                    <div class="buttons">
                        <button id="fcf-button" type="submit" class="button is-link is-medium">Send Message</button>
                    </div>
                </div>
            </form>
        </div>       
        <div id="fcf-thank-you" style={{display: `none`}}>       
            <strong>Thank you</strong>
            <p>Thanks for contacting us, we will get back in touch with you soon.</p>           
        </div>
    </div>
    </div>    
      );
  }
    
export default ContactUs;

