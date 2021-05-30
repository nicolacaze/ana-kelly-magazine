import React from "react"
import styled from "styled-components"

const BackDrop = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`

export default ({ closeSideDrawer }) => <BackDrop onClick={closeSideDrawer} />
