import styled from "styled-components"

export const StyledTechStack = styled.section`
    margin-bottom: 50px;

    h3 {
        margin-left: 2.2vw;
        font-size: 26px;
        margin-bottom: 5px;
        margin-top: 50px;
    }

    .techs {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 52vw;
    }

    @media screen and (max-width: 1024px) {
        .techs {
        width: 70vw;
        }
    }
`