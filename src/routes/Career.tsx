import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { myCareer } from "../models/CareerModel";
import { useScroll } from "framer-motion";
import { useRouteError } from "react-router-dom";
import { useEffect, useState } from "react";

const Article = styled.article`
  display: flex;
  flex-direction: column;
`;

const ChronicleWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  box-shadow: 0 5px 15px 0 ${(props) => props.theme.Contrast};
`;

const Chronicle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-left: 30px;
  color: ${(props) => props.theme.Text};
`;

const VerticalLine = styled.div`
  position: absolute;
  left: -20px;
  height: 100%;
  border: 1px solid ${(props) => props.theme.Text};
`;

const dotSize = 18; // unit: px

const Dot = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  left: ${-19 - dotSize / 2}px;
  border: 1px solid ${(props) => props.theme.LinksColor};
  width: ${dotSize}px;
  height: ${dotSize}px;
  border-radius: ${dotSize / 2}px;
  background-color: ${(props) => props.theme.Text};
`;

const Period = styled.span`
  font-size: 0.7em;
  color: ${(props) => props.theme.KeywordsColor};
`;

const Item = styled.div`
  position: relative;
  min-width: 240px;
  max-width: 480px;
  padding: 15px;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.Contrast};
  }
`;

const ChronicleBottomShadow = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.Background} 0%,
    ${(props) => props.theme.Contrast} 100%
  );
`;

const ScrollDownGuide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 30px;
    height: 30px;
    fill: ${(props) => props.theme.WhiteBlackColor};
  }

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px 20px 30px;
`;

const Step = styled.section`
  position: relative;
  background-color: ${(props) => props.theme.Contrast};
  padding: 30px 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Name = styled.div`
  font-size: 1.25em;
  color: ${(props) => props.theme.LinksColor};
`;
const Brief = styled.div`
  font-size: 0.9em;
`;

const Description = styled.div`
  background-color: ${(prop) => prop.theme.Background};
  padding: 20px 15px;
  border-radius: 5px;
`;

const BackToTop = styled.span`
  margin-top: 10px;
  align-self: flex-end;

  &:hover {
    color: ${(props) => props.theme.FunctionsColor};
  }
`;

function Career() {
  const scrollDownGuideVisibleProportion = 0;
  const [scrollDownGuideVisible, setScrollDownGuideVisible] = useState(true);
  const { scrollY } = useScroll();
  useEffect(() => {
    scrollY.on("change", () => {
      const visibleHeightMax =
        window.innerHeight * scrollDownGuideVisibleProportion;
      setScrollDownGuideVisible(() => {
        return scrollY.get() <= visibleHeightMax ? true : false;
      });
    });
  }, [scrollY]);

  return (
    <Article>
      <ChronicleWrapper>
        <Chronicle>
          <VerticalLine />
          {myCareer.map((step, index) => (
            <HashLink smooth to={"#" + step.name} key={index}>
              <Item>
                <Dot />
                <Name>
                  {step.name}
                  {(step.start || step.end) && (
                    <Period>
                      &nbsp;
                      {(step.start || "") + " ~ " + (step.end || "")}
                    </Period>
                  )}
                </Name>
                {step.chronicle}
              </Item>
            </HashLink>
          ))}
        </Chronicle>
        <ChronicleBottomShadow>
          {scrollDownGuideVisible && (
            <HashLink
              smooth
              to={
                // 첫번째 step으로 스크롤 내리는 HashLink
                "#" +
                  myCareer.find((step) => step.brief || step.descriptions)
                    ?.name || ""
              }
            >
              <ScrollDownGuide>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </ScrollDownGuide>
            </HashLink>
          )}
        </ChronicleBottomShadow>
      </ChronicleWrapper>
      <StepWrapper>
        {myCareer.map(
          (step, index) =>
            (step.brief || step.descriptions) && (
              <Step key={index} id={step.name}>
                <Name>{step.name}</Name>
                <Brief>{step.brief}</Brief>
                {step.descriptions?.map((desc, index) => (
                  <Description key={index}>{desc.description}</Description>
                ))}
                <BackToTop>
                  <HashLink smooth to="#top">
                    ⬆Top
                  </HashLink>
                </BackToTop>
              </Step>
            )
        )}
      </StepWrapper>
    </Article>
  );
}

export default Career;
