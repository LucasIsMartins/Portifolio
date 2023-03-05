import styled from "styled-components";

export const Home = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: column;
    
    @media (max-width:1280px){
        width: 100vw;
    }

    @media (max-width:1360px){
        width: 100vw;
    }
`
export const Content = styled.div`
    display: flex;
    flex-direction: row;


`
export const Portifolio = styled.section`
   
    flex-grow: 1;
    flex-basis: auto;
`


export const ToTop = styled.div`

    color: #ffffff;
    position: fixed;
    top: 90%;
    font-size: 1.8rem;
    cursor: pointer;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;

    &:hover {
        transform: translateY(-3px);
        transition: 0.4s ease;
        color: #04d361
        
    }

    @media (max-width:1280px){
        background: rgba(0, 41, 29, 1) ;
        color: #fffffff;
        border-radius: 5px;
    }


`
