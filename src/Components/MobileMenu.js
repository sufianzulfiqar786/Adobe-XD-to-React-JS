import React, { useState } from "react";
import { Link } from "react-scroll";

import "../CSS/MobileMenu.css";

import logo from "../Img/Logo.PNG";
import person from "../Img/Person.png";

const MobileMenu = () => {
  const [MobileMenu1, setMobileMenu1] = useState(true);

  return (
    <>
      <div className="fluid-container">
        <div className="row MobileMenuHeader m-0 p-0">
          <div className="col-3  m-0 p-0">
            {MobileMenu1 ? (
              <i
                class="MobileMenu1Icon  ml-2 mt-2  fa-solid fa-bars"
                onClick={() => setMobileMenu1(!MobileMenu1)}
              ></i>
            ) : (
              <i
                class=" MobileMenu1Icon  ml-2 mt-2 fa fa-times"
                aria-hidden="true"
                onClick={() => setMobileMenu1(!MobileMenu1)}
              ></i>
            )}
          </div>

<div className="col-6 ">
    <div className="row  py-3">
       <div className="col-2 d-flex justify-content-end align-items-center">  <i class="fa-regular fa-heart Him"></i>  </div>
       <div className="col-2 d-flex justify-content-end align-items-center">  <i class="fa-regular fa-clock Him"></i>  </div>
       <div className="col-2 d-flex justify-content-end align-items-center">  <i class="fa fa-play-circle-o Him"></i>  </div>
       <div className="col-2 d-flex justify-content-end align-items-center">  <i class="fa fa-pinterest-p"></i>  </div>
       <div className="col-2 d-flex justify-content-end align-items-center">  <i class="fa-solid fa-message Him"></i>  </div>
       <div className="col-2 d-flex justify-content-end align-items-center">  <i class="fas fa-bell Him"></i>  </div>
    </div>
</div>

          <div className="col-3 LogoMobileMenu pr-1 d-flex justify-content-end align-items-center m-0 p-0">
            <img src={logo} alt="" />
          </div>

          <div
            className={
              MobileMenu1
                ? " notheight1 notheight2"
                : "notheight1 mobile-screen"
            }
            onClick={() => setMobileMenu1(!MobileMenu1)}
          >
            <div
              className={
                MobileMenu1
                  ? " notheight "
                  : "notheight  InnerClassMobileScreen headerMobileSideBar "
              } >


              <i
                class=" MobileMenu1Icon  ml-2 mt-2 fa fa-times"
                aria-hidden="true"
                onClick={() => setMobileMenu1(!MobileMenu1)}
              ></i>

<div className="row">
    <div className="col-12 d-flex align-items-center justify-content-center">
    <img src={person} alt="" className="mobileMenuPerson mt-1  " />

    </div>
    <div className="col-12 d-flex align-items-center justify-content-center">
<button className="mobileMenuUpload mt-2" >Upload</button>

    </div>
</div>

              <Link
                className="d-flex justify-content-center text-light"
                onClick={() => setMobileMenu1(!MobileMenu1)} >
                Home
              </Link>

              <Link
                className="d-flex justify-content-center text-light" >
                About
              </Link>

              <Link
                className="d-flex justify-content-center text-light" >
                Education
              </Link>

              <Link className="d-flex justify-content-center text-light">
                Portfolio
              </Link>

              <Link className="d-flex justify-content-center text-light">
                Contact
              </Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
