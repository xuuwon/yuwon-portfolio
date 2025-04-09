import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div>
      <ProjectCard
        link="/public/jeju.jpg"
        team="팀"
        type="프론트엔드 개발"
        title="도르멍
- 제주의 하루를 선물해 드립니다."
        intro="제주도에서 새로움을 느끼고 싶은
여행자들을 위한 랜덤 여행 서비스입니다."
      />
    </div>
  );
};

export default Projects;
