import styled from "styled-components";

export const About = styled.div`
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
    flex-direction: row;
    align-items: center;

    p {
        font-family: Rajdhani;
        font-size: 1.6rem;
        font-weight: bold;
        color: #ccd6f6;
        

        
    }

    div {
        width: 400px;
        border-top: 1px solid #ccd6f6;
        margin-left: 15px;
        opacity: 50%;

        @media (max-width: 414px){
            width: 200px;
             
        }

    }

    @media (max-width: 414px){
        width: 340px;
         
    }
}


`

export const Presentation = styled.div`
    display: flex;


    div{
        width: 60%;
        margin-right: 40px;

        @media (max-width:1280px){
            width: 60%;

        }

        @media (max-width: 414px){
            width: 340px;
            padding: 5px; 
        }

        p {
            font-size: 1.3rem;
            font-family: Rajdhani;
        }
    }

    img {
        border-radius: 5px;
        width: 400px;
        height: 400px;
        -webkit-mask-image: url(data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CiAgICAgICAgICAgICAgPHN2ZyBpZD0ic3ctanMtYmxvYi1zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSI+CiAgICAgICAgICAgICAgICAgICAgPGRlZnM+IAogICAgICAgICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9InN3LWdyYWRpZW50IiB4MT0iMCIgeDI9IjEiIHkxPSIxIiB5Mj0iMCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBpZD0ic3RvcDEiIHN0b3AtY29sb3I9InJnYmEoMTgsIDIwLCAyMCwgMSkiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIGlkPSJzdG9wMiIgc3RvcC1jb2xvcj0icmdiYSgwLCA0MSwgMjksIDEpIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICAgICAgICAgICAgICA8L2RlZnM+CiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI3N3LWdyYWRpZW50KSIgZD0iTTI3LjMsLTMyQzM1LC0yNi4xLDQwLjcsLTE3LjEsNDEuOSwtNy44QzQzLjEsMS42LDM5LjgsMTEuMywzNC41LDE5LjRDMjkuMiwyNy41LDIyLDM0LDEzLjcsMzYuNUM1LjUsMzksLTMuOCwzNy41LC0xMy40LDM0LjhDLTIzLDMyLjIsLTMyLjksMjguNCwtMzcuNSwyMS4yQy00Mi4xLDE0LjEsLTQxLjQsMy40LC0zOS4xLC02LjRDLTM2LjgsLTE2LjMsLTMyLjksLTI1LjQsLTI2LjEsLTMxLjVDLTE5LjMsLTM3LjYsLTkuNiwtNDAuNywwLjEsLTQwLjhDOS44LC00MC45LDE5LjYsLTM3LjksMjcuMywtMzJaIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCA1MCkiIHN0cm9rZS13aWR0aD0iMCIgc3R5bGU9InRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7IiBzdHJva2U9InVybCgjc3ctZ3JhZGllbnQpIj48L3BhdGg+CiAgICAgICAgICAgICAgPC9zdmc+);
        background:linear-gradient(90deg, rgba(18, 20, 20, 1) 0%, rgba(0, 41, 29, 1) 100%);
        filter: grayscale(10%);

        @media (max-width: 414px){
            display: none;   
        }
    }

    @media (max-width: 414px){
        width: 370px;
         
    }


`

export const Technologies = styled.ul`
    display: flex;
    list-style: none;
    padding-left: 0;

    li {
        margin-right: 15px;
        color: #04d361;
        font-weight: bold;
        font-size: 1.3rem;
        font-family: Rajdhani;
    }
`

