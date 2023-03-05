import React from "react";
import * as S from './Home.styles'
import Fade from 'react-reveal/Fade';
import {SlArrowUp} from 'react-icons/sl'

import Header from "../../components/Header/header";
import SocialMedia from "../../components/SocialLinks/MediaSocialLinks";
import Presentation from "../../components/Presetation/Presentation";
import AboutMe from "../../components/AboutMe/AboutMe";
import FeaturedProjects from "../../components/FeaturedProjects/FeaturedProjects";
import MoreProjects from "../../components/OtherProjects/OtherProjects";
import ContactMe from "../../components/Contact/Contact";

function BtnMoveToTOP() {
    const goToTop = () => {
        const meuComponente = document.querySelector('#HeaderID');
        meuComponente.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <S.ToTop onClick={goToTop}>
            <Fade bottom>
                <SlArrowUp/>
            </Fade>
        </S.ToTop>
    )
}

export default function HomePage () {

    return(
            <S.Home>
                <Header/>
                <BtnMoveToTOP/>
                <S.Content>
                    <SocialMedia/>
                    <S.Portifolio>
                        <Fade top opposite>
                            <Presentation />
                            <AboutMe/>
                        </Fade>
                        <Fade left>
                            <FeaturedProjects />
                        </Fade>            
                        <MoreProjects/>
                        <ContactMe/>

                    </S.Portifolio>
                    
                </S.Content>
                
            </S.Home>
      



       
        
     
    )
} 