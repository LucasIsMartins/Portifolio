import styled from "styled-components";

export const Projects = styled.div`
    padding: 40px;    
    color: #ffffff;

    @media (max-width:1280px){
        padding: 40px 20px;
    }

    @media (max-width:1366px){
        padding: 40px 20px;
    }
    @media (max-width:414px){
        
    }
`

export const Title = styled.div`
    display: flex;

    p {
        font-family: Rajdhani;
        font-size: 1.6rem;
        font-weight: bold;
        color: #ccd6f6;
 
    }
}
`

export const List = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width:1280px){
        grid-template-columns: repeat(3, 1fr);
        row-gap: 25px;
    }

    @media (max-width:1366px){
        grid-template-columns: repeat(3, 1fr);
        row-gap: 25px;
    }

    @media (max-width:414px){
        grid-template-columns: repeat(1, 1fr);
        row-gap: 15px;
    }


`
export const Card = styled.div`
    background: #00291d;
    height: 285px;
    width: 305px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    
    &:hover {
        cursor: pointer;
        transform: translateY(-4px);
        transition: 0.4s ease;
    }


    @media (max-width:1280px){
        width: 365px;
    }

    @media (max-width:1366px){
        width: 365px;
        
    }
    @media (max-width:414px){
        width: 340px;
    }
`

export const CardIcon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 2.0rem;
    color: #ccd6f6;

    div {
        font-size: 1.5rem;

        &:hover {
            transform: translateY(-3px);
            transition: 0.4s ease;
            color: #04d361;
            cursor:pointer;
    
        }
    }
`

export const CardTItle = styled.div`
    h3 {
        color: #ccd6f6;
        margin-bottom: 0;
    }
`

export const CardDescription = styled.div`
    color: #ffffff;
    flex-grow: 1;
    flex-basis: auto;

    p {
        font-family: Rajdhani;
        font-size: 1.1rem;
      
        
    }

`

export const Techs = styled.ul`
    padding: 0;
    list-style: none;
    font-family: Rajdhani;
    display: flex;
    flex-direction: row;
    

    li {
        margin-right: 10px;
    }
`