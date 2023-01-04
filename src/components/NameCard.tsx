import styled from "styled-components";
import ExternalLink from "../components/ExternalLink";
import { INameCardModel } from "../models/NameCardModel";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.Background};
  color: ${(props) => props.theme.WhiteBlackColor};
  border: 1px solid ${(props) => props.theme.Border};
  border-radius: 10px;
  padding: 35px 25px 20px;
  box-shadow: 5px 5px 15px 5px ${(props) => props.theme.SelectionBackground};
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  font-size: 14px;
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Photo = styled.div<{ imageUrl: string }>`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  place-self: center;
  box-shadow: 0 0 5px 0 ${(props) => props.theme.Contrast};
`;

const InfoUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
  margin-left: 20px;
`;

const InfoLi = styled.li``;

const Message = styled.div`
  line-height: 1.3;
`;

const Links = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;

interface INameCardProps {
  nameCard: INameCardModel;
}

function NameCard({ nameCard }: INameCardProps) {
  return (
    <Wrapper>
      <Top>
        <Photo imageUrl={nameCard.photo} />
        <InfoUl>
          {nameCard.infos.map((info, index) => (
            <InfoLi key={index}>{info}</InfoLi>
          ))}
        </InfoUl>
      </Top>
      <Bottom>
        <Message>{nameCard.message}</Message>
        <Links>
          {nameCard.links.map((link, index) => (
            <ExternalLink key={index} text={link.text} to={link.to} />
          ))}
        </Links>
      </Bottom>
    </Wrapper>
  );
}

export default NameCard;
