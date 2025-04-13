import { ProjectDetailProps } from "./../type/type";
import { ProjectCardProps } from "../type/type";

export const projectData: ProjectCardProps[] = [
  {
    id: 1,
    team: "팀",
    type: "프론트엔드 팀원",
    title: "도르멍 🌴 \n- 제주의 하루를 선물해 드립니다. 💝",
    intro: "제주도의 숨겨진 장소를 랜덤으로 추천해주는 여행 서비스입니다.",
  },
  {
    id: 2,
    team: "팀",
    type: "프론트엔드 팀장",
    title: "툰츄 😺 \n- 다양한 웹툰들을 툰츄에서 즐겨보세요. 🐈",
    intro: "다양한 태그들로 취향에 맞는 웹툰을 찾을 수 있는 서비스입니다.",
  },
];

export const projectDetailData: ProjectDetailProps[] = [
  {
    id: 1,
    title: "도르멍 - 제주의 하루를 선물해 드립니다.🌴",
    description:
      "제주 여행을 계획하고, 일정을 저장하며, 여행을 마친 후엔 추억까지 기록할 수 있는 도르멍 서비스입니다.",
    github: "https://github.com/Doreumung",
    projectLink: "https://www.doreumung.site/",
    presentation:
      "https://drive.google.com/file/d/139-djdk4eunpN40hmEiE7JeyeOvY7hT9/view?usp=drive_link",
    image: "/jeju.jpg",
    team: "프론트엔드 3명 / 백엔드 2명",
    period: "2024.02 ~ 2024.03 (4주)",
    keypoint: [
      "여행 계획 생성 및 관리 기능",
      "일정 자동 생성 및 조정 기능",
      "다양한 일정 뷰 제공 (일, 주, 월)",
      "실시간 여행 날씨 정보 제공",
    ],
    technology: ["Next.js", "TypeScript", "TailwindCSS", "React Query"],
    contribution:
      "메인 페이지, 여행 계획 페이지, 일정 캘린더 컴포넌트 구현 및 API 연동을 담당했습니다.",
    keep: "여행 일정의 시각적 UI 개선 및 반응형 최적화가 효과적이었음.",
    problem:
      "초기에는 동적 라우팅과 API 동기화 타이밍 문제로 인해 로딩 이슈가 발생했음.",
    try: "React Query의 캐싱 기능과 로딩 상태 관리로 해결했고, Next.js의 `getServerSideProps` 활용도 시도함.",
  },
];
