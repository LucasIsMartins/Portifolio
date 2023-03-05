import styled from "styled-components";

export const Contacts = styled.section`
    padding: 40px;
    color: #ffffff;
    font-family: Rajdhani;

    @media (max-width:1280px){
        padding: 40px 20px;
    }
    
    @media (max-width:1366px){
        padding: 40px 20px;
    }

    h4 {
        text-align: center;
        font-size: 1.5rem;
        color: #ccd6f6;
    }

`

export const Title = styled.div`
    text-align: center;
    color: #ccd6f6; 

    h2 {
        font-size: 1.5rem;
        
    }

    div {
        width: 100%;
        opacity: 30%;
        border-bottom: 1px solid #ccd6f6;
    }

    @media (max-width:414px){
        width: 370px;
    }
`

export const ContactList = styled.div`
    display: flex;
    flex-direction: row ;
    justify-content: space-between;
    
    @media (max-width:414px){
        flex-direction: column;
        align-items: center;
    }

`

export const Contact = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    width: 49%;
    
    span {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px;
        border-radius: 100%;
        font-size: 1.6rem;    
        color: #04d361;
    }

    h3 {
        margin: 5px;
        letter-spacing: 2px;
    }
    p {
        margin: 0;
    }
`

export const Developer = styled.p`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    
    p {
        margin-left: 2px;
        margin-right: 2px;
        color: #04d361;
        cursor: pointer;
    }

`