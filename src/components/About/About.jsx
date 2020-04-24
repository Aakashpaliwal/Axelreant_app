import React from "react";
import "./about.css";
function About() {
	return (
		<div>
			<div className="about_bg">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="about_header">
								<center>
									<h3>
										Integer bibendium sit amet <br /> arcu
										vel egetas
									</h3>
								</center>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
							<center>
								<div className="about_service_img_div">
									<img src={require("../Img/staff2.png")} />
									<p>Service Name</p>
								</div>
							</center>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
							<center>
								<div className="about_service_img_div_technical about_service_img_div">
									<img
										src={require("../Img/technical.png")}
									/>
									<p>Service Name</p>
								</div>{" "}
							</center>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
							<center>
								<div className="about_service_img_div">
									<img src={require("../Img/folder.png")} />
									<p>Service Name</p>
								</div>
							</center>
						</div>
					</div>
				</div>
			</div>

			<section className="about_details_section">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
							<div className="about_details_data">
								<h4>
									Sed ut perspiciatis unde omnis iste natus
									error sit voluptatem accusantium doloremque
									laudantium, totam rem aperiam.
								</h4>
								<p>
									Ut enim ad minima veniam, quis nostrum
									exercitationem ullam corporis suscipit
									laboriosam, nisi ut aliquid ex ea commodi
									consequatur? Quis autem vel eum iure
									reprehenderit qui in ea voluptate velit esse
									quam nihil molestiae consequatur, vel illum
									qui dolorem eum fugiat quo voluptas nulla
									pariatur?"
								</p>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
							<div className="about_map">
								<img
									src={require("../Img/about_map.jpg")}
									alt="about"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default About;
