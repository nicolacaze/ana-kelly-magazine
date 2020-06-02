import React from "react"
import styled from "styled-components"
import Menu from "./menu"
import DrawerToggleButton from "./drawerToggleButton"

const SideDrawerContainer = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 70%;
  max-width: 300px;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  transform: translateX(${props => (props.animate ? "0" : "-100%")});
  transition: transform 0.3s ease-out;
`

const SideDrawer = ({ show, toggleSideDrawer }) => (
  <SideDrawerContainer animate={show}>
    <DrawerToggleButton
      toggleSideDrawer={toggleSideDrawer}
      crossVersion={true}
    />
    <Menu isVertical={true} />
  </SideDrawerContainer>
)

export default SideDrawer
