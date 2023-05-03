import { Layout, Project, SeeMoreButton } from "../components";

function Projects() {
  return (
    <Layout title="Projects">
      <div className="flex flex-col justify-between items-center">
        <div className="flex space-x-6">
          <Project
            name="Filmophile"
            description="Filmophile is a movie app. It uses the TMDB API to fetch movies and TV shows. It also uses the OMDB API to fetch movie details. It is built with Next.js, Tailwind CSS, and TypeScript."
          />
          <Project
            name="Filmophile"
            description="lorem2lfkslfk It is built with Next.js, Tailwind CSS, and TypeScript"
          />
          <Project name="filmophile.svg" description="lorem2lfkslfk" />
        </div>
        <SeeMoreButton link="https://github.com/mihrilp?tab=repositories" />
      </div>
    </Layout>
  );
}

export default Projects;
