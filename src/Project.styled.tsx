import styled from "styled-components"

export const StyledProjectNew = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 2px solid white; */
    /* width: 42.5%; */
    /* border-radius: 8px; */
    padding: 42px 32px;
    margin: 1vw;
    height: fit-content;
    background-color: #0000006c;
    /* -webkit-mask: linear-gradient(270deg, rgba(0,0,0,0) 5%, rgba(0,0,0,1) 15%);
    -webkit-mask: linear-gradient(90deg, rgba(0,0,0,0) 5%, rgba(0,0,0,1) 10%); */
    /* box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.668); */
    /* background-color: #0A9396; */

    .no-tagline-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;  
        font-size: 17px;
        font-weight: bold;
        margin-bottom: 20px;
        /* margin-top: 20px; */
        text-align: center;
    }

    .project-details {
        display: flex;
        flex-direction: column;
        width: 100%;
        text-align: center;
    }

    .deployed-repo {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5em;
        text-align: center;
    }

    .line {
        margin-right: 5px;
        margin-left: 5px;
    }

    p {
        margin-bottom: 0;
        margin-top: 0;
        text-align: center;
        font-size: 1.25em;
        font-weight: 500;
        font-style: italic;
    }

    h2 {
        margin-bottom: 0;
        margin-top: 5px;;
        font-size: 6em;
        line-height: 1em;
    }

    a {
        color: white !important;
        text-decoration: none !important;
        font-weight: 200;
    }

    @media screen and (max-width: 1024px) {
        h2 {
        font-size: 4em;
        line-height: 1em;
        }
    }

    @media screen and (max-width: 700px) {
        h2 {
            font-size: 3em;
            line-height: 1em;
        }

        p {
            font-size: 1em;
        }
    }


    @media screen and (max-width: 500px) {
        h2 {
            font-size: 1.8em;
            line-height: 1em;
        }

        p {
            font-size: .8em;
        }

        .deployed-repo {
        font-size: 1em;

    }
    }

`