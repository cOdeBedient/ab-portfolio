import styled from "styled-components"

export const StyledAbout = styled.section`
    width: 47vw;
    margin-top: 50px;
    margin-left: 10px;
    margin-right: 10px;
    position: relative;
    background-color: #00000089;

    
    h3 {
        margin-left: 1vw;
        font-size: 26px;
        margin-bottom: 5px;
    }

    .about-section {
        /* border: 1px solid white; */
        background-color: #0000004b;
        padding: 16px;
        position: relative;
    }

    .ferry-photo {
        float: left;
        margin: 10px 20px 5px 6px;
        top: 20px;
        left: 20px;
        width: 40vh;
    }

    p {
        margin: 0;
    }

    .social-buttons {
        z-index: 2;
        position: absolute;
        top: 0;
        left: -60px;
        width: 40px;
    }

    @media screen and (max-width: 1024px) {
        width: 67vw;

        .ferry-photo {
        width: 25vh;
    }

    .social-buttons {
        width: 30px;
        left: -40px;
    }
    }
`