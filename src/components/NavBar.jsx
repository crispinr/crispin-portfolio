import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdOutlineContacts } from "react-icons/md";
import { BsNewspaper } from "react-icons/bs";

export default function NavBar() {
  return (
    <>
      <section
        id="navBar"
        className="d-flex justify-content-center fixed-top align-items-center"
      >
        <div className="w-75 d-flex justify-content-around align-items-center custom-nav-md">
          <div className="d-none d-md-flex justify-content-between align-items-center">
            <a href="#about" className="text-decoration-none cyan-txt">
              <h6>About</h6>
            </a>
            <a href="#projects" className="text-decoration-none cyan-txt">
              <h6 className="ms-5">Projects</h6>
            </a>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <a href="#hero" className="text-decoration-none cyan-txt">
              <h3>Crispin R</h3>
            </a>
          </div>
          <div className="d-none d-md-flex justify-content-between align-items-center">
            <a href="#contact" className="text-decoration-none cyan-txt">
              <h6 className="me-5">Contact</h6>
            </a>
            <a href="#resume" className="text-decoration-none cyan-txt">
              <h6>Resume</h6>
            </a>
          </div>
        </div>
      </section>
      <section
        id="navBarMobile"
        className="d-md-none d-flex justify-content-center fixed-bottom align-items-center"
      >
        <div className="w-75 d-flex justify-content-around align-items-center custom-nav">
          <a href="#about" className="h6 text-decoration-none cyan-txt">
            <AiOutlineInfoCircle />
          </a>
          <a href="#projects" className="h6 text-decoration-none cyan-txt">
            <HiOutlineLightBulb />
          </a>
          <a href="#contact" className="h6 text-decoration-none cyan-txt">
            <MdOutlineContacts />
          </a>
          <a href="#resume" className="h6 text-decoration-none cyan-txt">
            <BsNewspaper />
          </a>
        </div>
      </section>
    </>
  );
}
