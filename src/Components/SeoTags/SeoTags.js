import React from 'react';
import { Helmet } from 'react-helmet';

const SeoTags = ({title,description ,img}) => {
  return (
    <Helmet>
    <title>{title}</title>
    <meta name="description" content={description}/>
  
    {/* <meta property="og:URL" content="https://www.demo.yatharup.com/blog/Travel/amazing-fact-of-it/" /> */}
  
  <meta property="og:type" content="article" />
      
  <meta property="og:title" content={title} />
      
  <meta property="og:description" content={description} />
  
  <meta property="og:image" content={img} />
  <meta name="twitter:card" content={img}/>
  {/* {children} */}
  </Helmet>
  )
}

export default SeoTags