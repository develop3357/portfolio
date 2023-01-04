import { ReactElement } from "react";
import MyPhoto from "../images/myself.png";

interface ILink {
  to: string;
  text: string;
}

export interface INameCardModel {
  photo: string;
  infos: (string | ReactElement)[];
  message: string;
  links: ILink[];
}

const NameCardModel: INameCardModel = {
  photo: MyPhoto,
  infos: [
    "개발자",
    "김지현 Jihyeon Kim",
    "풀스택 4년차",
    <a href="mailto:develop3357@gmail.com">develop3357@gmail.com</a>,
  ],
  message: `안녕하세요 웹 개발자 김지현 입니다. 스타트업에서 얻은 경험으로 주어진 환경 내에서
    결과물을 완성해내는 데 능합니다. 조용하고 책임감이 강합니다. 꼼꼼한 편으로 시간이 충분히
    주어진다면 완성도를 끝없이 올리려고 노력합니다. 하지만 지나친 숙고를 경계하며, 
    최소 기능 제품을 빠르게 개발하는 것도 중요하다는 것을 이해하고 있습니다.
    경력에 공백기가 있어 만회하고자 매진하고 있습니다.`,
  links: [
    { text: "github", to: "https://github.com/develop3357" },
    { text: "blog", to: "https://velog.io/@develop3357" },
  ],
};

export default NameCardModel;
