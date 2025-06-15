import { ProjectDetailProps } from "./../type/type";
import { ProjectCardProps } from "../type/type";

export const projectData: ProjectCardProps[] = [
  {
    id: 1,
    team: "팀",
    type: "프론트엔드 / 팀원",
    title: "도르멍 🌴 \n- 제주의 하루를 선물해 드립니다. 💝",
    intro: "제주도의 숨겨진 장소를 랜덤으로 추천해주는 여행 서비스입니다.",
  },
  {
    id: 2,
    team: "팀",
    type: "프론트엔드 / 팀장",
    title: "툰츄 😺 \n- 다양한 웹툰들을 툰츄에서 즐겨보세요. 🐈",
    intro: "다양한 태그들로 취향에 맞는 웹툰을 찾을 수 있는 서비스입니다.",
  },
  {
    id: 3,
    team: "개인",
    type: "기획 및 프론트엔드",
    title: "개인 포트폴리오 페이지 제작 📒",
    intro: "조유원의 프론트엔드 개발자 포트폴리오 페이지입니다!",
  },
  {
    id: 4,
    team: "팀",
    type: "기획 및 프론트엔드 / 팀장",
    title: "마음결 💝 \n- 하루 5분, 마음의 결을 읽다. 💐 ",
    intro: "마음결은 감정을 이해하고 하루의 마무리를 돕는 서비스입니다.",
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
    image: "/doreumung.png",
    team: "프론트엔드 3명 / 백엔드 2명",
    period: "2024.12 ~ 2025.01 (4주)",
    keypoint: [
      "다양한 테마 및 지역을 선택하여 일정 생성 및 저장",
      "최적의 여행 경로 설계",
      "여러 사람들과 공유하는 여행 후기",
      "실시간 댓글 및 좋아요 기능",
    ],
    technology: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Redux Toolkit",
      "RTK Query",
      "Prettier",
    ],
    contribution: [
      "와이어 프레임 설계, 화면 정의서, 플로우차트 작성",
      "공통 컴포넌트를 구현하여 재사용성 향상",
      "유효성 검사를 추가한 회원가입/로그인 폼 구현",
      "RTK와 Redux-persist로 유저 정보 상태 관리",
      "로컬 스토리지에 토큰 유효기간을 저장하여 자동 로그인 구현",
    ],
    keep: "매일 오전 데일리 스크럼을 진행하여 팀원들의 진행 상황을 빠르게 파악하고, 백엔드 개발자와의 협업에도 큰 도움이 되었다.",
    problem:
      "액세스 및 리프레시 토큰을 받아올 때 역량 부족으로 httpOnly와 Secure 속성을 설정하지 못해 보안상 문제가 발생했다.",
    try: "유저 관련 작업을 맡은 만큼, 보안에 더욱 신경을 쓰고, 시간을 충분히 할애하여 보안 조치를 강화하겠다.",
    blogs: [
      {
        title: "cva, clsx를 활용하여 레이어팝업 컴포넌트 만들기",
        link: "https://xuwon.tistory.com/38",
      },
      {
        title: "RTK Query로 로그인 API 구현하고 RTK로 유저 정보 관리하기",
        link: "https://xuwon.tistory.com/42",
      },
      {
        title: "[트러블 슈팅] 자동 로그인 트러블 슈팅",
        link: "https://xuwon.tistory.com/46",
      },
    ],
  },
  {
    id: 2,
    title: "툰츄 😺 - 다양한 웹툰들을 툰츄에서 즐겨보세요. 🐈",
    description:
      "툰츄는 다양한 플랫폼의 웹툰들을 확인하고, 해당 플랫폼으로 연결되어 웹툰을 즐길 수 있는 서비스입니다. \n*서버에서 문제가 발생하여 배포를 완료하지 못했습니다.*",
    github: "https://github.com/Toonchu-team",
    presentation:
      "https://www.figma.com/deck/SuvSYbBZkaYhNSQ51gw36H/%ED%88%B0%EC%B8%84-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%B0%9C%ED%91%9C-PPT?node-id=57-244&t=41QA2rDp08RNj6qY-1",
    image: "/toonchu.png",
    team: "프론트엔드 3명 / 백엔드 2명",
    period: "2025.01 ~ 2025.02 (5주)",
    keypoint: [
      "다양한 태그를 통한 웹툰 검색 기능 제공",
      "관심 있는 태그 선택 시 해당 웹툰 목록 표시",
      "찜 기능으로 좋아하는 웹툰 저장 가능",
      "사용자가 직접 웹툰 작품 등록을 신청 가능",
    ],
    technology: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Sass",
      "Zustand",
      "Prettier",
    ],
    contribution: [
      "UI 설계, 요구사항 정의서 및 화면 정의서 작성",
      "메인 및 검색 페이지 구현",
      "Tailwind CSS와 SCSS를 병행하여 반응형 UI 구현",
      "공통 컴포넌트 개발을 통한 UI 재사용성 및 유지보수성 향상",
      "Material UI를 활용한 태그 기반 검색 및 페이지네이션 기능 구현",
    ],
    keep: "GitHub 백로그를 관리함으로써 프론트엔드 팀원들의 작업 상황을 효율적으로 파악하고 조율할 수 있었다. \n또한 기획 단계에는 없던 태그 검색 메뉴의 페이지네이션을 직접 구현함으로써, 사용자 경험(UX)을 개선하였다.",
    problem:
      "발표 종료 후 백엔드 개발자와의 연락이 끊기면서 서버가 정상적으로 작동하지 않아 최종 배포를 완료하지 못했다. \n프론트엔드 팀장으로서 작업 일정과 커뮤니케이션을 명확히 조율하지 못한 점이 원인이었다.",
    try: "앞으로는 작업 기한과 개발 일정을 철저히 관리하고, 주요 기능이나 작업 누락이 없도록 소통 체계를 더욱 명확히 운영하고자 한다.",
    blogs: [
      {
        title: "Tailwind CSS + SCSS로 반응형 구현하기",
        link: "https://xuwon.tistory.com/49",
      },
      {
        title: "Zustand로 API 호출 및 상태 관리하기",
        link: "https://xuwon.tistory.com/50",
      },
      {
        title: "[리팩토링] 새로고침 해도 검색 결과가 남아있도록 하기",
        link: "https://xuwon.tistory.com/51",
      },
    ],
  },
  {
    id: 3,
    title: "개인 포트폴리오 페이지 제작 📒",
    description:
      "Figma를 통해 기획 및 디자인 작업을 거친 후 직접 구현했습니다. \n제가 가장 좋아하는 레몬을 포인트로 디자인 해보았습니다.",
    github: "https://github.com/xuuwon/portfolio.git",
    projectLink: "#",
    image: "/portfolio.png",
    team: "개인",
    period: "2025.03 ~ 2025.05 (8주)",
    technology: ["TypeScript", "TailwindCSS", "Prettier"],
    contribution: [
      "소개 - 프로젝트 - 경험 순으로 표시",
      "프로젝트 상세 화면 표시",
      "깃허브, 티스토리 등 바로가기 버튼 표시",
      "다크모드, 라이트모드 지원",
    ],
    keep: "컴포넌트를 재사용 가능하도록 구조화해, 재사용성을 향상시켰다.",
    problem:
      "사용자 인터렉션(hover, animation 등)이 풍부하지 않은 편이라 다소 정적인 것 같다는 피드백을 받았다.",
    try: "색상 대비 등 접근성 요소를 더 고려한 UI 개선과 인터랙션 등을 추가하고 싶다.",
    blogs: [
      {
        title: "스크롤 기반 싱글 페이지 라우팅 구현하기",
        link: "https://xuwon.tistory.com/54",
      },
    ],
  },
  {
    id: 4,
    title: "마음결 (心結) - 하루 5분, 마음의 결을 읽다 🪄",
    description:
      "국민대학교 경영정보학부 캡스톤디자인 프로젝트로 진행한\n2030 세대의 우울증 문제 해결을 위한 감정 일기 서비스입니다.\nAI 감정 분석과 리포트, 감정 캘린더, 코인 보상 시스템 등 다양한 기능을 통해 감정 인식과 자기 성찰을 돕습니다.",
    github: "https://github.com/xuuwon/maeumgyeol",
    projectLink: "https://maeumgyeol.vercel.app/",
    image: "/maeumgyeol.jpg",
    video: "/maeumgyeol-video.mp4",
    team: "프론트엔드 1명 / 기획 4명",
    period: "2024.03 ~ 2024.06 (12주) / 개발 3주",
    technology: ["Next.js", "TypeScript", "Zustand", "TailwindCSS", "Figma"],
    contribution: [
      "프론트엔드 전체 구현 및 UI/UX 흐름 설계",
      "AI 감정 분석 결과 시각화 (감정 리포트 및 감정 캘린더) 구현",
      "캐릭터 커스터마이징 및 아이템 구매 기능 구현",
      "코인 보상 시스템 및 감정 기반 맞춤 콘텐츠 제공 기능 설계",
    ],
    keep: "사용자가 감정의 흐름을 자연스럽게 인지할 수 있도록 직관적인 UI를 설계했으며, 실시간으로 정보가 반영되도록 코드를 구현했다.",
    problem:
      "짧은 개발 기간으로 인해 핵심 기능 구현에 집중하느라 소셜 로그인, 로그인 유지, 회원 탈퇴 등 사용자 편의 기능을 충분히 구현하지 못했다.",
    try: "앞으로는 GPT 모델을 활용한 감정 피드백 고도화, 음성 및 이미지 등 비정형 입력 지원, 맞춤형 마음 챙김 콘텐츠 강화 등 다양한 기능을 추가해보고 싶다.",
    blogs: [
      {
        title: "Tiptap 라이브러리로 텍스트 에디터 만들기",
        link: "https://xuwon.tistory.com/57",
      },
      {
        title: "새로고침/뒤로가기 시도 시 모달 띄우기",
        link: "https://xuwon.tistory.com/58",
      },
    ],
  },
];
