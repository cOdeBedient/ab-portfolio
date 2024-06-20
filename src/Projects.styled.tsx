import styled from "styled-components"

export const StyledProjects = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  

    h3 {
        margin-left: 2.2vw;
        font-size: 26px;
        margin-bottom: 5px;
    }
    
    .projects {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        /* width: 50vw; */
        width: 70vw;
    }

    .project-div {
        /* width: 46.75%; */
        width: 100%;
    }
`