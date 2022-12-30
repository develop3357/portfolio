import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: ${(props) => props.theme.Contrast};
  color: ${(props) => props.theme.WhiteBlackColor};
  border-right: 1px solid ${(props) => props.theme.Border};
`;

const Character = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

const Photo = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background-color: white;
  margin-bottom: 15px;
`;

const Description = styled.div``;

const Item = styled(motion.ul)`
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
  color: ${(props) => props.theme.LinksColor};
`;

function Header() {
  return (
    <Wrapper>
      <Character>
        <Photo />
        <Description>I am a cat</Description>
      </Character>
      <Item>
        <Link to="/introduce">Introduce</Link>
      </Item>
      <Item>
        <Link to="/tech-stacks">Tech Stacks</Link>
      </Item>
      <Item>
        <Link to="/career">Career</Link>
      </Item>
    </Wrapper>
  );
}

export default Header;
