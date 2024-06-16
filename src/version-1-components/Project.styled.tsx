import styled from "styled-components"

export const StyledProject = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 2px solid white; */
    /* width: 42.5%; */
    border-radius: 8px;
    padding: 12px;
    margin: .5vw;
    height: 33vh;
    background-color: #00000050;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.668);
    /* background-color: #0A9396; */

    .no-tagline-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;  
        font-size: 17px;
        font-weight: bold;
        margin-bottom: 20px;
        /* margin-top: 20px; */
        text-align: center;
    }

    .project-details {
        display: flex;
        flex-direction: column;
        width: 60%;
        text-align: center;
    }

    .deployed-repo {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        text-align: center;
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
        margin-top: 5px;;
        font-size: 1.2em;
    }

    a {
        color: white !important;
        text-decoration: none !important;
        font-weight: 200;
    }

    img {
        width: 17vw;
        margin-right: 0px;
        margin-top: 0px;
        /* height: 3vw; */
    }

`