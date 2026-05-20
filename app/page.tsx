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
    jobTitle: "Lead Fullstack",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    sameAs: [
      "https://github.com/Appolinairee",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "FastAPI",
      "Python",
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
        <div className="max-md:w-full max-md:mb-0 max-md:mt-0">
          <img src={"/assets/profil.png"} className="w-auto max-md:mx-auto" alt="Profile de ADANDE Appolinaire" />
        </div>

        <div className="w-1/2 flex flex-col items-stretch  justify-center h-fit max-lg:w-full ml-[10%] max-md:ml-0">
          <AnimatedText text="Fullstack. DevOps. ML Engineer." className="text-6xl! text-left dark:text-light max-xl:text-5xl! max-lg:text-center! max-sm:text-3xl! max-lg:align-center" />

          <div className="my-4 text-base font-medium max-lg:text-center">
            <p className="text-lg">
              Je conçois et déploie des produits web avec <span className="font-semibold">Next.js/React</span>, <span className="font-semibold">FastAPI/Python</span>, <span className="font-semibold">Docker</span> et <span className="font-semibold">CI/CD</span>.
            </p>
            <p className="mt-3 max-xl:hidden">
              Mon focus: <span className="font-semibold text-primary">fullstack solide</span>, <span className="font-semibold text-primary">ops fiables</span> et <span className="font-semibold text-primary">produits ML utiles</span>.
            </p>
            <p className="mt-3 max-sm:hidden">
              J&apos;interviens sur des sujets <span className="font-semibold">produit</span>, <span className="font-semibold">architecture</span>, <span className="font-semibold">déploiement</span> et <span className="font-semibold">ML applicatif</span>.
            </p>
          </div>

          <div className="flex gap-5 items-center justify-start max-lg:justify-center max-sm:flex-wrap">
            <a
              href="mailto:appolinaire.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark text-light px-5 py-3 hover:bg-white hover:border-dark hover:text-dark border border-dark rounded-[15px] font-bold transition duration-200 flex gap-2 items-center dark:bg-light dark:text-dark max-md:text-sm"
            >
              <MessagesIcon className="w-5 h-5" />
              Parlons produit
            </a>

            <a
              href="/projects"
              className="relative px-5 py-3 bg-gray-100 text-lg font-medium flex items-center gap-2 rounded-[15px] cursor-pointer hover:bg-gray-300 transition dark:text-dark max-md:text-sm"
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
