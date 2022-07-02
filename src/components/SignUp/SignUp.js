import React from "react";
import { Link } from "react-router-dom";
import signup from "../../assets/auth/signup-image.jpg";
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
                        <label for="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                        <input type="text" name="name" id="name" placeholder="Your Name"/>
                    </div>
                    <div className="form-group">
                        <label for="email"><i className="zmdi zmdi-email"></i></label>
                        <input type="email" name="email" id="email" placeholder="Your Email"/>
                    </div>
                    <div className="form-group">
                        <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                        <input type="password" name="pass" id="pass" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <label for="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                        <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"/>
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
