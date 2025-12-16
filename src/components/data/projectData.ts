import { ProjectDetailProps } from "./../type/type";
import { ProjectCardProps } from "../type/type";

export const projectData: ProjectCardProps[] = [
  {
    id: 1,
    team: "팀",
    type: "프론트엔드 / 팀장",
    title: "공모자들 🚀 \n- 공모전 팀 매칭·협업 통합 플랫폼",
    intro:
      "팀원 매칭부터 채팅, 공모전 정보 및 팀 관리를 통합 제공하는 플랫폼입니다.",
  },
  {
    id: 2,
    team: "팀",
    type: "프론트엔드 / 개인",
    title: "쿠민잇 🍽️ \n- 캠퍼스 내 픽업·전달 기반 주문 서비스",
    intro:
      "국민대 캠퍼스 내 매장을 위치·카테고리로 탐색하고 픽업/전달 주문을 지원합니다.",
  },
  {
    id: 3,
    team: "팀",
    type: "프론트엔드 / 팀원",
    title: "깜빡이 🎮 \n- 게임 기반 아동 집중력 향상 교육 서비스",
    intro:
      "아동 게임 플레이 데이터를 기반으로 AI 집중력 분석 레포트를 제공하는 서비스입니다.",
  },
  {
    id: 4,
    team: "팀",
    type: "프론트엔드 / 팀원",
    title: "Clustory 🗺️ \n- 기억과 감정으로 동네를 다시 뛰게 하는 AI 감정 지도",
    intro:
      "AI 기반 감정 분석으로 감정 태그와 감성 코스를 제공하는 지도 서비스입니다.",
  },
  {
    id: 5,
    team: "팀",
    type: "기획 및 프론트엔드 / 팀장",
    title: "마음결 💝 \n- 하루 5분, 마음의 결을 읽다. 💐 ",
    intro:
      "감정 기록과 AI 분석 리포트로 자기 성찰을 돕는 감정 일기 서비스입니다.",
  },
  {
    id: 6,
    team: "개인",
    type: "기획 및 프론트엔드",
    title: "개인 포트폴리오 페이지 제작 📒",
    intro: "조유원의 프론트엔드 개발자 포트폴리오 페이지입니다!",
  },
  {
    id: 7,
    team: "팀",
    type: "프론트엔드 / 팀장",
    title: "툰츄 😺 \n- 다양한 웹툰들을 툰츄에서 즐겨보세요. 🐈",
    intro: "다양한 태그들로 취향에 맞는 웹툰을 찾을 수 있는 서비스입니다.",
  },
  {
    id: 8,
    team: "팀",
    type: "프론트엔드 / 팀원",
    title: "도르멍 🌴 \n- 제주의 하루를 선물해 드립니다. 💝",
    intro: "제주도의 숨겨진 장소를 랜덤으로 추천해주는 여행 서비스입니다.",
  },
];

