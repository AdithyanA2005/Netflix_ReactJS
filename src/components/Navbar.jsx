import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styledComponents from "styled-components";

function Navbar() {
  const [show, setShow] = useState(false);
  const transitionNavbar = () => setShow(window.scrollY > 100 ? true : false);

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <NavWrap bgShow={show}>
      <Link to="/">
        <Logo
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="Logo"
        />
      </Link>
      <Avatar
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      ></Avatar>
    </NavWrap>
  );
}

export default Navbar;

const NavWrap = styledComponents.div`
  background-color: ${(props) => props.bgShow && "#111"};
  display: flex;
  height: 70px;
  justify-content: space-between;
  padding: 20px;
  position: fixed;
  top: 0;
  transition: all 0.5s ease-in;
  width: 100%;
  z-index: 1;
`;
const Logo = styledComponents.img`
  height: 100%;
  padding: 4px;
  width: 100%;
`;
const Avatar = styledComponents.img`
  cursor: pointer;
  position: fixed;
  right: 20px;
  width: 30px;
`;
