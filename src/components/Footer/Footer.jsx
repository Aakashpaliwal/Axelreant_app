import React from "react";
import "./footer.css";
function Footer() {
	return (
		<div>
			<section className="footer_bg">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
							<p>&copy; 2017 Company. All Rights Reserved.</p>
						</div>
						<div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
							<div className="footer_right_social">
								<span>
									Follow us :{" "}
									<ul>
										<li>
											<i
												class="fa fa-facebook-square"
												aria-hidden="true"
											></i>
										</li>
										<li>
											<i
												class="fa fa-linkedin-square"
												aria-hidden="true"
											></i>
										</li>
										<li>
											<i
												class="fa fa-twitter"
												aria-hidden="true"
											></i>
										</li>
									</ul>
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Footer;
