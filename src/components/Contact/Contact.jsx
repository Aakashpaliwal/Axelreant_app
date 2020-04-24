import React, { Component } from "react";
import "./contact.css";
export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ui_name: "",
      ui_gender: "",
      ui_mobile: "",
      ui_email: "",
      ui_password: "",
      // selectedFile: null
    };
  }

  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };

  render() {
    return (
      <div>
        <section className="contact_section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <center>
                  <h2>Convinced To Work With US?</h2>
                  <p>
                    Company has helped agencies to keep their promises to
                    clients since 2005.
                  </p>
                </center>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="contact_form">
                  <center>
                    <form>
                      <div class="form-row">
                        <div class="form-group col-md-4">
                          <input
                            type="text"
                            class="form-control"
                            id="inputEmail4"
                            placeholder="FullName"
                          />
                        </div>
                        <div class="form-group col-md-4">
                          <input
                            type="email"
                            class="form-control"
                            id="inputPassword4"
                            placeholder="Email"
                          />
                        </div>
                        <div class="form-group col-md-4">
                          <input
                            type="number"
                            class="form-control"
                            id="inputPassword4"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          rows="10"
                        ></textarea>
                      </div>
                      <button type="submit" class="btn contact_submit_btn">
                        Submit
                      </button>
                    </form>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
