import styled from "styled-components";
import NameCard from "../components/NameCard";
import NameCardModel from "../models/NameCardModel";
import WallPaper from "../images/wall-e.png";

const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  overflow-y: hidden;

  img {
    z-index: -1;
    position: absolute;
    bottom: 10px;
    right: 20px;
    width: 160px;
  }

  @media screen and (max-width: 1399px) {
    #wall-paper {
      display: none;
    }
  }
`;

function Introduce() {
  return (
    <Article>
      <NameCard nameCard={NameCardModel} />
      <img src={WallPaper} alt="hire me" id="wall-paper" />
    </Article>
  );
}

export default Introduce;
