import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { navMinWidthPx, hideNavWidthPx } from "../GlobalStyle";
import MoengPhoto from "../images/just-cat.jpeg";

const Wrapper = styled(motion.header)`
  z-index: 2;
  position: relative;
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
  margin-bottom: 15px;
  background-image: url(${MoengPhoto});
  background-size: 110%;
  background-position: center;
`;

const Description = styled.div`
  font-size: 0.9em;
  text-align: center;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled(motion.ul)`
  text-align: center;
  height: 40px;
  color: ${(props) => props.theme.LinksColor};

  &:hover {
    color: ${(props) => props.theme.FunctionsColor};
  }
`;

const itemVariants = {
  init: {
    fontSize: "1em",
  },
  hover: {
    fontSize: "1.2em",
  },
};

const HideAndShowToggle = styled(motion.button)`
  position: absolute;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  top: 12px;
  right: -50px;
  border: none;
  background-color: ${(props) => props.theme.Contrast};
  box-shadow: 0 0 5px 0 ${(props) => props.theme.WhiteBlackColor};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-in-out;

  svg {
    width: 20px;
    fill: ${(props) => props.theme.WhiteBlackColor};
  }

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: ${hideNavWidthPx}px) {
    display: none;
  }
`;

const navVariants = {
  hide: {
    left: -navMinWidthPx,
  },
  show: {
    left: 0,
  },
};

const navItems = [
  { to: "/introduce", name: "Introduce" },
  { to: "/tech-stacks", name: "Tech Stacks" },
  { to: "/career", name: "Career" },
];

function Header() {
  const navAnimation = useAnimation();
  const [navHidden, setNavHidden] = useState(true);
  const onNavToggleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    navToggle();
  };

  const navToggle = () => {
    if (window.innerWidth > hideNavWidthPx) return;
    setNavHidden((prev) => {
      if (prev) animateNavShow();
      else animateNavHide();
      return !prev;
    });
  };

  // 윈도우 리사이즈 이벤트
  window.onresize = () => {
    if (window.innerWidth > hideNavWidthPx) {
      setNavHidden(false);
      animateNavShow();
    } else {
      setNavHidden(true);
      animateNavHide();
    }
  };

  const animateNavHide = () => {
    navAnimation.start("hide");
  };
  const animateNavShow = () => {
    navAnimation.start("show");
  };
  return (
    <Wrapper variants={navVariants} animate={navAnimation}>
      <HideAndShowToggle onClick={onNavToggleClick}>
        {navHidden ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        )}
      </HideAndShowToggle>
      <Character>
        <Photo />
        <Description>
          풀스택 개발자
          <br />
          사진은 그냥 고양이
        </Description>
      </Character>
      <ItemContainer>
        {navItems.map((item) => (
          <Item
            key={item.name}
            variants={itemVariants}
            whileHover="hover"
            initial="init"
          >
            <Link to={item.to} onClick={navToggle}>
              {item.name}
            </Link>
          </Item>
        ))}
      </ItemContainer>
    </Wrapper>
  );
}

export default Header;
