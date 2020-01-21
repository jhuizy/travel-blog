import React from 'react';

import Header from "./header"

export default ({ slug, date, title, markup }) => 
  <div>
    <Header siteTitle="Two Travelling Aussies" />

    <h1>{title}</h1>
    <h5>{date}</h5> 

    <div dangerouslySetInnerHTML={markup}></div>
  </div>