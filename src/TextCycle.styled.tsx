import styled from "styled-components"

export const StyledTextCycle = styled.div`
    /* height: 200%; */
    width: 260px;
    overflow: visible;

    h3 {
        color: #d690a8;
        font-size: 3.3em;
        font-family: "Pacifico", cursive;
        font-style: normal;
        font-weight: 100;
        padding-right: 10px;
        cursor: pointer;
        height: fit-content;
        margin-top: 0;
        margin-bottom: 0;
        /* position: relative; */
    }

    @media screen and (max-width: 1200px) {
        width: 45%;

        h3 {
            font-size: 2.5em;
        }
    }

    @media screen and (max-width: 472px) {
        width: 45%;

        h3 {
            font-size: 1.8em;
        }
    }
`