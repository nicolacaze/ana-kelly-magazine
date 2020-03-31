import React from 'react'
import styled from 'styled-components'


const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 30px;
  width: 26px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`

const Line = styled.div`
  width: 30px;
  height: 2px;
  background: #000;
`

const drawerToggleButton = () => {
  return (
    <Button>
      <Line></Line>
      <Line></Line>
      <Line></Line>
    </Button>
  )
}

export default drawerToggleButton
