import styled from "styled-components";
import { FiArrowLeftCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerForm = styled.div`
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
`;

export const GoBackLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: #41414d;
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;
`;

export const ButtonSubmit = styled.button.attrs({ type: "submit" })`
  width: 100%;
  height: 60px;
  background: #e02041;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
`;

export const SignupIcon = styled(FiArrowLeftCircle)`
  color: #e02041;
  margin-right: 10px;
`;

export const InputDescription = styled.input`
  padding-left: 15px;
  margin-top: 5px;
`;

export const InputDescriptionTextArea = styled.textarea`
  padding: 15px;
  margin-top: 5px;
  width: 100%;
  resize: vertical;
  border-radius: 8px;
  color: #333;
  border: 1px solid #dcdce6;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 380px;
`;

export const Title = styled.h1`
  color: #222d;
  margin: 64px 0 10px 10px;
  font-size: 32px;
`;

export const Description = styled.p`
  color: #222b;
  line-height: 23px;
  font-size: 18px;
  padding: 10px;
`;
