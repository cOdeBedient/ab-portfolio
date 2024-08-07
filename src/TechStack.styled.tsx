import styled from "styled-components"

export const StyledTechStack = styled.section`
    margin-bottom: 50px;

    h3 {
        margin-left: 2.5vw;
        font-size: 26px;
        margin-bottom: 10px;
        margin-top: 50px;
    }

    .techs {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 51vw;
        margin-bottom: 60px;
    }

    @media screen and (max-width: 1024px) {
        .techs {
        width: 70vw;
        }
    }
`