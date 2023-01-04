import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { myCareer } from "../models/CareerModel";
import { motion, useScroll } from "framer-motion";
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
  align-items: center;
  min-height: inherit;
`;

const Chronicle = styled.div`
  top: 0;
  bottom: 0;
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-left: 50px;
  margin-right: 20px;
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

const Item = styled(motion.div)`
  position: relative;
  min-width: 240px;
  max-width: 480px;
  padding: 15px;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.Contrast};
    transition: 0.2s ease-in-out;
  }
`;

const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 150px;
  padding: 80px 20px 30px;
`;

const Step = styled.section`
  max-width: 600px;
  position: relative;
  border: 1px solid ${(props) => props.theme.Border};
  background: linear-gradient(
    160deg,
    ${(props) => props.theme.SelectionBackground} 0%,
    ${(props) => props.theme.Contrast} 8%
  );
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
  background-color: ${(prop) => prop.theme.SecondBackground};
  color: ${(prop) => prop.theme.Text};
  padding: 20px 15px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  text-indent: 1.2em;
  line-height: 1.5;
`;

const DescriptionTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
`;

const Subject = styled.div`
  text-indent: 0;
  font-size: 1.1em;
  color: ${(props) => props.theme.FunctionsColor};
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 10px;
`;

const Icon = styled.div<{ url: string }>`
  background-image: url(${(props) => props.url});
  background-position: center;
  background-size: cover;
  background-color: white;
  width: 36px;
  height: 36px;
  border-radius: 5px;
`;

const BackToTop = styled.span`
  position: fixed;
  z-index: 2;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.Contrast};
  box-shadow: 0 0 5px 0 ${(props) => props.theme.WhiteBlackColor};
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 24px;
    fill: ${(props) => props.theme.WhiteBlackColor};
  }

  &:hover {
    cursor: pointer;
  }
`;

const ScrollDownGuide = styled.div`
  height: 50px;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-in-out;

  svg {
    width: 30px;
    height: 30px;
    fill: ${(props) => props.theme.Foreground};
  }

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

// 스크롤 다운 가이드가 표시되지 않을 때 넣을 공간 (높이가 갑자기 사라지면 버벅거리는 느낌이 듦)
const ScrollDownGuideSpace = styled.div`
  width: 100%;
  height: 50px;
`;

function Career() {
  const scrollDownGuideVisibleProportion = 0; // 이 비율 이상 스크롤 하면 안 보이도록 함 (0~1)
  const [scrollDownGuideVisible, setScrollDownGuideVisible] = useState(true);
  const [backToTopVisible, setBackToTopVisible] = useState(false);
  const { scrollY } = useScroll();
  useEffect(() => {
    scrollY.on("change", () => {
      // 스크롤 다운 가이드 표시
      const visibleHeightMax =
        window.innerHeight * scrollDownGuideVisibleProportion;
      setScrollDownGuideVisible(
        scrollY.get() <= visibleHeightMax ? true : false
      );
      // back to top 버튼 표시
      if (scrollY.get() > window.innerHeight) {
      }
      setBackToTopVisible(scrollY.get() > window.innerHeight ? true : false);
    });
  }, [scrollY]);

  return (
    <Article>
      {backToTopVisible && (
        <HashLink smooth to="#top">
          <BackToTop>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
            </svg>
          </BackToTop>
        </HashLink>
      )}
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
        {scrollDownGuideVisible ? (
          <HashLink
            style={{ width: "100%" }}
            // 첫번째 step으로 스크롤 내리는 HashLink
            smooth
            to={
              "#" +
                myCareer.find((step) => step.brief || step.descriptions)
                  ?.name || ""
            }
          >
            <ScrollDownGuide>
              <motion.svg
                animate={{ y: [0, -18, 0] }}
                transition={{
                  repeat: Infinity,
                  ease: "easeInOut",
                  duration: 0.8,
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </motion.svg>
            </ScrollDownGuide>
          </HashLink>
        ) : (
          <ScrollDownGuideSpace />
        )}
      </ChronicleWrapper>
      <StepWrapper>
        {myCareer.map(
          (step, index) =>
            (step.brief || step.descriptions) && (
              <Step key={index} id={step.name}>
                <Name>{step.name}</Name>
                <Brief>{step.brief}</Brief>
                {step.descriptions?.map((desc, index) => (
                  <Description key={index}>
                    <DescriptionTop>
                      <Subject>{desc.subject}</Subject>
                      <IconsContainer>
                        {desc.icons?.map((icon, index) => (
                          <Icon key={index} url={icon} />
                        ))}
                      </IconsContainer>
                    </DescriptionTop>
                    {desc.description}
                  </Description>
                ))}
              </Step>
            )
        )}
      </StepWrapper>
    </Article>
  );
}

export default Career;
