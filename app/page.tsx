import Image from "next/image";
import AnimatedText from "@/components/base/AnimatedText";
import Layout from "@/components/base/Layout";
import TransitionEffect from "@/components/base/TransitionEffect";
import Education from "@/components/education/Education";
import Experiences from "@/components/experiences/Experience";
import Hire from "@/components/home/Hire";
import { MessagesIcon } from "@/components/icons/Icons";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";

const Home = () => {
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Appolinaire Adande",
    url: "https://adandeappolinaire.me",
    image: "https://adandeappolinaire.me/assets/ApolinaireADANDE.png",
    description:
      "Développeur fullstack orienté produit, DevOps et ML engineering. Stack principale: Next.js, React, FastAPI, Python, Docker, CI/CD, Linux et VPS.",
    jobTitle: "Fullstack Developer, DevOps, ML Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Africa Brain",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Institut de Mathématiques et de Sciences Physiques",
    },
    affiliation: [
      {
        "@type": "CollegeOrUniversity",
        name: "École Centrale Casablanca",
      },
      {
        "@type": "Organization",
        name: "Africa Brain",
      },
    ],
    sameAs: [
      "https://github.com/Appolinairee",
      "https://www.linkedin.com/in/appolinaire-adande-8b21ba249",
    ],
    knowsLanguage: ["fr", "en"],
    knowsAbout: [
      "Next.js",
      "React",
      "FastAPI",
      "Python",
      "MongoDB",
      "Linux",
      "VPS",
      "TDD",
      "DevOps",
      "Machine Learning",
      "CI/CD",
    ],
  };

  return (
    <main className=" text-dark 
     w-full dark:bg-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personStructuredData),
        }}
      />
      <TransitionEffect />
      <Layout className="pt-0 h-[80vh] max-md:h-full flex! items-center dark:text-light max-lg:flex-col max-md:py-2! max-md:px-6!">
        <div className="w-[40%] max-lg:w-full max-lg:mb-8 flex justify-center">
          <Image
            src="/assets/profil.png"
            width={408}
            height={554}
            className="w-full h-auto max-w-[400px] max-lg:max-w-[300px] object-contain"
            alt="Portrait de ADANDE Appolinaire"
            priority
          />
        </div>

        <div className="w-1/2 flex flex-col items-stretch justify-center h-fit max-lg:w-full ml-[10%] max-lg:ml-0 gap-y-10 max-lg:gap-y-6">
          <AnimatedText text="Fullstack, DevOps → ML Engineering" className="text-6xl! text-left dark:text-light max-xl:text-5xl! max-lg:text-center! max-sm:text-3xl! max-lg:align-center" />

          <div className="text-base font-medium max-lg:text-center flex flex-col gap-y-6">
            <p className="text-xl! leading-relaxed">
              Je conçois et déploie des produits web avec <span className="font-semibold">Next.js/React</span>, <span className="font-semibold">NestJS</span>, <span className="font-semibold">Docker</span> et <span className="font-semibold">CI/CD/TDD</span> — une base fullstack et DevOps solide que j&apos;oriente aujourd&apos;hui vers le <span className="font-semibold text-primary">ML appliqué</span>.
            </p>
            <p className="text-xl! leading-relaxed">
              Mon focus: <span className="font-semibold text-primary">fullstack robuste</span>, <span className="font-semibold text-primary">delivery fiable</span> et <span className="font-semibold text-primary">ML applicatif</span>.
            </p>
          </div>

          <div className="flex gap-5 items-center justify-start max-lg:justify-center max-sm:flex-wrap mt-4">
            <a
              href="mailto:appolinaireenangnon.adande@centrale-casablanca.ma"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark text-light px-5 py-3 hover:bg-white hover:border-dark hover:text-dark border border-dark rounded-[15px] font-bold transition duration-200 flex gap-2 items-center dark:bg-light dark:text-dark max-md:text-sm"
            >
              <MessagesIcon className="w-5 h-5" />
              Parlons produit
            </a>

            <a
              href="/projects"
              className="relative px-5 py-3 bg-light text-dark text-lg font-medium flex items-center gap-2 rounded-[15px] cursor-pointer border border-dark/20 hover:bg-gray-200 transition dark:border-light/20 dark:bg-light dark:text-dark max-md:text-sm"
            >
              Voir projets
            </a>
          </div>
        </div>

        <Hire />
      </Layout>

      <Layout className="mt-[100px] max-md:mt-0 max-md:px-0!">
        <div className=""> <Skills /></div>

        <Layout className="py-0!">
          <Experiences /> 
        </Layout>
      </Layout>

      <Projects title="Projets" />

      <Layout>
        <Education />
      </Layout>
    </main >
  )
}

export default Home;
