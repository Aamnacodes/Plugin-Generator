import React from "react";
import { useFormik } from "formik";

import Swal from "sweetalert2";
const NewsLetter = ({ownerId}) => {
  const newsLetterForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      owner: ownerId
    },
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      // values.avatar = selImg;

      console.log(values);
      setSubmitting(true);

      const res = await fetch("http://localhost:5000/subscriber/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.status);
      setSubmitting(false);

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "WellDone!",
          text: "Subscribed Successfully 😎",
        });
        // navigate("/login");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong",
        });
      }

      // write code to submit form to server
    },
  });
  return (
    <div>
      <>
        {/* Section: Design Block */}
        <section className="background-radial-gradient overflow-hidden">
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n    .background-radial-gradient {\n      background-color: hsl(218, 41%, 15%);\n      background-image: radial-gradient(650px circle at 0% 0%,\n          hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%),\n        radial-gradient(1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%);\n    }\n\n    #radius-shape-1 {\n      height: 220px;\n      width: 220px;\n      top: -60px;\n      left: -130px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    #radius-shape-2 {\n      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n      bottom: -60px;\n      right: -110px;\n      width: 300px;\n      height: 300px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    .bg-glass {\n      background-color: hsla(0, 0%, 100%, 0.9) !important;\n      backdrop-filter: saturate(200%) blur(25px);\n    }\n  ",
            }}
          />
          <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
            <div className="row gx-lg-5 align-items-center mb-5">
              <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
                <h1
                  className="my-5 display-5 fw-bold ls-tight"
                  style={{ color: "hsl(218, 81%, 95%)" }}
                >
                  The best offer <br />
                  <span style={{ color: "hsl(218, 81%, 75%)" }}>
                    for your business
                  </span>
                </h1>
                <p
                  className="mb-4 opacity-70"
                  style={{ color: "hsl(218, 81%, 85%)" }}
                >
                  Never miss an update Again !
                </p>
              </div>
              <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                <div
                  id="radius-shape-1"
                  className="position-absolute rounded-circle shadow-5-strong"
                />
                <div
                  id="radius-shape-2"
                  className="position-absolute shadow-5-strong"
                />
                <div className="card bg-glass">
                  <div className="card-body px-4 py-5 px-md-5">
                    <form onSubmit={newsLetterForm.handleSubmit}>
                      {/* 2 column grid layout with text inputs for the first and last names */}
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <label className="form-label" htmlFor="">
                              Name
                            </label>
                            <span
                              style={{
                                color: "red",
                                fontSize: "0.7em",
                                marginLeft: 10,
                              }}
                            >
                              {newsLetterForm.touched.name &&
                                newsLetterForm.errors.name}
                            </span>
                            <input
                              type="text"
                              id="name"
                              className="form-control"
                              onChange={newsLetterForm.handleChange}
                              value={newsLetterForm.values.name}
                            />
                          </div>
                        </div>
                      </div>
                      {/* Email input */}
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="">
                          Email address
                        </label>

                        <span
                          style={{
                            color: "red",
                            fontSize: "0.7em",
                            marginLeft: 10,
                          }}
                        >
                          {newsLetterForm.touched.email &&
                            newsLetterForm.errors.email}
                        </span>
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          onChange={newsLetterForm.handleChange}
                          value={newsLetterForm.values.email}
                        />
                      </div>

                      {/* Checkbox */}
                      <div className="form-check d-flex justify-content-center mb-4">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue=""
                          id="form2Example33"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example33"
                        >
                          Subscribe to our newsLetterForm
                        </label>
                      </div>
                      {/* Submit button */}
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mb-4 w-100"
                      >
                        Subscribe
                      </button>
                      {/* Register buttons */}
                      {/* <div className="text-center">
                        <p>or sign up with:</p>
                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <i className="fab fa-facebook-f" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <i className="fab fa-google" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <i className="fab fa-twitter" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <i className="fab fa-github" />
                        </button>
                      </div> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section: Design Block */}
      </>
    </div>
  );
};
export default NewsLetter;
