import React, {useRef} from "react";
import * as S from './header.styles'
import Fade  from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import {FiGithub} from 'react-icons/fi'
import {TiSocialLinkedin} from 'react-icons/ti'
import {FaInstagram, FaCodepen} from 'react-icons/fa'



export default function Header () {
    const refHeader = useRef(null)

    const goToContact = () => {
        const meuComponente = document.querySelector('#contactsID');
        meuComponente.scrollIntoView({ behavior: 'smooth' });
    };

    const goToAboutMe = () => {
        const meuComponente = document.querySelector('#AboutMeID');
        meuComponente.scrollIntoView({ behavior: 'smooth' });
    };

    const goToFeaturedProjects = () => {
        const meuComponente = document.querySelector('#FeaturedProjectsID');
        meuComponente.scrollIntoView({ behavior: 'smooth' });
    };

    const goToMoreProjects = () => {
        const meuComponente = document.querySelector('#OthersProjectsID');
        meuComponente.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <S.Header id="HeaderID" ref={refHeader}>
            <S.Name>
                <Fade left>
                    <h3>Lucas <br/> Martins</h3>

                <S.HExternalLink>
                    <S.HDtailLine></S.HDtailLine>
                    <S.Icon>
                        <FiGithub/>
                    </S.Icon>
                    <S.SDtailLine></S.SDtailLine>
                    <S.Icon>
                        <TiSocialLinkedin/>
                    </S.Icon>
                    <S.SDtailLine></S.SDtailLine>
                    <S.Icon>
                        <FaInstagram/>
                    </S.Icon>
                    <S.SDtailLine></S.SDtailLine>
                    <S.Icon>
                        <FaCodepen/>
                    </S.Icon>
                </S.HExternalLink>
                </Fade>
            </S.Name>
            <S.Navigate >
                <Slide top>
                    <span onClick={goToAboutMe}>Sobre</span>
                </Slide>
                <Slide top>
                    <span onClick={goToFeaturedProjects}>Experiencia</span>
                </Slide>
                <Slide top>
                    <span onClick={goToMoreProjects}>Projetos</span>
                </Slide>
                <Slide top>
                    <span onClick={goToContact}>Contatos</span>
                </Slide>
                
                <Slide top>
                    <S.Resume>
                        Resumo
                    </S.Resume>
                </Slide>

            </S.Navigate>

        </S.Header>
    )
} 