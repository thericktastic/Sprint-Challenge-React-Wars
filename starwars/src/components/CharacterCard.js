import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  width: 250px;
  margin: 20px;
  padding: 20px;
  background: #feffd7;
  border: 1px solid #f3aa44;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 5px rgba(243, 170, 68, 0.3);
`;

const CharName = styled.h2`
  padding: 10px;
  height: 80px;
  font-family: "Space Mono", monospace;
  background: #D5DEE7;
  border-radius: 5px;
  border: 1px solid #AEB9CD;
  box-shadow: 0px 0px 5px 5px rgba(243, 170, 68, 0.2);
`;

export const CharacterCard = props => {
  return (
    <CardDiv>
      <CharName>{props.name}</CharName>
      <p>Year of Birth: {props.birth_year}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height} cm</p>
      <p>Mass: {props.mass} kg</p>
    </CardDiv>
  );
};
