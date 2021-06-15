import styled from "styled-components";
import bgImg from "../../assets/images/uk-city.jpeg";

export const ListCard = styled.div`
  height: 200px;
  position: relative;
  border-radius: 10px;
  border: 2px solid lightgray;
  width: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease;
  background-image: url(${bgImg});
  background-color: rgba(100, 100, 0, 0.5); /* Tint color */
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;

  &:hover {
    cursor: pointer;
    border: 2px solid yellow;
  }
`;

export const ListWrapper = styled.section`
  display: grid;
  margin: 2rem 0;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  justify-items: center;
  /* padding: 0 2rem; */

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const TextRow = styled.div`
  display: flex;
`;

export const MoreInfo = styled.h3`
  color: #e2e200;
`;
