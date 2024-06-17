import styled from "styled-components"

export const StyledTech = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 28%;
    /* border: 1px solid white; */
    border-radius: 8px;
    padding: 5px 7px 5px 7px;;
    height: 35px;
    margin: 6px;
    font-size: 17px;
    font-weight: bold;
    /* background-color: #FFC307;
    background-color: #EE9B00;
    background-color: #0A9396;
    background-color: black; */
    color: white;
    background-color: #00000089;
    

    img {
        width: 30px;
        /* background-color: black; */
        padding: 3px;
        /* height: 3vw; */
    }

    @media screen and (max-width: 1024px) {
        /* width: 48%; */
    } 

    @media screen and (max-width: 630px) {
        width: 98%;
    }  
`