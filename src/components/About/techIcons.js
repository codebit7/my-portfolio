import { LuCode2, LuSmartphone } from 'react-icons/lu';
import { TbApi } from 'react-icons/tb';
import {
  SiHtml5, SiCss3, SiBootstrap, SiReact, SiRedux, SiNodedotjs, SiExpress,
  SiMongodb, SiFirebase, SiGit, SiGithub, SiJsonwebtokens, SiMysql, SiJavascript,
  SiVisualstudiocode, SiAndroidstudio, SiAmazonaws,
  // common extras so new items added in Firebase still get an icon
  SiTailwindcss, SiTypescript, SiNextdotjs, SiDocker, SiPostman, SiFigma,
  SiPython, SiRedis, SiPostgresql, SiMongoose, SiVercel, SiNetlify, SiSass,
} from 'react-icons/si';


import { BiLogoRedux } from "react-icons/bi";
// Keys are the technology / tool name lower-cased with spaces and dots removed.
const ICONS = {
  html: SiHtml5,
  html5: SiHtml5,
  css: SiCss3,
  css3: SiCss3,
  mediaquery: LuSmartphone,
  mediaqueries: LuSmartphone,
  bootstrap: SiBootstrap,
  react: SiReact,
  reactjs: SiReact,
  redux: BiLogoRedux,
  nodejs: SiNodedotjs,
  node: SiNodedotjs,
  expressjs: SiExpress,
  express: SiExpress,
  mongodb: SiMongodb,
  firebase: SiFirebase,
  git: SiGit,
  github: SiGithub,
  restapi: TbApi,
  restapis: TbApi,
  api: TbApi,
  jwt: SiJsonwebtokens,
  mysql: SiMysql,
  javascript: SiJavascript,
  js: SiJavascript,
  visualstudiocode: SiVisualstudiocode,
  vscode: SiVisualstudiocode,
  androidstudio: SiAndroidstudio,
  awsconsole: SiAmazonaws,
  aws: SiAmazonaws,
  tailwind: SiTailwindcss,
  tailwindcss: SiTailwindcss,
  typescript: SiTypescript,
  nextjs: SiNextdotjs,
  docker: SiDocker,
  postman: SiPostman,
  figma: SiFigma,
  python: SiPython,
  redis: SiRedis,
  postgresql: SiPostgresql,
  mongoose: SiMongoose,
  vercel: SiVercel,
  netlify: SiNetlify,
  sass: SiSass,
};

export const getTechIcon = (name = '') => {
  const key = String(name).toLowerCase().replace(/[\s.\-_]/g, '');
  return ICONS[key] || LuCode2;
};
