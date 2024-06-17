import styled from "styled-components"

export const StyledAboutNew = styled.main`
    width: 100%;
    display: flex;
    background-color: #292929;
    background-image: url(/assets/porty-1.jpg);
    background-attachment: fixed;
    background-position: 10% 10%;
    background-size: 500%;


    .main-elements {
        width: 100%;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* position: relative; */
    }

    .link-home {
        position: absolute;
        z-index: 10;        
        top: 20px;
        left: 20px;

        img {
            width: 25px;
        }
    } 

    @media screen and (max-width: 1024px) {
        .link-home {        
        left: 90%;

        img {
            width: 20px;
        }
    } 
}

`