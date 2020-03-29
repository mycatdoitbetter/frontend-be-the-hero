import styled from "styled-components";
import { FiPower, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.svg";

export const ButtonLink = styled(Link)`
  width: 260px;
  height: 60px;
  background: #e02041;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-left: auto;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  &:hover {
    opacity: 0.9;
  }
`;

export const PowerIcon = styled(FiPower)`
  color: #e02041;
`;

export const PowerButton = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 4px;
  border: 1px solid #dcdce6;
  background: transparent;
  margin-left: 16px;
  &:hover {
    border-color: #999;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
`;

export const WelcomeMessageSpan = styled.span`
  font-size: 20px;
  color: #333;
  margin-left: 24px;
`;

export const Logo = styled.img.attrs({ src: logoImg, alt: "Be The Hero" })`
  height: 64px;
`;

export const TrashButton = styled.button`
  position: absolute;
  right: 24px;
  top: 24px;
  background: transparent;
  border: 0;
`;

export const TrashIcon = styled(FiTrash2)`
  size: 20px;
  color: #e02041;
  &:hover {
    opacity: 0.5;
    opacity: 0.5;
  }
`;

export const ContainerCards = styled.h1`
  margin-top: 80px;
  margin-bottom: 24px;
  color: #333;
`;

export const CardList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  list-style: none;
`;

export const Card = styled.li`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  position: relative;
`;

export const TitleText = styled.strong`
  display: block;
  font-size: 18px;
  margin-bottom: 16px;
  color: #41414d;
`;

export const DescriptionText = styled.p`
  color: #737380;
  font-weight: 400;
  margin-bottom: 16px;
  line-height: 21px;
  font-size: 16px;
`;
