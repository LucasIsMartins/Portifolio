import styled from "styled-components";

export const Header = styled.header`
    height: 55px;
    padding: 10px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;

    @media (max-width:1280px){
        padding: 10px 20px;
    }

    @media (max-width:1360px){
        padding: 20px;
    }

    @media (max-width: 414px){
       
        width: 370px;
    }
`

export const Name = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    
    h3 {
        color: #ffffff;
        font-family: Rajdhani;
        letter-spacing: 1.5px;
        font-size: 1.3rem;
        text-transform: uppercase;
        
        &:first-line {
            color: #04d361;

        }
    }
`


export const Navigate = styled.nav`
    width: 400px;
    display: flex;
    justify-content: space-between;
  
    span{
        font-size: 1.2rem;
        font-family: Rajdhani;
        color: #ffffff;
        text-decoration: none;
        opacity: 80%;
        display: inline-block;
        padding: 5px;
        cursor: pointer;
        
        &:after {
            content: '';
            display: block;
            width: 0;
            height: 2px;
            background: #04d361;
            transition: width .3s;
        }

        &:hover {

            &:after {
                width: 100%;
            }

            opacity: 100%;
            transition: 0.2s ease-in-out;
        }
        
    }

    @media (max-width: 414px){
        display: none;   
    }
`

export const Resume = styled.button`
    border: none;
    border-radius: 3px;
    padding: 10px;
    font-family: Rajdhani;
    letter-spacing: 2px;
    font-weight: 600;
    background: transparent;
    border: 1px solid #04d361;
    color: #04d361;
    cursor: pointer;

    &:hover {
        color: #ffffff;
        background: rgba(4, 210, 97, 0.37);
        transition: 0.2s ease-in-out;
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(4px);
        transform: scale(0.9);
        transition: 0.1s ease-in-out;
        
    }



`

export const HExternalLink = styled.div`
    width: 200px;
    height: 50px;
    margin-left: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    display: none;

    @media (max-width:1280px){
        display: flex;
    }
`

export const HDtailLine = styled.div`
    height: 2px;
    background: #04d361;
    width: 30px;
    margin: 0 5px;

    @media (max-width: 414px){
        width: 5px;
        height: 3px;   
    }
`

export const SDtailLine = styled.div`
    height: 2px;
    background: #04d361;
    width: 10px;
    margin: 0 5px;

    @media (max-width: 414px){
        width: 5px;
        height: 3px;   
    }
`

export const Icon = styled.div`
    cursor: pointer;
       
    &:hover {
        transform: translateY(-3px);
        transition: 0.4s ease;
        color: #04d361

    }

`