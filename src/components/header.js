import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"
import tw from "tailwind.macro"

const Nav = styled.div`
  ${tw`bg-white-400 px-2 mx-auto flex justify-between items-center`}
`

const NavContainer = styled.header`
  ${tw`flex-row items-center`}  
`

const NavHeading = styled.h1`
  ${tw`text-black text-bold sm:text-3xl text-2xl font-display p-2`}
`

const Menu = styled.div`
  ${tw`bg-blue-500 py-2 px-2 flex-row justify-around items-center`}
`

const MenuItem = styled.a`
  ${tw`block text-black hover:bg-blue-800 hover:text-blue-200 mx-2 py-1 px-2 rounded`}
`

const NavOptions = styled.div`
 ${tw``};
`

export default ({ siteTitle }) => (
  <NavContainer>
    <Nav>
      <NavHeading>
        {siteTitle}
      </NavHeading>

      <NavOptions>

      </NavOptions>
    </Nav>
{/* 
    <Menu>
      <MenuItem href="#"><bold>Home</bold></MenuItem>
      <MenuItem href="#"><bold>Posts</bold></MenuItem>
      <MenuItem href="#"><bold>Contact</bold></MenuItem>
    </Menu> */}
  </NavContainer>
)
