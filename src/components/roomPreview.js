import React from 'react';
import Image from 'gatsby-image';
import {css} from '@emotion/core';
import styled from '@emotion/styled';
import {Link } from 'gatsby';

const Button = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgba(44,62,80,.85);
    width: 100%;
    color: white;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
`

const RoomPreview = ({room}) => {

    const {content, image,title,slug} = room

    return (
        <div
            css={css`
                border: solid 1px #e1e1e1;
                margin-bottom: 1rem;
            `}
        >
            <Image
                fluid={image.fluid}
            />

            <div
                css={css`
                    padding: 3rem;
                `}
            >
                <h3
                    css={css`
                        font-size: 3rem;
                    `}
                >{title}</h3>
                <p>{content}</p>
                <Button to={slug}>See room</Button>
            </div>
        </div>
    );
};

export default RoomPreview;