import { ContainerModal, DivLinks, DivMatriz, DivSocials } from "./styles";
import {AiOutlineYoutube,AiOutlineFacebook,AiOutlineInstagram,AiOutlineWhatsApp} from "react-icons/ai";
import {BiLogIn,BiSearchAlt,BiHome,BiDonateHeart,BiLogOut,} from "react-icons/bi";
import { TbHeartHandshake } from "react-icons/tb";
import { Link } from "react-router-dom";
import { IoIosPeople } from "react-icons/io";
import React, {  useContext } from "react";
import { AuthContext } from "../../contexts/authContext/AuthContext";

export default function Menu() {
  const { isLogin,setIsModal } = useContext(AuthContext);
  const handleOutSideClick = (e:any )=>{
    if(e.target.id === 'modalMenu'){
      setIsModal(false)
    }
  }
  return (
    <ContainerModal id='modalMenu' onClick={handleOutSideClick}>
      <DivLinks>
        <DivSocials>
          <h3>Nossas Redes Sociais</h3>
          <div>
            <a target='_blank' rel="noopener noreferrer" href="https://youtube.com">
              <AiOutlineYoutube />
            </a>
            <a target='_blank' rel="noopener noreferrer" href="https://facebook.com">
              <AiOutlineFacebook />
            </a>
            <a target='_blank' rel="noopener noreferrer" href="https://instagram.com">
              <AiOutlineInstagram />
            </a>
            <a target='_blank' rel="noopener noreferrer" href="https://whatsapp.com" >
              <AiOutlineWhatsApp />
            </a>
          </div>
        </DivSocials>
        <DivMatriz>
          <h3>Matriz</h3>
          <p>R.Lorem Ipsum, 321</p>
          <p>São Paulo-sp</p>
          <p>Tel:(11)5899-9999</p>
        </DivMatriz>

        <div>
          <Link to="/home">
            <BiHome />
            Home
          </Link>
          <Link to="/sobrenos">
            <IoIosPeople />
            Quem Somos
          </Link>
          <Link to="/campanhadoagasalho">
            <TbHeartHandshake />
            Projetos
          </Link>
          <Link to="/pesquisadesaparecidos">
            <BiSearchAlt />
            Pesquisar Pessoa
          </Link>
          <Link to="/home">
            <BiDonateHeart />
            Apoie Agora
          </Link>
          {isLogin ? (
            <Link to="/home">
              <BiLogOut /> logout
            </Link>
          ) : (
            <Link to="/login">
              <BiLogIn /> Login
            </Link>
          )}
        </div>
      </DivLinks>
    </ContainerModal>
  );
}