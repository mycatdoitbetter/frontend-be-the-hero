import React, { useState } from "react";
import logoImg from "../../assets/logo.svg";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";
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
  InputDescription,
  InputDescriptionTextArea
} from "./styles";

export default function RecordIncident() {
  const history = useHistory();
  const ongId = localStorage.getItem("ongId");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  async function recordNewIncident(e) {
    e.preventDefault();
    const data = { title, description, value };
    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: ongId
        }
      });
      // history.push("/profile");
      toast.success(`O caso foi cadastrado com sucesso.`, {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        autoClose: 2000,
        onClose: history.push("/profile")
      });
    } catch (error) {
      toast.error(`Não foi possivel cadastrar caso.`, {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        autoClose: 2000
      });
    }
  }

  return (
    <Container>
      <ContainerForm>
        <Section>
          <img src={logoImg} alt="Be The Hero" />
          <Title>Cadastrar novo caso</Title>
          <Description>
            Descreva seu caso detalhadamente para encontrar o seu héroi.
          </Description>
          <GoBackLink to="/profile">
            <SignupIcon />
            Voltar ao perfil
          </GoBackLink>
        </Section>
        <form onSubmit={recordNewIncident}>
          <InputDescription
            placeholder="Título do caso"
            onChange={e => setTitle(e.target.value)}
            value={title}
          />
          <InputDescriptionTextArea
            placeholder="Descreva seu caso"
            onChange={e => setDescription(e.target.value)}
            value={description}
          />
          <InputDescription
            placeholder="Valor em reais"
            onChange={e => setValue(e.target.value)}
            value={value}
          />
          <ButtonSubmit>Cadastrar</ButtonSubmit>
        </form>
      </ContainerForm>
    </Container>
  );
}
