import { Content, Copyright, Main, SocialMedia } from "./styles";
import {
  BsFacebook,
  BsWhatsapp,
  BsYoutube,
  BsInstagram,
  BsLinkedin
} from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import imgLogo from "../../img/Logo.svg";
import { Link } from "react-router-dom";

interface IFooterProps{
  color?:string | undefined
}
export default function Footer({color}:IFooterProps){
  return(
    <Main>
      <SocialMedia className="media" color={`${color}`}>
        <BsFacebook className="icon blue" />
        <BsLinkedin className="icon blue-white" />
        <FiTwitter className="icon blue-clear" />
        <BsWhatsapp className="icon green " />
        <BsYoutube className="icon red" />
        <BsInstagram className="icon grad" />
      </SocialMedia>
      <Content color={`${color}`}>
        <div className="links">
          <ul>
            <Link className="linkLi" to="/home">Home</Link>
            <Link className="linkLi" to="/sobrenos">Quem Somos</Link>
            <Link className="linkLi" to="/campanhadoagasalho">Projetos</Link>
          </ul>
        </div>
        <div className="message">
          <p>
            "A empatia é certamente um dos mais nobres sentimentos humanos.
            Para entender e ajudar o próximo é necessário se imaginar na
            condição dele."
          </p>
          <span>Lázaro de Souza Gomes</span>
        </div>
        <div className="info">
          <div>
            <img src={imgLogo} alt="imagem do logo" />
          </div>
          <ul>
            <li>Fone: (11)45454-5454</li>
            <li>E-mail: socialdev@institute.com</li>
            <li>Endereço: Av das Esperanças - 1223 - Nações</li>
          </ul>
        </div>
      </Content >
      <Copyright color={`${color}`}>
        <span>Desenvolvido por Kenziers GroupFive</span>
      </Copyright>
    </Main>
  )
}
