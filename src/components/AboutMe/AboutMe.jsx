import React, {useRef} from "react";
import * as S from "./AboutMe.styles";

export default function AboutMe () {
    const refAboutMe = useRef(null)
    return(
        <S.About id="AboutMeID" ref={refAboutMe} >
            <S.Title> 
                <p>Sobre mim</p>
                <div></div>
            </S.Title>
            <S.Presentation>
                <div>
                    <p>Olá! Meu nome é Lucas e gosto de criar sites para internet. Meu interesse em desenvolvimento web começou em 2020, quando por meio de uma matéria da faculdade eu tive contato com Html e Css para criação de sites, a partir daí procurei aprender mais sobre, testando alguns frameworks como React.Js, Bootstrapp, Rsuite e outros dos quais passei a utilizar em meus projetos.</p>
                    <p>Ainda durante a faculdade tive a oportunidade de realizar um grande projeto, no qual eu e um colega fizemos um aplicativo e um painel de controle de gerenciamento para uma ONG chamada Pata Amiga que resgata e cuida de cães abandonados. Na ocasião nós pudemos participar de todas as etapas de desenvolvimento, do planejamento até a conlusão, eu fiquei responsavel pelo Front-end do site e do Aplicativo, no qual utilizei React e React Native respectivamente para o desenvolvimento.</p>
                    <p>Embora eu não tenha ainda uma vasta experiencia profissional, considero que o conhecimento que adiquiri até agora me permite ser capaz de trabalhar em projetos voltados para o desenvolvimento Web.</p>  
                    <p>Mais recentemente eu me propus a refazer o painel de controle do 0, corrigindo alguns bugs e refazendo as interfaces.</p>
                    <p>Aqui estão algumas tecnologias com as quais tenho trabalhado recentemente::</p>

                    <S.Technologies>
                        <li>React</li>
                        <li>NodeJs</li>
                        <li>Java Script</li>
                        <li>Firebase</li>
                    </S.Technologies>
                </div>
                <section>
                    <img src="https://i.ibb.co/51b3Czc/me-removebg-preview.png" alt="" srcset="" />
                </section>
            </S.Presentation>
        </S.About>
    )
}