import styled from "styled-components"

export const StyledAboutNew = styled.section`
    width: 100%;
    display: flex;
    background-color: #292929;
    background-image: url(/assets/porty-1.jpg);
    background-attachment: fixed;
    background-position: 10% 10%;
    background-size: 500%;
    height: 100vh;

    .main-elements {
        width: 100%;
        height: 100%;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* position: relative; */
    }

    .footer {
        position: absolute;
        right: 20px;
        top: 20px;
    }

    .home-button {
        img {
            background-color: #d690a8;
            width: 32px;
            padding: 4px;
            border-radius: 8px;
            margin-bottom: 10px;
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