import styled from "styled-components";
import TechStacksCardHolder from "../components/TechStacksCardHolder";
import tech from "../models/TechModel";

const Article = styled.article`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

function TechStacks() {
  return (
    <Article>
      {Object.keys(tech).map((category) => (
        <TechStacksCardHolder
          key={category}
          category={category}
          techStacks={tech[category]}
        />
      ))}
    </Article>
  );
}

export default TechStacks;
