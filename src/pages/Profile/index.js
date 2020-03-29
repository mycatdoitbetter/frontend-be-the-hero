import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ButtonLink,
  PowerIcon,
  PowerButton,
  Logo,
  Container,
  Header,
  WelcomeMessageSpan,
  TrashButton,
  TrashIcon,
  ContainerCards,
  CardList,
  Card,
  TitleText,
  DescriptionText
} from "./styles";
export default function Profile() {
  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");
  const [incidents, setIncidents] = useState([]);
  const history = useHistory();
  useEffect(() => {
    api
      .get("profile", {
        headers: {
          Authorization: ongId
        }
      })
      .then(response => {
        setIncidents(response.data.incidents);
      });
  }, [ongId]);

  async function deleteIncident(incidentID) {
    try {
      await api.delete(`incidents/${incidentID}`, {
        headers: {
          Authorization: ongId
        }
      });
      setIncidents(incidents.filter(incident => incident.id !== incidentID));
      toast.success(`O caso foi excluido com sucesso.`, {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        autoClose: 2000
      });
    } catch (error) {
      toast.error(`Não foi possivel excluir o caso.`, {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        autoClose: 2000
      });
    }
  }

  async function logout() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <Container>
      <Header>
        <Logo />
        <WelcomeMessageSpan>Bem vindo, {ongName}</WelcomeMessageSpan>
        <ButtonLink to="/incidents/new">Cadastrar novo caso</ButtonLink>
        <PowerButton onClick={() => logout()}>
          <PowerIcon />
        </PowerButton>
      </Header>

      <ContainerCards>Casos Cadastrados</ContainerCards>
      <CardList>
        {incidents.map(incident => {
          return (
            <Card key={incident.id}>
              <TitleText>CASO:</TitleText>
              <DescriptionText>{incident.title}</DescriptionText>

              <TitleText>DESCRIÇÃO:</TitleText>
              <DescriptionText>{incident.description}</DescriptionText>

              <TitleText>VALOR:</TitleText>
              <DescriptionText>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                }).format(incident.value)}
              </DescriptionText>
              <TrashButton onClick={() => deleteIncident(incident.id)}>
                <TrashIcon />
              </TrashButton>
            </Card>
          );
        })}
      </CardList>
    </Container>
  );
}
