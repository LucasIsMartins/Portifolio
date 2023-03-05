import styled from "styled-components";

export const Presentation = styled.div`
    color: #ffffff;
    padding: 40px;
    font-family: Rajdhani;

    p {
        color: #ffffff;
        margin-bottom: 5px;
        font-size: 1.3rem;
        max-width: 65%;
    }

    h2 {
        font-size: 2.5rem;
        margin: 0 !important;
        color: #ccd6f6;
    }

    h3 {
        font-size: 2.5rem;
        margin: 0 !important;
        color: #cdcdcd;
    }
    
    @media (max-width:1280px){
        padding: 40px 20px;
    }

    @media (max-width:1366px){
        padding: 40px 20px;
    }
    

    @media (max-width: 414px){
        width: 370px;

        p:last-child {
            min-width: 370px;
        }
    }
`