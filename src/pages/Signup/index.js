import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
import logoImg from "../../assets/logo.svg";
import "react-toastify/dist/ReactToastify.css";

import {
  Container,
  ContainerForm,
  Section,
  GoBackLink,
  Title,
  Description,
  SignupIcon,
  ButtonSubmit,
  CountryDiv,
  InputSignup,
  PhoneInputCustom
} from "./styles";
toast.configure();
export default function Signup() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  function checkForm(name, email, whatsapp, city, uf) {
    if (name === "") {
      toast.warn(`Por favor, preencha o campo Nome da ONG`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 4000
      });
      return false;
    }

    if (whatsapp === "") {
      toast.warn("Por favor, preencha o campo com o Whatsapp", {
        position: toast.POSITION.TOP_RIGHT
      });
      return false;
    }

    if (email === "") {
      toast.warn("Por favor, preencha o campo com o e-mail", {
        position: toast.POSITION.TOP_RIGHT
      });

      return false;
    }

    if (city === "") {
      toast.warn("Por favor, preencha o campo com a Cidade", {
        position: toast.POSITION.TOP_RIGHT
      });
      return false;
    }

    if (uf === "") {
      toast.warn("Por favor, preencha o campo com o Estado", {
        position: toast.POSITION.TOP_RIGHT
      });
      return false;
    } else {
      return true;
    }
  }

  async function handleRegister(e) {
    e.preventDefault();
    if (checkForm(name, email, whatsapp, city, uf)) {
      const data = { name, email, whatsapp, city, uf };
      console.warn(data);
      try {
        const response = await api.post("/ongs", data);

        toast.success(
          `Cadastro realizado com sucesso!\t
            Sua ID de conexão: ${response.data.id}`,
          {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 8000,

            draggable: false
          }
        );

        history.push("/");
      } catch (error) {
        console.log(error);
        toast.error(
          `Não foi possivel realizar o cadastro, verifique seus dados.`,
          {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 8000,

            draggable: false
          }
        );
      }
    }
  }

  return (
    <Container>
      <ContainerForm>
        <Section>
          <img src={logoImg} alt="Be The Hero" />
          <Title>Cadastro</Title>
          <Description>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos de sua ONG.
          </Description>
          <GoBackLink to="/">
            <SignupIcon />
            Já possuo cadastro!
          </GoBackLink>
        </Section>
        <form onSubmit={handleRegister}>
          <InputSignup
            placeholder="Nome da ONG"
            onChange={event => setName(event.target.value)}
            value={name}
          />
          <CountryDiv>
            <PhoneInputCustom
              country="BR"
              placeholder={"Whatsapp"}
              onChange={setWhatsapp}
              value={whatsapp}
            />
          </CountryDiv>

          <InputSignup
            type="email"
            placeholder={"E-mail"}
            onChange={event => setEmail(event.target.value)}
            value={email}
          />
          <CountryDiv>
            <InputSignup
              placeholder="Cidade"
              onChange={event => setCity(event.target.value)}
              value={city}
            />
            <InputSignup
              placeholder="UF"
              onChange={event => setUf(event.target.value)}
              style={{ width: 80, marginLeft: 8 }}
              value={uf}
            />
          </CountryDiv>
          <ButtonSubmit>Cadastre-se!</ButtonSubmit>
        </form>
      </ContainerForm>
    </Container>
  );
}
