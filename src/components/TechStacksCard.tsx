import styled from "styled-components";

const Wrapper = styled.div`
  width: 64px;
`;

const Logo = styled.div<{ url: string }>`
  width: 64px;
  height: 64px;
  border-radius: 10px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  background-color: white;
`;

const Text = styled.div`
  padding: 20px 0;
  font-size: 12px;
  text-align: center;
`;

interface ITechStacksCardProps {
  logo: string;
  name: string;
}

function TechStacksCard({ logo, name }: ITechStacksCardProps) {
  return (
    <Wrapper>
      <Logo url={logo} />
      <Text>{name}</Text>
    </Wrapper>
  );
}

export default TechStacksCard;
