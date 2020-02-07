import React from 'react'
import styled from 'styled-components'

export default () => {
  
  const MenuContainer = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `

  const MenuItem = styled.li`
    list-style: none;
    justify-self: center;
  `

  return (
    <MenuContainer>
      <MenuItem>Créateurs</MenuItem>
      <MenuItem>Rencontres</MenuItem>
      <MenuItem>Conseils</MenuItem>
      <MenuItem>À propos</MenuItem>
    </MenuContainer>
  )
}

