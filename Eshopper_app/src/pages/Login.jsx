import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div class="container-fluid bg-secondary mb-5">
        <div
          class="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: "200px" }}
        >
          <h1 class="font-weight-semi-bold text-uppercase mb-3">Login</h1>
          <div class="d-inline-flex">
            <p class="m-0">
              <Link to="/">Home</Link>
            </p>
            <p class="m-0 px-2">-</p>
            <Link to="/register" class="m-0">
              Register
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">Sign In Page</span>
          </h2>
        </div>
        <div className="row px-xl-5">
          <div className="col-lg-7 mb-5 mx-auto">
            <div className="contact-form">
              <div id="success"></div>
              <form name="sentMessage" id="contactForm" novalidate="novalidate">
                <div className="control-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    required="required"
                    data-validation-required-message="Please enter your email"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input
                    type="password"
                    className="form-control"
                    id="pass"
                    placeholder="Your Password"
                    required="required"
                    data-validation-required-message="Please enter password"
                  />
                  <p className="help-block text-danger"></p>
                </div>

                <div>
                  <button
                    className="btn btn-primary py-2 px-4"
                    type="submit"
                    id="sendMessageButton"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
