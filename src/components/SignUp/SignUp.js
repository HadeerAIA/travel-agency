import React from "react";
import { Link } from "react-router-dom";
import signup from "../../assets/auth/signup-image.jpg";
import { FaHiking,FaRegEnvelopeOpen } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

import "./SignUp.css";

function SignUp() {
  return (
    <section className="signup">
    <div className="container">
        <div className="signup-content">
            <div className="signup-form">
                <h3 className="form-title">Sign up</h3>
                <form method="POST" className="register-form" id="register-form">
                    <div className="form-group">
                        <label for="name"><FaHiking className="zmdi zmdi-account material-icons-name"></FaHiking></label>
                        <input type="text" name="name" id="name" placeholder="Your Name" required/>
                    </div>
                    <div className="form-group">
                        <label for="email"><FaRegEnvelopeOpen className="zmdi zmdi-email"></FaRegEnvelopeOpen></label>
                        <input type="email" name="email" id="email" placeholder="Your Email" required/>
                    </div>
                    <div className="form-group">
                        <label for="pass"><RiLockPasswordFill className="zmdi zmdi-lock"></RiLockPasswordFill></label>
                        <input type="password" name="pass" id="pass" placeholder="Password" required/>
                    </div>
                    <div className="form-group">
                        <label for="re-pass"><RiLockPasswordFill className="zmdi zmdi-lock-outline"></RiLockPasswordFill></label>
                        <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"required/>
                    </div>
                    <div className="form-group">
                        <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                        <label for="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <Link to=" " class="term-service">Terms of service</Link></label>
                    </div>
                    <div className="form-group form-button">
                        <Link to="/thanks"><input type="submit" name="signup" id="signup" className="form-submit" value="Register"/></Link>
                    </div>
                </form>
            </div>
            <div className="signup-image">
                <figure><img src={signup} alt=" "/></figure>
                <Link to="/signin" className="signup-image-link">I am already member</Link>
            </div>
        </div>
    </div>
</section>
  )}

  export default SignUp;