export const projectDetailData: ProjectDetailProps[] = [
  // 1) 공모자들 (2025.09 ~ 2025.12)
  {
    id: 1,
    title: "공모자들 - 공모전 팀 매칭·협업 통합 플랫폼 🚀",
    description:
      "공모자들은 공모전에 참여하고 싶지만 팀원 모집, 정보 탐색, 소통과 관리에 어려움을 겪는 참가자들을 위한 공모전 통합 플랫폼입니다.\n팀원 찾기부터 실시간 채팅, 공모전 정보 확인과 팀 관리까지 공모전 참여 전 과정을 하나의 서비스에서 해결할 수 있도록 설계되었습니다.",
    github: "https://github.com/KMU-MIS-BALJAGUK/GMJD-WEB",
    projectLink: "https://www.gmjd.site/",
    presentation: "",
    image: "/gmjd.png",
    video: "",
    team: "프론트엔드 5명 / 백엔드 4명 / 기획 1명",
    period: "2025.09 ~ 2025.12 (16주)",
    keypoint: [
      "스킬·경험·관심사 기반 팀원 탐색 및 매칭",
      "팀 단위 실시간 채팅을 통한 협업 환경 제공",
      "최신 공모전 정보 통합 제공 및 분야별 탐색",
      "팀 모집, 지원, 운영 상태를 한 번에 관리",
    ],
    technology: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "TailwindCSS",
    ],
    contribution: [
      "프론트엔드 리더로 전체 UI 구조 및 개발 흐름 총괄",
      "메인, 랜딩, 공모전 목록, 실시간 채팅 페이지 구현",
      "반응형 UI 적용으로 다양한 디바이스 환경 대응",
      "TanStack Query를 활용한 서버 상태 관리",
      "Zustand를 활용한 클라이언트 전역 상태 관리",
    ],
    keep: "프론트엔드 리더로서 서비스 전반의 사용자 흐름을 고려한 UI 구조를 설계하고, 서버 상태와 클라이언트 상태를 분리 관리해 데이터 흐름의 안정성을 높였다.",
    problem:
      "기능 확장 과정에서 초기 기획 단계에서 화면 단위 역할과 데이터 관리 기준을 충분히 구체화하지 못해 일부 UI 수정 비용이 발생했다.",
    try: "다음 프로젝트에서는 역할 분담을 더욱 명확히 하고, 기능 구현 이후 코드 리팩토링과 구조 개선에 더 많은 시간을 투자해 유지보수성과 확장성을 높이고자 한다.",
    blogs: [],
  },

  // 2) 쿠민잇 (2025.11.17 ~ 2025.11.22)
  {
    id: 2,
    title: "쿠민잇 - 캠퍼스 내 픽업·전달 기반 주문 서비스 🍽️",
    description:
      "쿠민잇은 국민대 캠퍼스 내 매장을 대상으로 한 픽업·전달 기반 주문 서비스입니다.\n사용자는 위치와 카테고리별로 매장을 탐색하고, 픽업 또는 전달 방식을 선택해 메뉴를 미리 주문할 수 있으며 주문 진행 상황을 실시간으로 확인할 수 있습니다.\n전달자 모드를 통해 학생들은 여유 시간에 간단한 음식 전달로 수익을 창출할 수 있어, 캠퍼스 내 효율적인 음식 소비 경험을 제공합니다.",
    github: "https://github.com/KoominEat",
    projectLink: "https://koomin-eat-fe.vercel.app/",
    presentation:
      "https://drive.google.com/file/d/1SU-lLlO-TpjkrOzF2ifEDYS7a7bK-2Kn/view?usp=drive_link",
    image: "/koominEat.png",
    video: "",
    team: "프론트엔드 1명 / 백엔드 2명 / 기획 1명",
    period: "2025.11.17 ~ 2025.11.22 (1주)",
    keypoint: [
      "위치·카테고리 기반 캠퍼스 매장 탐색",
      "픽업·전달 방식 선택 주문",
      "전달자 매칭 실패 시 픽업 전환",
      "주문 및 전달 진행 상태 실시간 확인",
      "전달자 수익 확인 기능 (실제 수익 연동 미구현)",
    ],
    technology: ["Next.js", "TypeScript", "TailwindCSS", "Axios"],
    contribution: [
      "프론트엔드 단독 개발",
      "주문자·전달자 모드 UI 및 화면 흐름 설계",
      "매장 탐색, 주문, 전달 플로우 전반 구현",
      "전달 요청 리스트 및 전달자 인증 화면 구현",
      "반응형 UI 적용으로 다양한 디바이스 대응",
    ],
    keep: "주문자와 전달자 모드를 명확히 분리한 UI 구조를 설계해 사용자 흐름을 직관적으로 구성했으며, 핵심 주문·전달 플로우를 안정적으로 구현했다.",
    problem:
      "수익과 연결된 전달 기능임에도 불구하고, 초기 기획 단계에서 부정 사용을 방지하기 위한 인증 및 검증 절차를 충분히 고려하지 못한 점이 아쉬웠다.",
    try: "향후 프로젝트에서는 역할 분담을 더욱 명확히 하고, 기능 구현 이후 코드 리팩토링과 구조 개선에 더 많은 시간을 투자해 유지보수성과 확장성을 높이고자 한다.",
    blogs: [],
  },

  // 3) 깜빡이 (2025.10 ~ 2025.11)
  {
    id: 3,
    title: "깜빡이 - 게임 기반 아동 집중력 향상 교육 서비스 🎮",
    description:
      "깜빡이는 만 5세~10세 아동의 집중력 향상을 목표로 한 게임 기반 아동 교육 서비스입니다.\n논문 기반으로 설계된 ‘뿅뿅 아기별’과 ‘꼬마 교통지킴이’ 게임을 통해 집중력, 기억력, 충동 조절 능력을 훈련하고,\n플레이 데이터를 바탕으로 AI 집중력 분석 레포트를 제공하여 보호자가 아이의 변화를 직관적으로 확인할 수 있도록 돕습니다.",
    github: "https://github.com/kkambbaki",
    projectLink: "https://frontend-yuwon.vercel.app/",
    presentation: "",
    image: "/kkambbak.png",
    video: "",
    team: "프론트엔드 2명 / 백엔드 2명 / 기획 및 디자인 2명",
    period: "2025.10 ~ 2025.11 (5주)",
    keypoint: [
      "만 5~10세 아동 대상 집중력 향상 게임형 학습",
      "논문 기반 설계 게임 제공: ‘뿅뿅 아기별’, ‘꼬마 교통지킴이’",
      "집중력·기억력·충동 조절 능력 훈련",
      "플레이 데이터 기반 AI 집중력 분석 레포트 제공",
      "보호자용 결과 확인 UI 제공",
    ],
    technology: ["Next.js", "TypeScript", "Axios", "TailwindCSS"],
    contribution: [
      "프론트엔드 개발 담당",
      "‘뿅뿅 아기별’ 게임의 핵심 인터랙션 및 게임 로직 구현",
      "게임 결과 데이터를 기반으로 한 AI 집중력 분석 레포트 UI 구현",
    ],
    keep: "게임 핵심 인터랙션과 로직을 안정적으로 구현하고, 보호자 관점에서 결과를 쉽게 해석할 수 있도록 리포트 UI를 직관적으로 구성했다.",
    problem:
      "아동 사용자 특성상 작은 UX 요소(피드백 속도, 애니메이션, 난이도 체감)에 따라 몰입도가 크게 달라져, 다양한 연령대에 최적화된 난이도·피드백 설계가 추가로 필요했다.",
    try: "향후에는 플레이 로그를 기반으로 난이도를 자동 조절하는 적응형 학습 흐름을 고도화하고, 리포트 지표를 더 세분화해 보호자가 아이의 변화를 장기적으로 추적할 수 있도록 개선하고자 한다.",
    blogs: [],
  },

  // 4) Clustory (2025.08.04 ~ 2025.08.25)
  {
    id: 4,
    title: "Clustory - 기억과 감정으로 동네를 다시 뛰게 하는 AI 감정 지도 🗺️",
    description:
      "Clustory는 사용자가 텍스트와 사진으로 감정을 기록하면, AI(Gemini 2.0 Flash)가 자동으로 감정 태그를 생성하고 지도에 시각화해주는 서비스입니다. \n감정 기반 맞춤형 코스를 추천하여 새로운 지역 경험을 제공합니다. \n ⚠️현재 서버가 종료되어 있어 서비스 이용이 불가합니다.",
    github: "https://github.com/ai-emotion-map/emotion-map-FE/",
    projectLink: "https://emotion-map-nine.vercel.app/",
    presentation:
      "https://drive.google.com/file/d/1BN1IlQnz7In6UwUzxpUcDN9cREqLtFyW/view?usp=sharing",
    image: "/clustory.png",
    video: "/clustory-video.mp4",
    team: "프론트엔드 3명 / 백엔드 2명 / 기획 및 디자인 1명",
    period: "2025.08.04 ~ 2025.08.25 (3주)",
    keypoint: [
      "텍스트·사진 업로드 및 위치 지정",
      "Google Gemini 2.0 Flash 기반 AI 감정 분류",
      "감정별 태그·이모지로 지도 시각화",
      "실시간 감성 피드 및 감정 코스 추천",
    ],
    technology: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Axios",
      "SWR",
    ],
    contribution: [
      "메인 UI 및 지도 관련 API 구현",
      "Next.js API Route를 통한 네이버맵 검색 API 연동",
      "UI/UX 기획 및 시연 영상 제작",
      "Storybook 연동으로 편한 UI 테스트",
    ],
    keep: "지도 컴포넌트를 재사용할 수 있게 구조화해 유지보수성을 향상시켰고, SWR을 활용해 클라이언트 데이터 패칭을 최적화했다.",
    problem:
      "개발 기간이 짧아 일부 보완 기능(로그인/회원 관리 등)을 충분히 구현하지 못했다.",
    try: "추후 GPT 모델 기반 맞춤 감정 피드백, 사용자 위치 기반 기능 등 고도화를 계획하고 있다.",
    blogs: [
      {
        title: "Next.js + Storybook 연동 기록",
        link: "https://xuwon.tistory.com/67",
      },
    ],
  },

  // 5) 마음결 (2025.03 ~ 2025.06)
  {
    id: 5,
    title: "마음결 (心結) - 하루 5분, 마음의 결을 읽다 🪄",
    description:
      "국민대학교 경영정보학부 캡스톤디자인 프로젝트로 진행한\n2030 세대의 우울증 문제 해결을 위한 감정 일기 서비스입니다.\nAI 감정 분석과 리포트, 감정 캘린더, 코인 보상 시스템 등 다양한 기능을 통해 감정 인식과 자기 성찰을 돕습니다.",
    github: "https://github.com/xuuwon/maeumgyeol",
    projectLink: "https://maeumgyeol.vercel.app/",
    image: "/maeumgyeol.jpg",
    video: "/maeumgyeol-video.mp4",
    team: "프론트엔드 1명 / 기획 4명",
    period: "2025.03 ~ 2025.06 (12주) / 개발 3주",
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

  // 6) 개인 포트폴리오 (2025.03 ~ 2025.05)
  {
    id: 6,
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

  // 7) 툰츄 (2025.01 ~ 2025.02)
  {
    id: 7,
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

  // 8) 도르멍 (2024.12 ~ 2025.01)
  {
    id: 8,
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
];
