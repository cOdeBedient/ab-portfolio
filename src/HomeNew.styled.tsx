import styled from "styled-components"

export const StyledHomeNew = styled.main`
    width: 100%;
    display: flex;
    height: 100vh;
    overflow: hidden;
    position: relative;

    .name-and-arrow {
        position: relative;
    }
    
    .home-socials {
        display: flex;
        flex-direction: column;

        img {
            height: 50px !important;
            margin-right: 20px;
        }
    }

    .footer {
        position: absolute;
        right: 20px;
        top: 20px;
    }

    .home-button {
        img {
            background-color: #ffffff;
            width: 32px;
            padding: 4px;
            border-radius: 8px;
            margin-bottom: 10px;
        }
    }

    a {
        cursor: pointer;
    }

    .background {
        height: 115%;
        z-index: 0;
        position: absolute;
        top: -100px;
        left: -7vw;
        -webkit-mask: linear-gradient(270deg, rgba(0,0,0,0) 10%, rgba(0,0,0,1) 50%);
    }

    .main-elements {
        width: 100%;
        color: white;
        display: flex;
        /* justify-content: flex-end; */
        align-items: center;
        position: relative;
        /* padding-right: 100px; */
        margin-top: 28vh;
    }

    .header-with-flower {
        margin-left: 112vh;
        width: 600px;
        display: flex;
        flex-direction: column;
        padding-right: 10px;

        button {
            width: 150px;
            height: 50px;
            margin: 40px 30px 30px 0px;;
            font-size: 1.3em;
            font-weight: bolder;
            text-decoration: none !important;
            color: black !important;
        }

        p {
            margin: 0;
        }
    }

    .ab-header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    h1 {
        font-family: "Pacifico", cursive;
        font-style: normal;
        font-weight: 100;
        font-size: 3.3em;
        margin-bottom: 0px;
        margin-top: 0px;
        width: fit-content;
        margin-left: -3px;
    }

    p {
        font-size: 24px;
        font-weight: 500;
        margin-top: 10px;
        margin-bottom: 100px;
        /* width: 32vw; */
    }

    .title {
        display: flex;
        height: 100px;
        width: 100%;
        position: relative;
        overflow: hidden;

        h2 {
            margin: 0;
            margin-left: 10px;
        }
    }


    @media screen and (max-width: 1690px) {
        .header-with-flower {
            margin-left: 93vh;
        }

        .background {
            left: -10vw;
        }
    }

    @media screen and (max-width: 1400px) {
        .header-with-flower {
            margin-left: 66vh;
        }

        .background {
            height: 112%;
            left: -22vw;
        }
    }


    @media screen and (max-width: 1200px) {
        .background {
            height: 121.5%;
            left: -24vw;
            top: -21vh;
        }

        .header-with-flower {
            width: 455px;
            
            button {
                width: 120px;
                height: 40px;
                margin-top: 20px;
                border: none;
                font-size: 1em;
                font-weight: bold;
                background-color: #d690a8;
                border-radius: 20px;
                cursor: pointer;
            }

            p {
                font-size: 1.2em;
            }
        }

        h1 {
            font-size: 2.5em;
            padding-left: 2px;
        }

        .title {
            height: 70px;
        }
    }

    @media screen and (max-width: 1100px) {
        position: relative;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;

        .background {
            width: 100vw;
            height: auto;
            position: relative;
            top: 0px;
            left: 0;
            -webkit-mask: linear-gradient(0deg, rgba(0,0,0,0) 10%, rgba(0,0,0,1) 20%);
        }

        .main-elements {
            position: relative;
            top: -10px;
            margin-top: 0 !important;
            justify-content: start !important;
            display: flex;
            flex-direction: column;
        }

        .header-with-flower {
            background-color: black;
            width: 455px;
            width: 100%;
            align-items: center;
            text-align: center;
            margin-left: 0;
        }
        
        .title {
            justify-content: center;
            margin-right: 150px;
        }

        .ab-header {
            align-items: center;
        }

        p {
            width: 80%;
        }

        .main-elements {
            margin-top: 50vh;
            padding-right: 0px;
            justify-content: center;
            height: 70vh;
        }
    }

    /* @media screen and (max-width: 820px) {
        .background {
            left: -54vw;
        }
    } */

    @media screen and (max-width: 685px) {
        .title {
            width: 125%;
        }
    }

    .button-div {
            width: 50%;
            display: flex;
            justify-content: space-evenly;
        }

        .header-with-flower {
            button {
                width: 110px;
                height: 36px;
                margin-top: 20px;
                margin-right: 0;
                font-size: .95em;
            }
        }

    /* @media screen and (max-width: 595px) {
        .background {
            height: 125%;
            left: -74vw;
        }
    } */

    /* @media screen and (max-width: 595px) {
        .background {
            height: 125%;
            left: -94vw;
        }
    } */

    @media screen and (max-width: 472px) {

        .button-div {
            width: 80%;
            display: flex;
            justify-content: space-evenly;
        }

        .header-with-flower {
            button {
                width: 97px;
                height: 33px;
                margin-top: 20px;
                margin-right: 0;
                font-size: .85em;
            }

            p {
                font-size: 1.3em;
            }
        }

        h1 {
            font-size: 1.7em;
            padding-left: 2px;
        }

        .title {
            justify-content: center;
            margin-right: 120px;
            height: 50px;
        }
    }

    /* @media screen and (max-width: 442px) {
        .background {
            left: -132vw;
        }
    } */

`