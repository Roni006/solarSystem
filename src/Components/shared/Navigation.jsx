import React from "react";
import Container from "../Common/Container";
import Logo from "../Common/Logo";
import NavMenu from "../Common/NavMenu";
import Hamburger from "../Common/Hamburger";

const Navigation = () => {
  return (
    <>
      <nav className="bg-black">
        <Container>
          <div className="flex items-center justify-between py-7.5">
            <Hamburger />
            <NavMenu />
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navigation;
