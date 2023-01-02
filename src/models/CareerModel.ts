interface YearMonth {
  year: number;
  month?: number;
}

interface IStep {
  name: string;
  chronicle: string; // 연대기에 들어갈 짧은 문장
  brief?: string; // 상세 내용 박스의 상단에 들어갈 요약
  start?: YearMonth | string;
  end?: YearMonth | string;
  descriptions?: Description[]; // 상세 내용 박스에서 각가 분리된 블록으로 들어갈 세부 내용들
}

interface Description {
  icons?: string[];
  description: string;
}

export const myCareer: IStep[] = [
  {
    name: "연세대학교 졸업",
    chronicle: "신촌캠. 비전공.",
  },
  {
    name: "고양이 키우기",
    chronicle: "많은 고양이와 교감을 나눴다.",
    brief:
      "고양이와 상생하는 방법을 연구했다. 길거리 최상위 포식자인 고양이가 조류나 소동물을 재미로 사냥하거나 도시 경관을 해치고 질병을 퍼뜨리는 부작용을 완하하려고 노력하고 있다",
    descriptions: [
      {
        description:
          "랙돌을 전문적으로 연구했다. 랙돌은 사람이 감싸안으면 축 늘어진다고 하여 붙여진 명칭이며 1900년대초 앤 베이커에 의해 만들어진 종이다. 중대형에 속하며 남아 6~10kg, 여아 3~7kg에 달한다. 대체로 온순하며 사람을 잘 따르고 느긋하고 게으른 성격 탓에 그루밍을 소홀히 하는 경우가 많다고 한다.",
      },
      {
        description:
          "브리티쉬에 관심이 많다. 장화신은 고양이에 나오는 브리티쉬 숏헤어라는 종이 유명한데, 털이 긴 버전인 브리티쉬 롱헤어도 있다. 롱헤어는 열성 유전자로 낮은 비율로 가끔 탄생한다. 랙돌 못지 않게 온순하고 사람을 잘 따르는 성격이다. 다른 예민한 고양이 종에 비해서 키우기가 아주 수월한 편이다.",
      },
    ],
  },
  {
    name: "전직",
    chronicle: "국비 학원에서 웹개발 배우고 전직",
  },
  {
    name: "스타트업",
    chronicle: "창업 멤버로 입사, 회사 전체 서비스를 개발하고 운영함.",
    brief: "창업 멤버로 입사, 회사 전체 서비스를 개발하고 운영함.",
    start: "2022. 5.",
    end: "2022. 11.",
    descriptions: [
      {
        description: "프론트: React 사용.",
      },
      {
        description: "백엔드: Spring Boot 사용.",
      },
    ],
  },
  {
    name: "현재",
    start: "2022. 12.",
    chronicle: "이직 준비 중",
    descriptions: [
      {
        description: "여러 가지의 사이드 프로젝트를 진행하고 있다.",
      },
    ],
  },
];

const CareerModel = {};

export default CareerModel;
