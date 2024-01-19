import React from "react";

export default function Test() {
  return (
    <div className="container mb-5">
      <div className="row justify-content-center">
        <div className="container col-lg-8 text-center">
          <h3 className="pb-1 mb-0 text-center">Practice</h3>{" "}
          <div className="d-flex flex-column mb-4">
            <div className="p-3 mt-4 mb-5 border-2 bg-opacity-10 border border-start-0 border-end-0 ">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column">
                  <div className="me-auto p-2">
                    <strong>Cypress Exercices</strong>
                  </div>
                  <p className="text-start p-2">
                    Login page executes positive and negative login test cases.
                  </p>
                </div>
                <div className="d-flex align-items-center p-2">Github</div>
              </div>
            </div>
            <div className="p-3 mt-4 mb-5 border-2 bg-opacity-10 border border-start-0 border-end-0 ">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column">
                  <div className="me-auto p-2">
                    <strong>Selenium Exercices</strong>
                  </div>
                  <p className="text-start p-2">
                    Login page executes positive and negative login test cases.
                  </p>
                </div>
                <div className="d-flex align-items-center p-2">Github</div>
              </div>
            </div>
            <div className="p-3 mt-4 mb-5 border-2 bg-opacity-10 border border-start-0 border-end-0 ">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column">
                  <div className="me-auto p-2">
                    <strong>Playwright Exercices</strong>
                  </div>
                  <p className="text-start p-2">
                    Login page executes positive and negative login test cases.
                  </p>
                </div>
                <div className="d-flex align-items-center p-2">Github</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
