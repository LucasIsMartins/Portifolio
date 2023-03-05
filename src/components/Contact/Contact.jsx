import React, {useRef} from "react";
import * as S from './Contact.style'
import { FiMail, FiPhone } from "react-icons/fi";
import Fade from 'react-reveal/Fade';

export default function ContactMe() {
    const refContact = useRef(null)

    return(
        <S.Contacts id="contactsID" ref={refContact}>
            <Fade top>
                <S.Title>
                    <div></div>
                    <h2>Vamos trabalhar juntos?</h2>
                    <h3>Estou em busca de novas oportinidades e minha caixa de mensagem está sempre aberta. <br/>Se tiver alguma dúvida ou se apenas quiser dizer oi, farei o possível para entrar em contato com você! </h3>
                </S.Title>

                <h4>Meus contatos:</h4>
            </Fade>
            <Fade bottom>
                <S.ContactList> 
                    <S.Contact>   
                        <span><FiMail/></span>
                        <h3>Emails </h3>
                        <p>dev.lucas.martins@outlook.com.br</p>
                        <p>lucasmartinsdejesus.01@gmail.com</p>
                    </S.Contact>


                    <S.Contact>   
                        <span><FiPhone/></span>
                        <h3>Telefones </h3>
                        <p>(69) 9 1234-1234</p>
                        <p>(69) 9 1234-1234</p>
                    </S.Contact>
                </S.ContactList>
            </Fade>

            <S.Developer>Desenlvolvido por <p>Lucas Martins</p> - 2023</S.Developer>
        </S.Contacts>
    )
}