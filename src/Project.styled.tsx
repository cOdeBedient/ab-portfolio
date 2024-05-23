import styled from "styled-components"

export const StyledProject = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid pink;
    width: 44%;
    border-radius: 8px;
    padding: 10px;
    margin: 6px;
    height: 170px;
    background-color: black;

    .no-tagline-container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;  
        font-size: 17px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    .project-details {
        display: flex;
        flex-direction: column;
        width: 60%;


    }

    .deployed-repo {
        display: flex;
        align-items: center;
        font-size: 15px;
    }

    .line {
        margin-right: 5px;
        margin-left: 5px;
    }

    p {
        margin-bottom: 0;
        margin-top: 0;
        text-align: center;
        font-weight: 500;
    }

    h4 {
        margin-bottom: 0;
        margin-top: 0;
    }

    a {
        color: white !important;
        text-decoration: none !important;
        font-weight: 200;
    }

    img {
        width: 10vw;
        margin-right: 0px;
        /* height: 3vw; */
    }

`