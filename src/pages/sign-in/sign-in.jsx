import React from "react";
const SignIn = () => {
  return (
    <>
      <div className=" mb-1 bg-light-slate text-center justify-content-around ">
        <span
          className=" display-1 mb-2 fw-bold "
          style={{
            color: "#6322a5",
            backgroundColor: "#f4eafd",
            height: "40vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          E N I B L A
        </span>
      </div>
      <div>
        <div className=" form-group text-center mb-3 row  justify-content-center ">
          <label className="form-label " for="Email">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="form-control  w-25"
            placeholder="email"
          />
        </div>

        <div className=" text-center row mb-3 d-flex justify-content-center ">
          <label className="form-label " for="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="  text-slate form-control me-2 w-25  "
            placeholder="password"
          />
        </div>
        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="checkbox"
                checked
              />
              <label className="form-check-label" for="checkout">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>
        </div>
        <div className=" text-center">
          <button type="button" className="btn  btn-slate mb-4 w-25">
            Sign in
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "40vh",
        }}
      >
        <p>Copyright &copy; 2022 ENIBLA. All rights reserved. </p>
      </div>
    </>
  );
};

export default SignIn;
