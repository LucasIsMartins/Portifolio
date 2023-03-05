import styled from "styled-components";

export const List = styled.div`
    color: #ffffff;
    width: 1%;
    height: 270px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-size: 1.4rem;
    margin-right: 15px;
    margin-left: 10px;
    width: 30px;


    br {
        background: #04d361;
    }


    @media (max-width:1280px){
        display: none;
    }
`

export const Line = styled.div`
    border: 2px solid #04d361;
    height: 50px;

`
export const SLine = styled.div`
    border: 2px solid #04d361;
    height: 5px;
`
export const Icon = styled.div`
    cursor: pointer;
       
    &:hover {
        transform: translateY(-3px);
        transition: 0.4s ease;
        color: #04d361

    }

`