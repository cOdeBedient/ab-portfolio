import styled from "styled-components"

export const StyledHomeNew = styled.main`
    width: 100%;
    display: flex;
    height: 100vh;

    .home-socials {
        display: flex;
        flex-direction: column;

        img {
            height: 50px !important;
            margin-right: 20px;
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
        justify-content: flex-end;
        align-items: center;
        position: relative;
        padding-right: 100px;
        margin-top: 28vh;
    }

    .header-with-flower {
        width: 600px;
        display: flex;
        flex-direction: column;
        padding-right: 10px;

        button {
            width: 150px;
            height: 50px;
            margin: 40px 30px 30px 0px;;
            /* border-radius: 30px; */
            border: none;
            font-size: 1.2em;
            font-weight: bold;
            background-color: #d690a8;
            border-radius: 20px;
            cursor: pointer;
        }

        h2 {
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
        font-size: 3.5em;
        margin-bottom: 0px;
        margin-top: 0px;
        width: fit-content;
        margin-left: -3px;
    }

    h2 {
        font-size: 24px;
        font-weight: 500;
        margin-top: 10px;
        margin-bottom: 100px;
        /* width: 32vw; */
    }

    .title {
        display: flex;
        height: 110px;
        overflow: hidden;
        width: 100%;
        position: relative;

        p {
            margin: 0;
            margin-left: 10px;
        }
    }


    @media screen and (max-width: 1590px) {
        .main-elements {
            padding-right: 20px;
        }
    }

    @media screen and (max-width: 1480px) {
        .main-elements {
            padding-right: 20px;
        }

        .background {
            height: 112%;
            left: -18vw;
        }
    }

    @media screen and (max-width: 1225px) {
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

            h2 {
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

    @media screen and (max-width: 1022px) {
        .header-with-flower {
            background-color: black;
            width: 455px;
            width: 100%;
            align-items: center;
            text-align: center;
        }
        .title {
            justify-content: center;
            margin-right: 150px;
        }

        .ab-header {
            align-items: center;
        }

        h2 {
            width: 80%;
        }

        .main-elements {
            margin-top: 50vh;
            padding-right: 0px;
            justify-content: center;
            height: 70vh;
        }

    }

    @media screen and (max-width: 685px) {
        .background {
            left: -44vw;
        }

        .title {
            width: 125%;
        }
    }

    @media screen and (max-width: 595px) {
        .background {
            height: 125%;
            left: -74vw;
        }
    }

    @media screen and (max-width: 472px) {
        .background {
            height: 121.5%;
            top: -21vh;
        }

        .header-with-flower {
            
            button {
                width: 80px;
                height: 30px;
                margin-top: 20px;
                border: none;
                font-size: .75em;
            }

            h2 {
                font-size: 1em;
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

`