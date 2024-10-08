import styled from "styled-components"

export const StyledProjectsNew = styled.main`
    width: 100%;
    display: flex;
    /* background-image: url(/assets/meadow1.jpg);
    background-image: url(/assets/meadow3.jpg);
    background-image: url(/assets/forest.jpg);
    background-image: url(/assets/porty-1.jpg);
    background-image: url(/assets/leaf-sun.jpg); */
    /* background-image: url(/assets/porty-2.jpg); */
    /* background-image: url(/assets/porty-3.jpg); */
    /* background-image: url(/assets/porty-4.jpg); */
    /* background-size: cover;
    background-attachment: fixed;
    background-position: 10% 10%; */
    /* overflow: hidden; */
    position: relative;

    .projects-container {
        display: flex;
        flex-direction: column;
        margin-top: 50px;
    }

    .background-projects {
        width: 120vw;
        min-width: 1600px;
        /* height: 100%; */
        z-index: 0;
        position: fixed;
        top: 0;
        right: -20vw;
    }

    .main-elements {
        z-index: 1;
        width: 100%;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }

    .footer {
        position: fixed;
        right: 20px;
        top: 20px;
        z-index: 2;
    }

    .home-button {
        img {
            background-color: #d690a8;
            width: 32px;
            padding: 4px;
            border-radius: 8px;
            margin-bottom: 10px;
            
            &:hover,
            &:focus {
                background-color: #cb6e8f !important;
            }
        }
    }

    .background {
        z-index: -1;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        /* filter: brightness(0%) */
    }

    .header-with-flower {
        width: 80vw;
        display: flex;
        align-items: center;

        img {
            height: 200px;
        }
    }

    .link-home {
        position: fixed;
        z-index: 10;        
        top: 20px;
        left: 20px;

        /* img {
            width: 30px;
        } */
    } 

    @media screen and (max-width: 700px) {
        .link-home {
            img {
                width: 20px;
            }
        }
    }
`