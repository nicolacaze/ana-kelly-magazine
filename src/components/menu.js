import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'


const MenuContainer = styled.ul`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
padding: 0;
height: 3rem;
margin-bottom: 4rem;
`

const MenuItem = styled.li`
list-style: none;
justify-self: center;
font-size: 1.2rem;
padding: 1rem 0.5rem;
a {
  text-decoration: none;
  color: #000;
}
&:hover {
  border-bottom: 1px solid #000;
}
`

export default () => {
  
  return (
    <MenuContainer>
      <MenuItem>
        <Link to='/designers'>
          Créateurs
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to='/encounters'>
          Rencontres
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to='/advice'>
          Conseils
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to='/about'>
          À propos
        </Link>
      </MenuItem>
    </MenuContainer>
  )
}

