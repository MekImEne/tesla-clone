import React, { useState } from "react";
import styled from "styled-components";
//import CloseIcon from "@material-ui/icons/Close";

const menuItems = [
  { title: "Existing Inventory", href: "/" },
  { title: "Used Inventory", href: "/" },
  { title: "Trade-in", href: "/" },
  { title: "Test Drive", href: "/" },
  { title: "Cybertruck", href: "/" },
  { title: "Roadster", href: "/" },
  { title: "Semi", href: "/" },
  { title: "Charging", href: "/" },
  { title: "Powerwall", href: "/" },
  { title: "Commercial Energy", href: "/" },
  { title: "Utilities", href: "/" },
  { title: "Find Us", href: "/" },
  { title: "Support", href: "/" },
  { title: "Investor Relations", href: "/" },
];

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
      <a href="/">
        <img src="/images/logo.svg" alt="TESLA" />
      </a>
      <Menu>
        <a href="/">Model S</a>
        <a href="/">Model X</a>
        <a href="/">Model 3</a>
        <a href="/">Model Y</a>
        <a href="/">Solar Panel</a>
        <a href="/">Solar Roof</a>
      </Menu>

      <RightMenu>
        <a href="/">Shop</a>
        <a href="/">Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)}>Menu</CustomMenu>
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          {/* <CustomClose /> */}
          <p onClick={() => setBurgerStatus(false)}>X</p>
        </CloseWrapper>

        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.href}> {item.title} </a>
          </li>
        ))}
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a {
    font-weight: 600;
    ${"" /* text-transform: uppercase; */}
    padding: 0 20px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    ${"" /* text-transform: uppercase; */}
    margin-right: 30px;
  }
`;

const CustomMenu = styled.a`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.5s;

  li {
    padding: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    a {
      font-weight: 600;
    }
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  p {
    cursor: pointer;
  }
`;

// const CustomClose = styled(CloseIcon)``;
