import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import styled from "styled-components"
import tw from "tailwind.macro"


const NavContainer = styled.header`
  ${tw`flex flex-col p-1`}  
`

const Nav = styled.div`
  ${tw`bg-white-400 flex flex-1 flex-row justify-between px-2`}
`

const MenuItem = styled.a`
  ${tw`flex-1 hover:bg-black hover:text-white px-2 rounded`}
`

const MenuButton = styled.button`
  ${tw`sm:invisible text-black hover:text-white hover:bg-black p-2 rounded`}
`

const NavOptions = styled.div`
 ${tw`flex flex-row items-center`};
`

export default ({ siteTitle }) => {

  const [isOpen, setOpen] = useState(false)

  return (
    <NavContainer>
      <Nav>
        <h1 className="text-black text-bold lg:text-xl text-lg p-2 my-2">
          {siteTitle}
        </h1>

        <NavOptions>
          <MenuButton onClick={e => setOpen(!isOpen)}>
            {!isOpen &&
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path class="heroicon-ui" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              </svg>
            }
            {isOpen &&
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path class="heroicon-ui" d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z" />
              </svg>
            }
          </MenuButton>

          <div className="flex flex-col flex-row hidden sm:block">
            <MenuItem href="#">Home</MenuItem>
            <MenuItem href="#">Posts</MenuItem>
            <MenuItem href="#">Contact</MenuItem>
          </div>
        </NavOptions>
      </Nav>

      {isOpen && (
        <div className="flex flex-col items-center block sm:hidden">
          <MenuItem href="#">Home</MenuItem>
          <MenuItem href="#">Posts</MenuItem>
          <MenuItem href="#">Contact</MenuItem>
        </div>
      )}
    </NavContainer>
  )
}
