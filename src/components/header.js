import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import styled from "styled-components"
import tw from "tailwind.macro"

const MenuItem = styled.a`
  ${tw`hover:bg-black hover:text-white rounded p-2 flex justify-around items-center`}
`

export default ({ siteTitle }) => {

  const [isOpen, setOpen] = useState(false)

  return (
    <div className="flex flex-col p-1">
      <div className="bg-white-400 flex flex-1 flex-row justify-around px-2">
        <h1 className="text-black text-bold lg:text-xl text-lg p-2 my-2">
          {siteTitle}
        </h1>

        <div className="flex-grow"></div>

        <div className="flex flex-row items-stretch justify-end sm:justify-around">
          <button className="self-center sm:hidden text-black hover:text-white hover:bg-black p-2 rounded" onClick={e => setOpen(!isOpen)}>
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
          <div className="sm:flex flex-grow flex-row hidden justify-around items-stretch">
            <a className="rounded px-3 flex-grow hover:bg-black hover:text-white flex items-center justify-around" href="#">Home</a>
            <a className="rounded px-3 flex-grow hover:bg-black hover:text-white flex items-center justify-around" href="#">Posts</a>
            <a className="rounded px-3 flex-grow hover:bg-black hover:text-white flex items-center justify-around" href="#">Content</a>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col items-stretch block sm:hidden">
          <MenuItem href="#">Home</MenuItem>
          <MenuItem href="#">Posts</MenuItem>
          <MenuItem href="#">Contact</MenuItem>
        </div>
      )}
    </div>
  )
}
