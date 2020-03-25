import styled from "styled-components";
import { FiLogIn } from "react-icons/fi";
export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;
`;

export const Form = styled.form`
  margin-top: 100px;
`;

export const Title = styled.h1`
  color: #222a;
  font-size: 34px;
  margin-bottom: 32px;
`;

export const InputID = styled.input`
  font-weight: 500;
  padding-left: 20px;
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

export const SignupLink = styled.a.attrs({ href: "/register" })`
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: #41414d;
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;
`;

export const SignupIcon = styled(FiLogIn)`
  color: #e02041;
  margin-right: 10px;
`;
