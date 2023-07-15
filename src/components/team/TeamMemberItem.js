import React from "react";
import ParagraphText from "../paragraphTexts/ParagraphText";
import styled from "styled-components";
import themeList from "../../data/themeList";

const TeamMemberItemStyles = styled.div`
  .teamMember__img {
    margin-bottom: 2rem;
    img {
      border-radius: 18px;
    }
  }
  .teamMember__name {
    font-weight: 500;
    font-size: 1.8rem;
    color: ${({ theme: { theme } }) =>
      theme === themeList.light ? "var(--darkBlue_2)" : "var(--lightBlue_1)"};
  }
  @media only screen and (max-width: 768px) {
    .teamMember__img {
      margin-bottom: 1rem;
      img {
        max-width: 250px;
      }
    }
  }
`;

function TeamMemberItem({ img, name, title }) {
  return (
    <TeamMemberItemStyles>
      <div className="teamMember__img">
        <img src={img} alt={name} />
      </div>
      <ParagraphText className="teamMember__name">{name}</ParagraphText>
      <ParagraphText className="teamMember__subtitle">{title}</ParagraphText>
    </TeamMemberItemStyles>
  );
}

export default TeamMemberItem;
