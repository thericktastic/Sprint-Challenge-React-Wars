import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  width: 300px;
  margin: 20px;
  padding: 20px;
  background: #feffd7;
  border: 1px solid #f3aa44;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 5px rgba(243, 170, 68, 0.3);
`;

const CharName = styled.h2`
  padding: 10px;
  font-family: "Space Mono", monospace;
  color: #443E3E;
  background: #D5DEE7;
  border-radius: 5px;
  border: 1px solid #AEB9CD;
  box-shadow: 0px 0px 5px 5px rgba(243, 170, 68, 0.2);
`;

const CharText = styled.p`
    color: #443E3E;
`;

export const CharacterCard = props => {
  return (
    <CardDiv>
      <CharName>{props.name}</CharName>
      <CharText>Year of Birth: {props.birth_year}</CharText>
      <CharText>Gender: {props.gender}</CharText>
      <CharText>Height: {props.height} cm</CharText>
      <CharText>Mass: {props.mass} kg</CharText>
    </CardDiv>
  );
};
