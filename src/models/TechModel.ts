import LogoCss from "../images/css.png";
import LogoExpressjs from "../images/expressjs.png";
import LogoFramerMotion from "../images/framer-motion.png";
import LogoGithub from "../images/github.jpeg";
import LogoGulp from "../images/gulp.png";
import LogoJava from "../images/java.png";
import LogoJavascript from "../images/javascript.jpeg";
import LogoJenkins from "../images/jenkins.png";
import LogoJquery from "../images/jquery.jpeg";
import LogoJsp from "../images/jsp.png";
import LogoMybatis from "../images/mybatis.png";
import LogoNodejs from "../images/nodejs.png";
import LogoPostgresql from "../images/postgresql.png";
import LogoReactQuery from "../images/react-query.png";
import LogoReact from "../images/react.png";
import LogoRecoil from "../images/recoil.png";
import LogoRedmine from "../images/redmine.png";
import LogoScss from "../images/scss.png";
import LogoSlack from "../images/slack.jpeg";
import LogoSpringBoot from "../images/spring-boot.png";
import LogoSpring from "../images/spring.jpeg";
import LogoStyledComponents from "../images/styled-components.png";
import LogoTrello from "../images/trello.jpeg";
import LogoTypescript from "../images/typescript.jpeg";

export interface ITechStack {
  name: string;
  logo: string;
}

interface ITechStacks {
  [category: string]: ITechStack[];
}

const tech: ITechStacks = {
  Languages: [
    { name: "Java", logo: LogoJava },
    { name: "JavaScript", logo: LogoJavascript },
    { name: "TypeScript", logo: LogoTypescript },
  ],
  Backend: [
    { name: "Spring", logo: LogoSpring },
    { name: "Spring Boot", logo: LogoSpringBoot },
    { name: "MyBatis", logo: LogoMybatis },
    { name: "NodeJS", logo: LogoNodejs },
    { name: "ExpressJS", logo: LogoExpressjs },
  ],
  Frontend: [
    { name: "React", logo: LogoReact },
    { name: "Recoil", logo: LogoRecoil },
    { name: "Styled-Components", logo: LogoStyledComponents },
    { name: "React Query", logo: LogoReactQuery },
    { name: "Framer-Motion", logo: LogoFramerMotion },
    { name: "JSP", logo: LogoJsp },
    { name: "jQuery", logo: LogoJquery },
    { name: "CSS", logo: LogoCss },
    { name: "SCSS", logo: LogoScss },
  ],
  Database: [{ name: "PostgreSQL", logo: LogoPostgresql }],
  DevOps: [
    { name: "Github", logo: LogoGithub },
    { name: "Jenkins", logo: LogoJenkins },
    { name: "Gulp", logo: LogoGulp },
  ],
  Tools: [
    { name: "Slack", logo: LogoSlack },
    { name: "Trello", logo: LogoTrello },
    { name: "Redmine", logo: LogoRedmine },
  ],
};

export default tech;
