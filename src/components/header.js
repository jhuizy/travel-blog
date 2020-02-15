import { Link, useStaticQuery, graphql, withPrefix } from "gatsby"
import { navigate } from "@reach/router"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { scrollToRef } from "../utils/scroll"

import styled from "styled-components"
import tw from "tailwind.macro"

const MobileMenuItem = styled(Link)`
  ${tw`hover:bg-teal-400 hover:text-black p-3 flex justify-around items-center text-sm`}
`

const MenuItem = styled(Link)`
  ${tw`flex-1 text-bold px-3 hover:bg-teal-400 hover:text-black flex items-center justify-around text-sm`}
`

const createClickHandler = (ref, id) => (e) => {
  navigate(`/#${id}`)
}

const HeaderLink = styled(Link)`
  ${tw`hover:text-white`}
`

export default ({ siteTitle }) => {

  const [isOpen, setOpen] = useState(false)

  return (
    <div className="flex flex-col bg-black text-white text-bold z-0">
      <div className="flex flex-row justify-around px-2 z-0">
        <div className="lg:w-3/5 lg:text-xl text-lg p-2 my-2 lg:mx-6">
          <HeaderLink to="/"><h1>{siteTitle}</h1></HeaderLink>
        </div>

        <div className="flex flex-row flex-1 lg:flex-0 justify-end lg:w-2/5">
          <button className="block lg:hidden hover:text-black hover:bg-teal-400 px-2 my-2 rounded-sm" onClick={e => setOpen(!isOpen)}>
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
          </button>
          <div className="flex-grow flex-row hidden lg:flex">
            <MenuItem to="/"><h6>Home</h6></MenuItem>
            <MenuItem to="#posts"><h6>Posts</h6></MenuItem>
            <MenuItem to="#instagram"><h6>Instagram</h6></MenuItem>
            <MenuItem to="#subscribe"><h6>Subscribe</h6></MenuItem>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={`flex flex-col items-stretch block lg:hidden bg-gray-900`}>
          <MobileMenuItem to="/"><h6>Home</h6></MobileMenuItem>
          <MobileMenuItem to="#posts"><h6>Posts</h6></MobileMenuItem>
          <MobileMenuItem to="#instagram"><h6>Instagram</h6></MobileMenuItem>
          <MobileMenuItem to="#subscribe"><h6>Subscribe</h6></MobileMenuItem>
        </div>
      )}
    </div>
  )
}
