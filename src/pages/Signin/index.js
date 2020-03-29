import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Container,
  Section,
  Form,
  Title,
  Description,
  InputID,
  ButtonSubmit,
  SignupLink,
  SignupIcon
} from "./styles";

export default function Signin() {
  const history = useHistory();
  const [id, setId] = useState("");

  async function handleSignin(e) {
    e.preventDefault();

    try {
      const response = await api.post("session", { id });
      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);
      history.push("/profile");
    } catch (error) {
      console.log(error);
      toast.error(`Não foi possivel efetuar o Login`, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }
  return (
    <Container>
      <Section>
        <img src={logoImg} alt="BeTheHero" />
        <Form onSubmit={handleSignin}>
          <Title>Seja um Herói!</Title>
          <Description>Efetue seu login</Description>
          <InputID
            onChange={e => setId(e.target.value)}
            value={id}
            placeholder="Sua ID"
          />
          <ButtonSubmit>Entrar</ButtonSubmit>
          <SignupLink to="/register">
            <SignupIcon />
            Ainda não possuo cadastro :(
          </SignupLink>
        </Form>
      </Section>
      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}
