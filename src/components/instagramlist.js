import React from 'react';
import styled from "styled-components"
import Img from "gatsby-image"

const Post = ({ image, likes, comments, id }) =>
    <a target="_blank" href={`https://instagram.com/p/${id}`} className="block group overflow-hidden h-full relative z-0 w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="m-4 overflow-hidden relative">
        <Img fluid={image} />
        <div className="absolute bg-black opacity-0 inset-0 z-0 w-full h-full group-hover:opacity-25 transition-all transition-200 transition-ease" />
        <div className="absolute opacity-0 text-white inset-0 z-10 w-full h-full flex flex-col justify-center items-center group-hover:opacity-100 transition-all transition-200 transition-ease">
          <div className="flex flex-row items-center justify-center">
            <svg className="mx-1 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z" /></svg>
            <text className="mx-1 text-lg text-bold">{likes || " 0"}</text>
          </div>
          <div className="flex flex-row items-center justify-center">
            <svg className="mx-1 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M2 15V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v15a1 1 0 0 1-1.7.7L16.58 17H4a2 2 0 0 1-2-2zM20 5H4v10h13a1 1 0 0 1 .7.3l2.3 2.29V5z" /></svg>
            <text className="mx-1 text-lg text-bold">{" " + (comments || 0)}</text>
          </div>
        </div>
      </div>
      </a>

export default ({ posts }) =>
  <div className="p-2 flex flex-col items-center justify-around w-full">
    <hr />
    <h1 className="text-lg sm:text-xl lg:text-3xl">Instagram <a href="https://instagram.com/twotravellingaussies/">@twotravellingaussies</a></h1>
    <div className="flex flex-row flex-wrap w-full justify-around items-center">
      {posts.map(post => <Post {...post} />)}
    </div>
  </div>
