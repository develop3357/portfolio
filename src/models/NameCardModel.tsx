import { ReactElement } from "react";
import CatPhoto from "../images/name-card-photo.jpeg";

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
  photo: CatPhoto,
  infos: [
    "개발자",
    "김지현 Jihyeon Kim",
    "풀스택",
    <a href="mailto:develop3357@gmail.com">develop3357@gmail.com</a>,
  ],
  message:
    "안녕하세요 풀스택 개발자입니다. 고양이를 키우고 있습니다만 이녀석들이 저를 늘 방해합니다..",
  links: [
    { text: "github", to: "https://github.com/develop3357" },
    { text: "blog", to: "https://velog.io/@develop3357" },
  ],
};

export default NameCardModel;
