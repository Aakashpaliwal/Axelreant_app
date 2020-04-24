import React from "react";
import "./testimonial.css";
function Testimonial() {
	return (
		<div>
			<section className="testtimonial_section">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<center>
								<h3 style={{ marginBottom: "40px" }}>
									Testimonials
								</h3>
							</center>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
							<div class="testimonial_master_area">
								<div className="testimonial_square">
									<p>
										<i
											class="fa fa-quote-left"
											aria-hidden="true"
										></i>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam.
									</p>
								</div>
								<div id="triangle-down"></div>
								<div className="row">
									<div className="col-2">
										<img
											src={require("../Img/client.png")}
											alt="testimonial"
										/>
									</div>
									<div className="col-10">
										<div className="testimmonial_client">
											<span>
												CLIENT NAME <br /> Postion, ORG
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
							<div class="testimonial_master_area">
								<div className="testimonial_square">
									<p>
										<i
											class="fa fa-quote-left"
											aria-hidden="true"
										></i>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam.
									</p>
								</div>
								<div id="triangle-down"></div>
								<div className="row">
									<div className="col-2">
										<img
											src={require("../Img/client.png")}
											alt="testimonial"
										/>
									</div>
									<div className="col-10">
										<div className="testimmonial_client">
											<span>
												CLIENT NAME <br /> Postion, ORG
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
							<div class="testimonial_master_area">
								<div className="testimonial_square">
									<p>
										<i
											class="fa fa-quote-left"
											aria-hidden="true"
										></i>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam.
									</p>
								</div>
								<div id="triangle-down"></div>
								<div className="row">
									<div className="col-2">
										<img
											src={require("../Img/client.png")}
											alt="testimonial"
										/>
									</div>
									<div className="col-10">
										<div className="testimmonial_client">
											<span>
												CLIENT NAME <br /> Postion, ORG
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Testimonial;
