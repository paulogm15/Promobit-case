import { styled } from "styled-components";

export const MainHeaderDiv = styled.div`
    background-color: #2D0C5E;
    color: #FFFFFF;
    text-align: center;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
`

export const Logo = styled.div`
    background-color: #5C16C5;
    text-align: left;
    height: 50%;
    img {
        margin: 10px 76px;
        cursor: pointer;
    }
`

export const HeaderTitle = styled.div`
    color: #FFF;
    text-align: center;
    font-family: Roboto;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 56px;
    letter-spacing: -0.24px;
    padding: 40px 100px;
    display: flex;
    cursor: default;
`

export const Filter = styled.div`
    text-align: center;
    cursor: default;
    button{
        cursor: pointer;
    }
`

export const MovieList = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 30px;
    margin: 15px 50px 20px 50px;
`