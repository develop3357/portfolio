import LogoCss from "../images/logos/css.png";
import LogoExpressjs from "../images/logos/expressjs.png";
import LogoFramerMotion from "../images/logos/framer-motion.png";
import LogoGithub from "../images/logos/github.jpeg";
import LogoGulp from "../images/logos/gulp.png";
import LogoJava from "../images/logos/java.png";
import LogoJavascript from "../images/logos/javascript.jpeg";
import LogoJenkins from "../images/logos/jenkins.png";
import LogoJquery from "../images/logos/jquery.jpeg";
import LogoJsp from "../images/logos/jsp.png";
import LogoMybatis from "../images/logos/mybatis.png";
import LogoNodejs from "../images/logos/nodejs.png";
import LogoPostgresql from "../images/logos/postgresql.png";
import LogoReactQuery from "../images/logos/react-query.png";
import LogoReact from "../images/logos/react.png";
import LogoRecoil from "../images/logos/recoil.png";
import LogoRedmine from "../images/logos/redmine.png";
import LogoScss from "../images/logos/scss.png";
import LogoSlack from "../images/logos/slack.jpeg";
import LogoSpringBoot from "../images/logos/spring-boot.png";
import LogoSpring from "../images/logos/spring.jpeg";
import LogoStyledComponents from "../images/logos/styled-components.png";
import LogoTrello from "../images/logos/trello.jpeg";
import LogoTypescript from "../images/logos/typescript.jpeg";

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
