import React from 'react'
import styled from 'styled-components'


const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-self: flex-end;
  height: 30px;
  width: 26px;
  background: transparent;
  border: none;
  margin: 1rem;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
  div {
    position: relative;
    width: 30px;
    height: 2px;
    background: #000;
    ${({ transform }) => {
      if(transform) {
        return `
        &:nth-of-type(1) {
          display: none;
        }
        &:nth-of-type(2) {
          transform: rotate(45deg);
        }
        &:nth-of-type(3) {
          transform: rotate(-45deg);
          top: -15px;
        }`
      }
    }}
  }
`

const drawerToggleButton = ({ toggleSideDrawer, crossVersion }) => {
  return (
    <Button transform={crossVersion} onClick={toggleSideDrawer} >
      <div />
      <div />
      <div />
    </Button>
  )
}

export default drawerToggleButton
