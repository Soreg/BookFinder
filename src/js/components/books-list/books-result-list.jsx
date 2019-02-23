import React, { Component } from 'react'
import styled from 'styled-components';

const BooksListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
`;

const Book = styled.div`
    box-sizing: border-box;
    padding: 20px;
    position: relative;
    width: 80%;
    background: #fafafa;
    margin: 20px 0;
    box-shadow: 0px 2px 10px rgba(0,0,0, 0.2);
    margin: 0 auto 70px;
    text-align: center;

    @media (min-width: 650px) {
        width: 45%;
    }

    @media (min-width: 1100px) {
        display: flex;
        padding-bottom: 10px;
    }
`;

const BookTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 20px;

    @media (min-width: 1100px) {
        max-width: calc(100% - 170px);
    }
`;

const BookImageWrapper = styled.div`
    width: 130px;
    height: 215px;
    margin: -50px auto 0;
    margin-bottom: 15px;
    text-align: center;

    @media (min-width: 1100px) {
        margin: -50px 0 0;
    }
`;

const BookImage = styled.img`
    max-width: 100%;
    max-height: 100%;
`;

const BookHeading = styled.h3`
    color: #757277;
    font-weight: bold;
    font-size: 17px;
    margin-bottom: 8px;
`;

const BookDetailsText = styled.p`
    color: #818183;
    margin: 10px 0;

    &:last-of-type {
        margin: 0;
    }
`;

const BookButton = styled.a`
background: #16c08d;
    width: 130px;
    border: none;
    border-radius: 12px;
    height: 37px;
    color: white;
    font-weight: bold;
    margin: 14px auto 0;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    line-height: 35px;

    @media (min-width: 1100px) {
        margin: 14px 0 0;
    }
`;

const EmptyMessage = styled.h2`
    text-align: center;
`;

const BooksResultList = ({books}) => {
    return books ? (
        <BooksListWrapper>
            {
                books.map((book, i) => {
                    const { volumeInfo } = book;
                    const { title, authors, imageLinks, publisher, infoLink } = volumeInfo;
                    return (
                        <Book key={i}>
                            <BookImageWrapper>
                                {
                                    imageLinks && imageLinks.thumbnail ? (
                                        <BookImage src={imageLinks.thumbnail} alt={title} />
                                    ) : null
                                }
                            </BookImageWrapper>
                            <BookTextWrapper>
                                {
                                    title ? (
                                        <BookHeading>{title}</BookHeading>
                                    ) : null
                                }
                                {
                                    authors && authors.length > 0 ? (
                                        <BookDetailsText>By: {authors[0]}</BookDetailsText>
                                    ) : null
                                }
                                {
                                    publisher ? (
                                        <BookDetailsText>Published by: {publisher}</BookDetailsText>
                                    ) : null
                                }
                                {
                                    infoLink ? (
                                        <BookButton href={infoLink} target="_blank">See this book</BookButton>
                                    ) : null
                                }
                            </BookTextWrapper>
                        </Book>
                    )
                })
            }
        </BooksListWrapper>
    ) : (
        <EmptyMessage>Search for books to get started</EmptyMessage>
    )
}

export default BooksResultList