import styled from "styled-components";

export const Featured = styled.div`
    color: #ffffff;
    padding: 40px;

    @media (max-width:1280px){
        padding: 40px 20px;
    }

    @media (max-width:1366px){
        padding: 40px 20px;
    }
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p {
        font-family: Rajdhani;
        font-size: 1.6rem;
        font-weight: bold;
        color: #ccd6f6;
 
    }
}
`

export const List = styled.div`
    padding-top: 10px;

`

export const Project = styled.div`
    display: flex;
    padding: 0px;
    margin-bottom: 15px;

    @media (max-width: 414px){
        flex-direction: column;  
    }
   

    img {
        width: 580px;
        height: 365px;

        @media (max-width: 414px){
           display: none;
        }
    }


`

export const ContainerDescription = styled.div`
    dysplay: flex;
    align-items: flex-end;

    padding: 15px;

    @media (max-width:1280px){
        width: 620px;
    }

    @media (max-width:1360px){
        width: 620px;
    }
    
    @media (max-width: 414px){
        width: 370px;
        padding: 0px;
       border-bottom: 1px solid #ffffff;;
          
    }
    
`

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Rajdhani;
    text-align: start;



    span {
        font-size: 1.3rem;
        color: #04d361;
        margin-bottom: 0 !important;
    }

    h3 {
        font-size: 1.6rem;
        margin: 0;
        color: #ccd6f6;
    }


`


export const Description = styled.div`
    background: rgba(0, 41, 29, 1);
    border-radius: 5px;
    padding: 10px;
    margin-top: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    @media (max-width:1280px){
        
    }

    p {
        font-size: 1.3rem;
        color: #ffffff;; 
    }

`


export const Technologies = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    padding-left: 0;

    li {
        margin-right: 15px;
    }
`

export const Redirect = styled.div`
    display: flex;
    flex-direction: row;

    div {
        margin-right: 15px;
        font-size: 1.3rem;


        &:hover {
            transform: translateY(-3px);
            transition: 0.4s ease;
            color: #04d361;
            cursor:pointer;
    
        }
    }

`