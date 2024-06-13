import styled from "styled-components"

export const StyledHomeNew = styled.main`
    width: 100%;
    display: flex;
    /* background-image: url(/assets/adam-head.jpg);
    background-size: 65%;
    background-repeat: no-repeat;
    background-position: 0% 0%; */
    height: 100vh;

    .home-socials {
        display: flex;
        flex-direction: column;

        img {
            height: 50px !important;
            margin-right: 20px;
        }
    }

    span {
        color: #d690a8;
    }

    .background {
        height: 115%;
        z-index: 0;
        position: absolute;
        top: -70px;
        left: -120px;
        -webkit-mask: linear-gradient(270deg, rgba(0,0,0,0) 10%, rgba(0,0,0,1) 50%);
        /* border-radius: 100px; */

    }

    .main-elements {
        width: 100%;
        color: white;
        display: flex;
        /* flex-direction: column; */
        align-items: center;
        position: relative;
    }

    .header-with-flower {
        width: 47vw;
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        margin-left: 1000px;
        margin-top: 350px;
      

        img {
            height: 190px;
        }

        button {
            width: 150px;
            height: 50px;
            margin: 30px 30px 30px 0px;;
            /* border-radius: 30px; */
            border: none;
            font-size: 1.2em;
            font-weight: bold;
            background-color: #d690a8;
            border-radius: 20px;
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
        font-size: 58px;
        margin-bottom: 0px;
        margin-top: 0px;
        width: 37vw;
        margin-left: -3px;
    }

    h2 {
        font-size: 24px;
        font-weight: 500;
        margin-top: 10px;
        margin-bottom: 100px;
        width: 32vw;
    }

`