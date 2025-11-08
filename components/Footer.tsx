import SocialIcons from "./base/SocialIcons";
import { HeartIcon } from "./icons/Icons";
import Layout from "./base/Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="border-t border-gray-300 pt-12 py-6 text-lg font-medium bg-light dark:bg-dark dark:text-light dark:border-light sm:text-base">
      <Layout className="flex justify-between lg:flex-col lg:items-center lg:justify-center lg:py-6">
        <span>{new Date().getFullYear()} &copy; Tous droits réservés.</span>

        <div className="lg:py-2 ">
          Build with <HeartIcon className="inline mr-1 text-primary" />
          by <Link className="underline underline-offset-2" href="emailto:adandappolinaire@gmail.com" target="_blank">Appolinaire</Link>
        </div>

        <Link className="underline" target="_blank" href="emailto:appolinaire.dev@gmail.com">Me contacter</Link>

        <SocialIcons className="hidden md:flex mt-3" />
      </Layout>
    </div>
  )
}

export default Footer;