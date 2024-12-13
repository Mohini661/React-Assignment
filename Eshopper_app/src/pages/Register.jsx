import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const uname = useRef();
  const email = useRef();
  const phone = useRef();
  const password = useRef();
  const cpassword = useRef();

  const addUser = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        uname: uname.current.value,
        email: email.current.value,
        phone: phone.current.value,
        password: password.current.value,
        cpassword: cpassword.current.value,
      }),
    });
    (uname.current.value = " "),
      (email.current.value = " "),
      (phone.current.value = ""),
      (password.current.value = ""),
      (cpassword.current.value = "");
  };

  return (
    <div>
      <div className="container-fluid bg-secondary mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: "200px" }}
        >
          <h1 className="font-weight-semi-bold text-uppercase mb-3">
            User Regitration
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <Link to="/">Home</Link>
            </p>
            <p className="m-0 px-2">-</p>
            <Link to="/login" className="m-0">
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-4 ">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">Registration Page</span>
          </h2>
        </div>
        <div className="row px-xl-5 ">
          <div className="col-lg-7 mb-5 mx-auto">
            <div className="contact-form">
              <div id="success"></div>
              <form
                name="sentMessage"
                id="contactForm"
                noValidate="novalidate"
                onSubmit={addUser}
              >
                <div className="control-group">
                  <input
                    ref={uname}
                    type="text"
                    className="form-control"
                    id="uname"
                    placeholder="Your Name"
                    required="required"
                    data-validation-required-message="Please enter your name"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input
                    ref={email}
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
                    ref={phone}
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Your Phone"
                    required="required"
                    data-validation-required-message="Please enter your phone"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input
                    ref={password}
                    type="password"
                    className="form-control"
                    id="pass"
                    placeholder="Your Password"
                    required="required"
                    data-validation-required-message="Please enter your Password"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input
                    ref={cpassword}
                    type="password"
                    className="form-control"
                    id="cpass"
                    placeholder="Your Confirm Password"
                    required="required"
                    data-validation-required-message="Please enter your confirm Password"
                  />
                  <p className="help-block text-danger"></p>
                </div>

                <div>
                  <button
                    className="btn btn-primary py-2 px-4"
                    type="submit"
                    id="sendMessageButton"
                  >
                    Sign Up
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

export default Register;
