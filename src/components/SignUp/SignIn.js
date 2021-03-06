import React from "react";
import { Link } from "react-router-dom";
import signin from "../../assets/auth/signin-image.jpg";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import "./SignUp.css";

function SignIn() {
  return (
    <section className="sign-in">
    <div className="container">
        <div className="signin-content">
            <div className="signin-image">
                <figure><img src={signin} alt=" "/></figure>
                <Link to="/signup" className="signup-image-link">Create an account</Link>
            </div>

            <div className="signin-form">
                <h2 className="form-title">Log In</h2>
                <form method="POST" class="register-form" id="login-form">
                <div className="form-group">
                        <label for="email"><FaRegEnvelopeOpen className="zmdi zmdi-email"></FaRegEnvelopeOpen></label>
                        <input type="email" name="email" id="email" placeholder="Your Email" required/>
                    </div>
                    <div className="form-group">
                        <label for="your_pass"><RiLockPasswordFill className="zmdi zmdi-lock"></RiLockPasswordFill></label>
                        <input type="password" name="your_pass" id="your_pass" placeholder="Password" required/>
                    </div>
                    <div className="form-group">
                        <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                        <label for="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                    </div>
                    <div className="form-group form-button">
                    <Link to="/thanks"><input type="submit" name="signin" id="signin" className="form-submit" value="Log in"/></Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

  )}

  export default SignIn;