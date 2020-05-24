import React from 'react';
import {graphql} from 'gatsby'
import Layout from './layout';
import Image from 'gatsby-image'

export const query = graphql`
    query($slug: String!){
        allDatoCmsRoom(filter: {slug: {eq: $slug}}){
        nodes{
        title
        content
        image{
            fluid(maxWidth:1200){
            ...GatsbyDatoCmsFluid
            }
        }
        }
    }
    }

`;

const RoomsTemplate = ({data: {allDatoCmsRoom:{nodes}}}) => {
    const {title,content,image} = nodes[0];
    return (
        <div>
            <Layout>
                <h1>{title}</h1>
                <p>{content}</p>
                <Image
                    fluid={image.fluid}
                >

                </Image>
            </Layout>
        </div>
    );
};

export default RoomsTemplate;