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
        border: 1px solid white;
        border-radius: 8px;
        padding: 16px;
        position: relative;
    }

    img {
        float: left;
        margin: 10px 20px 5px 6px;
        top: 20px;
        left: 20px;
        width: 41%;
    }

    p {
        margin: 0;
    }

.social-buttons {
    z-index: 2;
    position: absolute;
    top: 0;
    left: -60px;;
    }
`