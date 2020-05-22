import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import {css} from '@emotion/core'

const StartText = styled.div`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

    @media(min-width: 768px){
      display: grid;
      grid-template-columns: 2fr 1fr;
      column-gap: 100px;

    }
    p{
      line-height: 2;
    }
`
  

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
            <h2 css={css`text-align: center;font-size: 4rem;margin-top: 4rem;`}>{title}</h2>
            <StartText>
              <p>{content}</p>
              <Image fluid={image.fluid} alt=""/>
            </StartText>
            
        </>
      );
}
 
export default StartContent;