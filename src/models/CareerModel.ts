import IconFramerMotion from "../images/logos/framer-motion.png";
import IconGithub from "../images/logos/github.jpeg";
import IconJenkins from "../images/logos/jenkins.png";
import IconJquery from "../images/logos/jquery.jpeg";
import IconJsp from "../images/logos/jsp.png";
import IconMybatis from "../images/logos/mybatis.png";
import IconPostgresql from "../images/logos/postgresql.png";
import IconReactQuery from "../images/logos/react-query.png";
import IconReact from "../images/logos/react.png";
import IconRecoil from "../images/logos/recoil.png";
import IconRedmine from "../images/logos/redmine.png";
import IconSpringBoot from "../images/logos/spring-boot.png";
import IconSpring from "../images/logos/spring.jpeg";
import IconStyledComponents from "../images/logos/styled-components.png";
import IconTrello from "../images/logos/trello.jpeg";
import IconTypescript from "../images/logos/typescript.jpeg";
import IconBootstrap from "../images/logos/bootstrap.png";
import IconAws from "../images/icons/aws.png";
import IconAwsEc2 from "../images/icons/amazon-ec2.png";
import IconAwsPostgresql from "../images/icons/amazon-postgresql.png";
import IconAwsS3 from "../images/icons/amazon-s3.png";
import IconAwsRds from "../images/icons/amazon-rds.png";
import IconFire from "../images/icons/fire.png";
import IconFireExtinguisher from "../images/icons/fire-extinguisher.png";
import IconDiamondRing from "../images/icons/diamond-ring.jpeg";
import IconCto from "../images/icons/cto.png";
import IconQuestionMark from "../images/icons/question-mark.png";
import IconVelog from "../images/logos/velog.png";
import IconHumanResource from "../images/icons/human-resource.jpeg";

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
  subject: string;
  icons?: string[];
  description: string;
}

