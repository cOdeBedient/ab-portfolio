import styled from "styled-components"

export const StyledNavBar = styled.nav`
    /* display: flex; */
    position: fixed;
    /* padding: 20px; */
    /* background-image: url(/assets/bright-flower-background.jpg); */
    /* margin-bottom: 25px; */
    height: 100vh;
    width: 10%;
    /* padding: 10px; */

    .button-div {
        height: 80%;
        /* position: fixed; */
        /* width: 100vw; */
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        justify-content: center;
        /* background-image: url(/assets/bright-flower-background.jpg); */
        /* padding-top: 10px; */
        /* padding-bottom: 10px; */
        /* margin-bottom: 80px; */
        /* transform: rotate(-90deg); */
        /* margin-top: 100px; */
    }

    button {
        /* height: fit-content; */
        /* width: fit-content; */
        border: none;
        margin-left: 10px;
        /* margin-right: 10px; */
        margin-bottom: 3px;
        margin-top: 3px;
        /* border: 1px solid white; */
        border-radius: 5px;
        padding-bottom: 5px;
        /* padding: 42px 6px 5px 6px; */
        font-size: 30px;
        font-weight: bold;
        background-color: black;
        color: white;
        cursor: pointer;
        width: fit-content;
    }
`