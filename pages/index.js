import Link from "next/link";
import * as React from "react";
import styled from "styled-components";
import { typeScale } from "../utils/typography";
import { FaExternalLinkAlt, FaSpotify } from "react-icons/fa";
import { getSortedProjectsData } from "../lib/projects";
import { getSortedPostsData } from "../lib/posts";
import { FaArrowRight } from "react-icons/fa";
import Head from "next/head";

const HeroSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

const ContentContainer = styled.div`
  flex-basis: 75%;
  @media (max-width: 800px) {
    flex-basis: 100%;
  }
`;

const UserName = styled.h1`
  color: ${(props) => props.theme.textColor};
  margin: 5px 0px;
`;

const UserProfession = styled.h4`
  color: ${(props) => props.theme.textColor};
  font-weight: bold;
  margin: 0;
  font-weight: normal;
`;

const UserIntro = styled.p`
  font-size: ${typeScale.paragraph};
  color: ${(props) => props.theme.textColorLight};
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  flex-basis: 25%;
  object-fit: cover;

  @media (max-width: 800px) {
    width: 120px;
    height: 120px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding-bottom: 1.5rem;
`;

const SmallButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 50px;
  cursor: pointer;
  border: none;
  font-weight: bold;
  background-color: ${(props) =>
    props.status === "active"
      ? props.theme.buttonBgColor
      : props.theme.textColorLight};
  color: ${(props) => props.theme.buttonColor};
`;

const SectionContainer = styled.div``;

const SectionTitle = styled.h2`
  color: ${(props) => props.theme.textColor};
  font-size: ${typeScale.header2};
  font-weight: bold;
  margin: 0;
`;

const SectionSubtitle = styled.h4`
  color: ${(props) => props.theme.textColorLight};
  font-size: ${typeScale.header4};
  font-weight: normal;
  margin: 0.5rem 0rem;
`;

const SectionDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.textColorLight};
  margin: 2rem 0rem;
`;

const ViewAllButton = styled.a`
  text-decoration: none;
  cursor: pointer;
  text-decoration: underline;
  font-size: ${typeScale.h4};
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  align-items: center;
  border-radius: 50px;
  border: none;
  font-weight: bold;
  background-color: none;
  color: ${(props) => props.theme.textColor};
`;

const UnorderedList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
`;

const UnorderedListForProjects = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 0.2rem;
  padding: 0;
`;

const ListItem = styled.li`
  /* color: ${(props) => props.theme.textColorLight}; */
  font-size: ${typeScale.helperText};
  border: 1px solid ${(props) => props.theme.textColorLight};
  padding: 0.5rem 1rem;
  border-radius: 10px;
  margin: 0;
  font-weight: normal;
`;

const NowPlayingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
`;

const NowPlayingContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const NowPlayingTitleAndArtistContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.1rem;
`;

const SongName = styled.h6`
  color: ${(props) => props.theme.textColor};
  margin: 0;
  font-weight: bold;
`;

const NowPlayingText = styled.p`
  color: ${(props) => props.theme.textColor};
  margin: 0;
  font-weight: bold;
  font-size: small;
`;

const SongArtist = styled.h6`
  color: ${(props) => props.theme.textColorLight};
  margin: 0;
  font-weight: normal;
`;

const AlbumCover = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  object-fit: cover;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProjectTitle = styled.h3`
  cursor: pointer;
  color: ${(props) => props.theme.textColor};
  margin: 0;
  text-decoration: underline;
  font-weight: bold;
`;

const ProjectDescription = styled.p`
  color: ${(props) => props.theme.textColorLight};
  margin: 0;
  font-weight: normal;
`;

const ProjectLinkContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const ProjectLink = styled.a`
  color: ${(props) => props.theme.textColorLight};
  margin: 0;
  font-weight: normal;
  text-decoration: underline;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const ProjectSourceCode = styled.a`
  color: ${(props) => props.theme.textColorLight};
  margin: 0;
  cursor: pointer;
  text-decoration: underline;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BlogTitle = styled.h3`
  color: ${(props) => props.theme.textColor};
  margin: 0;
  font-weight: bold;
`;

const BlogDescription = styled.p`
  color: ${(props) => props.theme.textColorLight};
  margin: 0;
  font-weight: normal;
`;

const BlogLink = styled.a`
  color: ${(props) => props.theme.textColorLight};
  margin: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.5rem;
  font-weight: normal;
  text-decoration: underline;
`;

const Blog = ({ title, description, link }) => {
  return (
    <BlogContainer>
      <BlogTitle>{title}</BlogTitle>
      <BlogDescription>{description}</BlogDescription>
      <Link href={`/writings/${link}`}>
        <BlogLink>
          Read more
          <FaArrowRight />
        </BlogLink>
      </Link>
    </BlogContainer>
  );
};

const Project = ({ title, description, liveLink, sourceCode, link }) => {
  return (
    <ProjectContainer>
      <Link href={`/projects/${link}`}>
        <ProjectTitle>{title}</ProjectTitle>
      </Link>
      <ProjectDescription>{description}</ProjectDescription>
      <ProjectLinkContainer>
        <ProjectLink href={liveLink} target="_blank">
          Live Link
          <FaExternalLinkAlt />
        </ProjectLink>
        <ProjectSourceCode href={sourceCode} target="_blank">
          Source Code
          <FaExternalLinkAlt />
        </ProjectSourceCode>
      </ProjectLinkContainer>
    </ProjectContainer>
  );
};