export const myCareer: IStep[] = [
  {
    name: "연세대학교 졸업",
    chronicle: "신촌캠 도시공학과. 비전공.",
  },
  {
    name: "전직",
    chronicle: "국비 학원에서 웹개발 배우고 전직",
  },
  {
    name: "핀테크 스타트업",
    chronicle: `1호 개발자로 입사해 3년 4개월 간 재직. 2인 개발팀으로 소액해외송금
      서비스 개발, 이후 운영 및 유지보수. 당시 월 매출 300억원.`,
    brief: `회사 1호 개발자로 입사. 소액해외송금 서비스 개발 1년, 이후 2년 이상 운영 및 유지보수.
      소규모 개발팀(2인)으로 프론트, 백엔드, DB모델링, DevOps 구축, 결제 모듈 연동,
      서버 인프라 구축 및 관리를 했으며 선임 개발자로서 신규 개발자 채용을 했다. 회사의
      주요 서비스인 소액해외송금업 영위를 위해 전자금융법, 전자금융법시행령에 입각한 인프라
      구축, 금융감독원의 전산설비 실사 및 최종 라이센스 취득의 전과정에서 개발 및 전산설비
      부문을 책임지고 담당했다.`,
    start: "2016. 5.",
    end: "2019. 8.",
    descriptions: [
      {
        subject: "백엔드",
        icons: [IconSpring, IconSpringBoot, IconMybatis, IconPostgresql],
        description: `Spring, Spring Boot 사용. 로그인은 Spring Security
          활용했고 DB는 MyBatis, PostgreSQL 사용했다. 기본적으로 모놀리식으로 구성하되
          외부와 연동되는 부분, 결제 모듈과 해외 파트너 API 연동부는 각각 별도의 WAS로 가동했다.
          10여개의 파트너사와 연동하여 50여개의 국가로 송금하는 서비스를 구축하기 위해,
          각각의 데이터 모델을 표준화하고 팩토리 패턴을 사용해 처리했다.
          `,
      },
      {
        subject: "프론트",
        icons: [IconJsp, IconJquery, IconBootstrap],
        description: `JSP, jQuery, Bootstrap 사용. 사용자 페이지,
          관리자 페이지 전체 개발. 사용자 페이지에서는 회원 가입부터 송금 진행까지,
          관리자 페이지에서는 회원 관리, 신분증 인증, 송금 관리, 기간별 매출/수익 통계 제공.`,
      },
      {
        subject: "DevOps",
        icons: [IconGithub, IconJenkins, IconRedmine, IconTrello],
        description: `사내 개발 서버에 git 설치해서 형상 관리,
          jenkins로 배포 자동화. 협업 툴은 redmine, trello 등을 사용했다.`,
      },
      {
        subject: "개발팀 관리",
        icons: [IconHumanResource],
        description: `2인 개발자 체제에서 선임 개발자로서
          경영진과 다른 직군과의 의사소통을 맡아 수행했다. 개발팀 업무 분배 및 일정 관리,
          신규 개발자 채용을 했다. 인턴 개발자 교육을 하고 업무를 분배했다.`,
      },
      {
        subject: "서버 인프라 구축, 관리, 운영",
        icons: [IconAws, IconAwsEc2, IconAwsPostgresql, IconAwsS3, IconAwsRds],
        description: `초창기에는 AWS에서 EC2,
          RDS, S3를 사용했다. 앞단에 nginx를 구축하고 SSL 인증서 설치, 여러 WAS로
          proxy pass했다. 차후에는 서버 구입해서 OpenStack으로 가상 클라우드 구성하고
          동일한 방법으로 서버 구성한 다음 IDC로 직접 운반하여 입주시켰다.`,
      },
      {
        subject: "서비스 장애 대응",
        icons: [IconFireExtinguisher, IconFire],
        description: `2018년 화재 발생했던 KT 아현 지사에 회사 서버가
          입주해있었다. 당시에 서버컴퓨터를 2u 2대, 1u 3대를 넣고 동일한 WAS를 두 개씩
          다른 서버에 분산해서 이중화를 했지만 IDC 화재로 시스템 전체가 영향을 받는 재난은
          예상하지 못 했다. AWS에 인스턴스 가동하고 데이터베이스 옮겨서 임시 가동을 준비했다.`,
      },
    ],
  },
  {
    name: "휴직기",
    start: "2019. 9.",
    end: "2022. 11.",
    chronicle:
      "반려자를 만나 인생의 황금기를 보냄. 개발보다 본인 인생에 집중한 삶.",
    brief:
      "신생 핀테크 스타트업에 CTO로 동참할 예정이었으나 창업자의 자금 조달 문제로 무산됨.",
    descriptions: [
      {
        subject: "휴식",
        icons: [IconDiamondRing],
        description: `인생의 반려자를 만났고, 다시 오지 않을 시기라고 생각해 반려자와
          추억을 만드는 데 집중했다. 곧 결혼하려고 준비 중이다. 지식을 잃어버리지는 않았지만
          개발자로서 발전은 없었다.`,
      },
      {
        subject: "CTO 제안",
        icons: [IconCto, IconQuestionMark],
        description: `신생 스타트업에서 CTO이자 창업 멤버로 동참할 것을 제안 받았는데,
          처음에는 고사했으나 나중에는 결국 수락했다. 거절한 이유는 본인의 경력이나 실력으로 CTO
          업무를 수행하는게 적절하지 않다고 생각했기 때문이다. 회사에서 당장 필요한 업무는 모두
          해냈겠지만 개발자로서 발전하기는 어렵다고 봤다. 이전 회사에서도 선임 개발자로서
          보고 배울 선배가 없었는데, CTO가 되면 똑같은 상황이 될 것이기 때문이다.
          주니어가 서비스 전체를 개발하고 운영하는 것은 스타트업이라는 특수성 때문에 있을 수 있는
          일이라고 생각한다. 금융감독원으로부터 업무 라이센스 취득 과정에서 전산설비 부문 전체를
          맡아 진행했고 서류 준비부터 실사까지 모두 무사히 마쳤다는 점도 좋게 보였던 것 같다.
          하지만 이 일은 아쉽게도 창업자의 사정으로 창업 자체가 무산되었다.`,
      },

      {
        subject: "휴직 끝",
        icons: [
          IconTypescript,
          IconReact,
          IconReactQuery,
          IconRecoil,
          IconStyledComponents,
          IconFramerMotion,
        ],
        description: `휴식기를 끝내는 첫걸음으로 프론트엔드 스킬을 최신화하려고 했다.
          이전에는 FE개발에서 JSP 기반으로 jQuery, Bootstrap만 사용했었기 때문에
          너무 올드하고 요즘 기술들에 비해서 생산성이 떨어졌다. React와 Vue 중에서
          개인적 첫인상 선호는 Vue 였지만 점유율까지 고려해서 React를 먼저
          배워보기로 결정했다.`,
      },
    ],
  },
  {
    name: "현재",
    start: "2022. 12.",
    chronicle: "개발하고, 공부하고, 사이드 프로젝트 수행.",
    descriptions: [
      {
        subject: "React",
        icons: [IconReact],
        description: `리액트로 프로젝트 몇 개를 만들어보고 나서는 처음에 가졌던 부정적 인식이 모두
          개선됐다. Virtual DOM이 돌아가는 방식이 익숙하지 않아서 생명주기나 State
          관리를 배우고 Immutable에 대해 정리해보는 시간이 필요했다. 단순 예제 프로젝를
          벗어나자마자 전역 State 관리 방법론이 필요하다고 느꼈고 Recoil을 사용해봤다.
          이외에도 react-hook-form이나 react query,
          framer-motion처럼 생산성을 높여주는 리액트 도구들을 사용했다. 이 과정을
          거치고 난 후 이전에 비해 프론트엔드 생산성이 훨씬 높아졌다고 느낀다.`,
      },
      {
        subject: "TypeScript",
        icons: [IconTypescript],
        description: `리액트를 사용해보면서 타입스크립트도 같이 사용해봤다.
          원래 강형언어인 자바를 주로 사용해서 타입이나 클래스, 다형성 같은 개념은 익숙했다.
          타입을 직접 지정해주고, *.d.ts 파일을 사용해보는 것만 조금 연습해본 다음에는 쉽게 사용할
          수 있었다. JS로 개발할 때 단순 오타로 적지 않은 시간을 헤매본 경험이 있다보니 휴먼 에러를
          상당수 방지해주는 점은 상당한 장점이라고 느꼈다. IDE에서 자동완성이 잘 된다는 점도
          생산성을 크게 올려주는 요소라고 생각한다.`,
      },
      {
        subject: "개발",
        icons: [IconGithub, IconVelog],
        description: `개발 블로그를 새로 개설하고 git에 예제 프로젝트를 몇 개씩 올리기 시작했다.
          공백기로 빠진 만큼 다시 채우고 있는 중이다. 구직 활동에 있어서는 본인의 현재 실력을
          정확하게 드러내는게 중요하다고 생각한다.`,
      },
    ],
  },
];

const CareerModel = {};

export default CareerModel;
