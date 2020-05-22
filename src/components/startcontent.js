import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const StartContent = () => {

    const info = useStaticQuery(graphql`
    query{
        allDatoCmsPage(filter: {slug: {eq: "start"}}){
          nodes{
            title
            content
            image{
              fluid{
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
    `)

    // console.log(info.allDatoCmsPage.nodes[0])

    const {title,content,image} = info.allDatoCmsPage.nodes[0];

    return (
        <>
            <h2>{title}</h2>
            <div>
              <p>{content}</p>
            </div>
            <img src={image.fluid.src} alt=""/>
        </>
      );
}
 
export default StartContent;