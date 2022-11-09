import React from "react";

import MobileMenu from "../Components/MobileMenu";

import "../CSS/Header.css";
import logo from "../Img/Logo.PNG";
import person from "../Img/Person.png";

const Header = () => {
  return (
    <>
      <div className="fluid-container headerBody">
        {/* 1st row  */}

        <div className="row py-2 border-bottom row1st m-0  ">
          <div className="col-4">
            <div className="row mt-2">
              <div className="col-2  d-flex justify-content-end align-items-center">
                <i class="   fa-solid fa-bars"> </i>
              </div>
              <div className="col-10 Logo">
                <img src={logo} alt="" />
              </div>
            </div>
          </div>

          <div className="col-4 py-3 ">
            <div className="row inputFieldParent  ">
              <div className="col-11 inputField d-flex justify-content-center align-items-center">
                <input type="text" className="" placeholder="Search Videos" />
              </div>
              <div className="col-1">
                <i class="fa fa-search " aria-hidden="true"></i>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-2"></div>

              <div className="col-1">
                <i class="fa-solid fa-message Hi"></i>
              </div>

              <div className="col-1">
                <i class="fas fa-bell Hi"></i>
              </div>

              <div className="col-2 personImg">
                <img src={person} alt="" />
              </div>
              <div className="col-1">
                <i class="fa fa-angle-down Hi" aria-hidden="true"></i>
              </div>
              <div className="col-4  d-flex align-items-center justify-content-center">
                <button className="bttnUpload">Upload</button>
              </div>
              <div className="col-1"></div>
            </div>
          </div>
        </div>

        {/* 2nd row  */}

        <div className="row mt-4 mb-2 row2nd">
          <div className="col-9">
            <div className="row">
              <div className="col-1"></div>
              <div className="col-8">
                <div className="row BorderBottm">
                  <div className="col-2">
                    <p className="Hp">PopularVideo</p>
                  </div>
                  <div className="col-2">
                    <p className="Hp ">Categories</p>
                  </div>
                  <div className="col-2">
                    <p className="Hp">Channels</p>
                  </div>
                  <div className="col-2">
                    <p className="Hp">Trending</p>
                  </div>
                  <div className="col-2">
                    <p className="Hp">Movies</p>
                  </div>
                  <div className="col-2">
                    <p className="Hp">Go to:</p>
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className="row">
                  <div className="col-2 hi ">
                    <i class="fa-regular fa-heart Hi"></i>
                  </div>
                  <div className="col-2 hi">
                    <i class="fa-regular fa-clock Hi"></i>
                  </div>
                  <div className="col-2 hi ">
                    <i class="	fa fa-play-circle-o Hi"></i>
                  </div>
                  <div className="col-2 hi">
                    <i class="fa fa-pinterest-p Hi" aria-hidden="true"></i>
                  </div>
                  <div className="col-2 hi ">
                    <i class="fa fa-hourglass Hi" aria-hidden="true"></i>
                  </div>
                  <div className="col-2 hi"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3"></div>
        </div>

        {/* mobile menu  */}

        <MobileMenu />
      </div>
    </>
  );
};

export default Header;
