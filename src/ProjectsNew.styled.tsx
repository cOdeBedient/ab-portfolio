import styled from "styled-components"

export const StyledProjectsNew = styled.main`
    width: 100%;
    display: flex;
    background-image: url(/assets/meadow1.jpg);
    background-image: url(/assets/meadow3.jpg);
    background-image: url(/assets/forest.jpg);
    background-image: url(/assets/porty-1.jpg);
    /* background-image: url(/assets/porty-2.jpg); */
    /* background-image: url(/assets/porty-3.jpg); */
    /* background-image: url(/assets/porty-4.jpg); */
    background-size: cover;
    background-attachment: fixed;
    background-position: 10% 10%;

    .main-elements {
        width: 100%;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
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

    .ab-header {

        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    h1 {
        font-size: 45px;
        margin-bottom: 10px;
        margin-top: 100px;
        width: 37vw;
    }

    h2 {
        font-size: 24px;
        font-weight: 500;
        margin-top: 10px;
        margin-bottom: 100px;
        width: 32vw;
    }

`