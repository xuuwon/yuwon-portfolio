export type ProjectCardProps = {
  id: number;
  team: string; // 팀 이름 또는 태그 (예: "팀")
  type: string; // 프로젝트 유형 (예: "프론트엔드 개발")
  title: string; // 프로젝트 제목 (예: "도르멍 - 제주의 하루를 선물해 드립니다.")
  intro: string; // 소개 문구 (예: "랜덤 여행 서비스입니다.")
};

export type ProjectDetailProps = {
  id: number;
  title: string;
  description: string;
  github?: string;
  presentation?: string;
  projectLink?: string;
  image: string;
  video?: string;
  team: string;
  period: string;
  keypoint?: string[];
  technology?: string[];
  contribution: string[];
  keep: string;
  problem: string;
  try: string;
  blogs?: {
    title: string;
    link: string;
  }[];
};

export type ExperienceCardProps = {
  title: string;
  type: string[];
  period: string;
  intro: string;
  image: string;
};
