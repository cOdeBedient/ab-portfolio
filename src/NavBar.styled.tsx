import styled from "styled-components"

export const StyledNavBar = styled.nav`
    
    /* padding: 20px; */
    background-image: url(/assets/bright-flower-background.jpg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    /* margin-bottom: 25px; */
    height: 100vh;
    width: 20%;
    /* padding: 10px; */

    button {
        /* transform: rotate(-90deg); */
        height: fit-content;
        width: fit-content;
        border: none;
        /* margin-left: 5px; */
        margin-bottom: 10px;
        border-radius: 5px;
        padding: 3px 6px 5px 6px;;
        font-size: 55px;
        font-weight: bold;
    }
`