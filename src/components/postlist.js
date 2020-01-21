import React from 'react';
import { navigate } from "gatsby"
import Img from "gatsby-image"
import Button from './button'
import styled from "styled-components"
import tw from "tailwind.macro"

const PostPreview = ({ i, category, title, excerpt, image, slug }) =>
  <div className="flex justify-around items-center min-h-screen">
    <div className={`${i % 2 != 0 ? "flex-row-reverse" : "flex-row" } flex flex-wrap w-full lg:w-8/12`}>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start p-4">
        <h4 className="my-1 text-xs border-b border-teal-400 uppercase tracking-widest font-sans">{category}</h4>
        <h2 className="my-2 text-3xl">{title}</h2>
        <div className="my-3">{excerpt}</div>
        <Button className="my-3 self-start" onClick={e => navigate(slug)}>Read More</Button>
      </div>

      <div className="w-full lg:w-1/2">
        <Img className="m-10 shadow-xl hover:shadow-2xl hover:m-8  transition-all transition-200" fluid={image} />
      </div>
    </div>
  </div>

export default ({posts}) => 
  <div>
    {posts.map((post, i) => <PostPreview i={i} {...post} />)}
  </div>