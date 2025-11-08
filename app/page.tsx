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
      <Layout className="pt-0 h-[70vh] flex items-center dark:text-light lg:flex-col !md:p-0">
        <div className="md:w-full md:mb-6 md:mt-4">
          <img src={"assets/identity-picture.png"} className="w-auto md:mx-auto" alt="Profile de ADANDE Appolinaire" />
        </div>

        <div className="w-1/2 flex flex-col items-stretch  justify-center h-fit lg:w-full ml-[10%] md:ml-0">
          <AnimatedText text="Problème. Code.Impact." className="text-6xl! text-left dark:text-light xl:text-5xl! lg:text-center! sm:text-3xl! lg:align-center" />

          <div className="my-4 text-base font-medium lg:text-center">
            <p>
              J’accompagne les entreprises dans leur croissance en concevant des applications web rapides et fiables.
            </p>
            <p className="mt-4 sm:hidden">
              Vous avez un projet ambitieux à concrétiser ? Discutons-en.
            </p>
          </div>

          <div className="flex gap-5 items-center justify-start lg:justify-center sm:flex-wrap">
            <a
              href={`/resume.pdf`}
              target="_blank"
              download="CV_ADANDE_Appolinaire.pdf"
              rel="noopener noreferrer"
              className="bg-dark text-light px-4 py-3 hover:bg-white hover:border-dark hover:text-dark border border-dark rounded-[15px] font-bold transition duration-200 flex gap-2 items-center dark:bg-light dark:text-dark md:text-sm"
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

      <Layout className="mt-[100px] md:mt-[150px]">
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
