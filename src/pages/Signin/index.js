import React from "react";

import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";
import {
  Container,
  Section,
  Form,
  Title,
  InputID,
  ButtonSubmit,
  SignupLink,
  SignupIcon
} from "./styles";

export default function Signin() {
  return (
    <Container>
      <Section>
        <img src={logoImg} alt="BeTheHero" />
        <Form>
          <Title>Seja um Herói!</Title>
          <InputID placeholder="Sua ID" />
          <ButtonSubmit>Entrar</ButtonSubmit>
          <SignupLink>
            <SignupIcon />
            Ainda não possuo cadastro :(
          </SignupLink>
        </Form>
      </Section>
      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}
