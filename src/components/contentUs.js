import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const ContentUs = () => {
    const results = useStaticQuery(graphql`
    query{
        allDatoCmsPage(filter: {slug: {eq: "us"}}) {
          nodes {
            title
            content
            image {
              fluid( maxWidth: 1200) {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
      
    `)

    const {title,content,image} = results.allDatoCmsPage.nodes[0];
    return ( 

        <>
            <h2>{title}</h2>
            <div>
                <p>{content}</p>
                <Image fluid={image.fluid} ></Image>
            </div>
        </>
     );
}
 
export default ContentUs;