import AnimatedText from "@/components/base/AnimatedText";
import Layout from "@/components/base/Layout";
import TransitionEffect from "@/components/base/TransitionEffect";
import Education from "@/components/education/Education";
import Experiences from "@/components/experiences/Experience";
import Hire from "@/components/home/Hire";
import { DownloadIcon, MessagesIcon } from "@/components/icons/Icons";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";

const Home = () => {
  return (
    <main className=" text-dark 
     w-full dark:bg-dark">
      <TransitionEffect />
      <Layout className="pt-0 h-[80vh] max-md:h-[70vh] flex! items-center dark:text-light max-lg:flex-col !max-md:p-0">
        <div className="max-md:w-full max-md:mb-6 max-md:mt-4">
          <img src={"/assets/profil.png"} className="w-auto max-md:mx-auto" alt="Profile de ADANDE Appolinaire" />
        </div>

        <div className="w-1/2 flex flex-col items-stretch  justify-center h-fit max-lg:w-full ml-[10%] max-md:ml-0">
          <AnimatedText text="Dev Fullstack. Architecture. DevOps." className="text-6xl! text-left dark:text-light max-xl:text-5xl! max-lg:text-center! max-sm:text-3xl! max-lg:align-center" />

          <div className="my-4 text-base font-medium max-lg:text-center">
            <p className="text-lg">
              <span className="font-semibold text-primary">Lead Technique</span> spécialisé en <span className="font-semibold">Next.js/React</span>, <span className="font-semibold">NestJS/Node.js</span> et <span className="font-semibold">DevOps</span>.
            </p>
            <p className="mt-3">
              J'architecture et déploie des <span className="font-semibold">plateformes web scalables</span> avec CI/CD, Docker et optimisation continue.
            </p>
            <p className="mt-3 max-sm:hidden">
              Disponible pour des <span className="font-semibold text-primary">missions freelance</span> ou <span className="font-semibold text-primary">poste Lead/Senior</span> en deep tech.
            </p>
          </div>

          <div className="flex gap-5 items-center justify-start max-lg:justify-center max-sm:flex-wrap">
            <a
              href={`/resume.pdf`}
              target="_blank"
              download="CV_ADANDE_Appolinaire.pdf"
              rel="noopener noreferrer"
              className="bg-dark text-light px-4 py-3 hover:bg-white hover:border-dark hover:text-dark border border-dark rounded-[15px] font-bold transition duration-200 flex gap-2 items-center dark:bg-light dark:text-dark max-md:text-sm"
            >
              <DownloadIcon className="" />
              Télécharger mon CV
            </a>

            <a
              href="mailto:appolinaire.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-4 py-3 bg-gray-100 text-lg font-medium capitalize underline flex items-center gap-2 rounded-[15px] cursor-pointer hover:bg-gray-300 transition dark:text-dark"
            >
              <MessagesIcon className="w-5 h-5" />
              Discutons
            </a>
          </div>
        </div>

        <Hire />
      </Layout>

      <Layout className="mt-[100px] max-md:mt-[150px]">
        <div className=""> <Skills /></div>

        <Experiences />
      </Layout>

      <Projects title="Projets" />

      <Layout>
        <Education />
      </Layout>
    </main >
  )
}

export default Home;
