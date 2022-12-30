import styled from "styled-components";
import { ITechStack } from "../models/TechModel";
import TechStacksCard from "./TechStacksCard";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.Contrast};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 5px 5px 15px 5px ${(props) => props.theme.Highlight};
`;

const Category = styled.div`
  font-size: 20px;
  margin-bottom: 25px;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(72px, 1fr));
  gap: 15px;
`;

interface ITechStacksCardHolderProps {
  category: string;
  techStacks: ITechStack[];
}

function TechStacksCardHolder({
  category,
  techStacks,
}: ITechStacksCardHolderProps) {
  return (
    <Wrapper>
      <Category>{category}</Category>
      <Cards>
        {techStacks.map((stack) => (
          <TechStacksCard
            key={stack.name}
            name={stack.name}
            logo={stack.logo}
          />
        ))}
      </Cards>
    </Wrapper>
  );
}

export default TechStacksCardHolder;
