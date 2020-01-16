import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"
import tw from "tailwind.macro"


const NavContainer = styled.header`
  ${tw`flex flex-col p-1`}  
`

const Nav = styled.div`
  ${tw`bg-white-400 flex flex-1 flex-row justify-between px-2`}
`

const NavHeading = styled.h1`
  ${tw`text-black text-bold lg:text-3xl text-2xl p-2 my-2`}
`

const Menu = styled.div`
  ${tw`bg-blue-500 py-2 px-2 flex-row justify-around items-center`}
`

const MenuItem = styled.a`
  ${tw`block text-black hover:bg-blue-800 hover:text-blue-200 mx-2 py-1 px-2 rounded`}
`

const MenuButton = styled.button`
  ${tw`text-black hover:text-white hover:bg-black p-2 rounded`}
`

const NavOptions = styled.div`
 ${tw`flex flex-row items-center`};
`

export default ({ siteTitle }) => (
  <NavContainer>
    <Nav>
      <NavHeading>
        {siteTitle}
      </NavHeading>

      <NavOptions>
        <MenuButton>
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path class="heroicon-ui" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
          </svg>
        </MenuButton>
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