const HeroData = {
  casual: {
    name: "Rafeeq Syed Amjad",
    profession: "Gym 🦾 | music 🎧",
    intro: "Here is a brief introduction to Rafeeq Syed Amjad. Rafeeq enjoys working out and reading about fitness, technology, engineering, and entrepreneurship.",
    avatar: "https://www.linkpicture.com/q/marriage_profilepic.jpg",
  },
  professional: {
    name: "Rafeeq Syed Amjad",
    profession: "FrontEnd 🧑‍💻 | Javascript 🟨 | ReactJs ⚛️ | NextJs 🔳 ",
    intro:
      "Hi, I’m Rafeeq! I'm a developer. In a nutshell, I create websites and apps that help organizations address business challenges and meet their needs. My expertise lies within front-end web apps, and the main languages in my tech stack are JavaScript, ReactJs, NextJs, Redux, Typescript, Tailwind CSS and of course HTML/CSS.",
    avatar: "https://www.linkpicture.com/q/marriage_profilepic.jpg",
  },
};

export const getStaticProps = async () => {
  const allProjectsData = getSortedProjectsData().slice(0, 3);
  let allPostsData = await getSortedPostsData();

  allPostsData = allPostsData.slice(0, 3);

  return {
    props: {
      projects: allProjectsData,
      blogs: allPostsData,
    },
  };
};

// markup
const IndexPage = ({ projects, blogs }) => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/api/top-tracks")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  const [isCasual, setIsCasual] = React.useState(false);

  return (
    <>
      <Head>
        <title>Rafeeq Syed Amjad</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <HeroSectionContainer>
        <ContentContainer>
          <UserName>
            {isCasual ? HeroData.casual.name : HeroData.professional.name}
          </UserName>
          <UserProfession>
            {isCasual
              ? HeroData.casual.profession
              : HeroData.professional.profession}
          </UserProfession>
          <UserIntro>
            {isCasual ? HeroData.casual.intro : HeroData.professional.intro}
          </UserIntro>
          <ButtonContainer>
            <SmallButton
              onClick={() => {
                setIsCasual(false);
              }}
              status={!isCasual ? "active" : "inactive"}
            >
              Professional
            </SmallButton>
            <SmallButton
              onClick={() => {
                setIsCasual(true);
              }}
              status={isCasual ? "active" : "inactive"}
            >
              Casual
            </SmallButton>
          </ButtonContainer>
        </ContentContainer>
        {isCasual ? (
          <Avatar src={HeroData.casual.avatar} />
        ) : (
          <Avatar src={HeroData.professional.avatar} />
        )}
      </HeroSectionContainer>
      {/* sections */}

      <SectionContainer>
        <SectionTitle>Projects</SectionTitle>
        <SectionSubtitle>
          These are some of the projects I have worked on
        </SectionSubtitle>
        <UnorderedList>
          {projects.map((project) => (
            <Project
              key={project.id}
              link={project.id}
              title={project.title}
              description={project.description}
              liveLink={project.liveLink}
              sourceCode={project.sourceCode}
            />
          ))}
        </UnorderedList>
        <Link href="/projects">
          <ViewAllButton>
            See all projects <FaArrowRight />
          </ViewAllButton>
        </Link>
        <SectionDivider />
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>Blogs</SectionTitle>
        <SectionSubtitle>
          These are some of the blogs I have written on
        </SectionSubtitle>
        <UnorderedList>
          {blogs.map((project) => (
            <Blog
              key={project.id}
              title={project.title}
              description={project.description}
              link={project.id}
            />
          ))}
        </UnorderedList>
        <Link href="/writings">
          <ViewAllButton>
            Read all blogs <FaArrowRight />
          </ViewAllButton>
        </Link>
        <SectionDivider />
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>Technologies I have worked with</SectionTitle>
        <SectionSubtitle>
          These are the technologies I have worked with in the past
        </SectionSubtitle>
        <UnorderedListForProjects>
          <ListItem>ReactJs</ListItem>
          <ListItem>NextJs</ListItem>
          <ListItem>Recoil</ListItem>
          <ListItem>Firebase</ListItem>
          <ListItem>Tailwind CSS</ListItem>
          <ListItem>Next Auth</ListItem>
          <ListItem>Git</ListItem>
          <ListItem>HTML</ListItem>
          <ListItem>CSS</ListItem>
          <ListItem>JavaScript</ListItem>
          <ListItem>TypeScript</ListItem>
          <ListItem>Styled Components</ListItem>
        </UnorderedListForProjects>
        <SectionDivider />
      </SectionContainer>
      {/* <NowPlayingContainer>
        <NowPlayingContainer>
          <FaSpotify color="green" size={30} />
          <NowPlayingText>
            {data ? "Now Listening" : "Not Playing"}
          </NowPlayingText>
        </NowPlayingContainer>
        <NowPlayingContentContainer>
          {data && (
            <>
              <NowPlayingTitleAndArtistContainer>
                <SongName>
                  {data.item.name.length > 20
                    ? data.item.name.slice(0, 20) + "..."
                    : data.item.name}{" "}
                </SongName>
                <SongArtist>by {data.item.artists[0].name}</SongArtist>
              </NowPlayingTitleAndArtistContainer>
              <AlbumCover src={data.item.album.images[0].url} />
            </>
          )}
        </NowPlayingContentContainer>
      </NowPlayingContainer> */}
    </>
  );
};

export default IndexPage;
