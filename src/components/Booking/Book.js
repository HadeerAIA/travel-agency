
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import "./Book.css";

function Book() {
  return (
	  <>
	  <Navbar/>
    <div id="booking" class="section ">
		<div class="section-center ">
			<div class="">
				<div class="row">
					<div class="booking-form">
						<div class="booking-bg"></div>
						<form>
							<div class="form-header">
								<h2>Book Your Trip</h2>
							</div>

              <div class="form-group pd">
								<span class="form-label">Program Name</span>
								<input class="form-control" type="text" placeholder="Enter your email" value="Alex Trip"/>
							</div>

							<div class="row pd">
								<div class="col-md-6">
									<div class="form-group">
										<span class="form-label">Name</span>
										<input class="form-control" type="text" value="Hadeer Elfiky"/>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<span class="form-label">Email</span>
										<input class="form-control" type="email" value="hadeerelfiky@gmail.com"/>
									</div>
								</div>
							</div>
							<div class="row pd">
								<div class="col-md-6">
									<div class="form-group">
										<span class="form-label">Number of Passengers</span>
										<select class="form-control">
											<option>1</option>
											<option>2</option>
											<option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
										</select>
										<span class="select-arrow"></span>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<span class="form-label">Number of Rooms</span>
										<select class="form-control">
											<option>0</option>
											<option>1</option>
											<option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
										</select>
										<span class="select-arrow"></span>
									</div>
								</div>
							</div>
						
							<div class="form-group pd">
								<span class="form-label">Phone</span>
								<input class="form-control" type="tel" placeholder="Enter your phone number"/>
							</div>
							<div class="form-btn">
								<Link to = "/checkout"><button class="submit-btn">Book Now</button></Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	</>
  );
}

export default Book;