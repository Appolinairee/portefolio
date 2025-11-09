import { CircularText } from "../icons/Icons";

const Hire = () => {
    return (
        <a href="mailto:appolinaire.dev@gmail.com" target={"_blank"} className="fixed bottom-4 left-4 overflow-hidden max-md:hidden flex items-center justify-center">
            <CircularText className="fill-dark dark:fill-light animate-spin-slow w-40 max-md:w-20" />

            <span className="flex items-center justify-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-dark text-light rounded-full w-[60%] h-[60%] text-[14px] font-bold hover:bg-light hover:text-dark transition-all ease hover:border-dark border-2 dark:bg-light dark:text-dark dark:hover:text-light dark:hover:bg-dark dark:hover:border-light max-md:p-0 max-md:whitespace-nowrap max-md:top-[50%] max-md:left-[50.8%] max-md:text-[11px]! max-md:w-[65%] max-md:h-[65%]">Discutons</span>
        </a>
    )
}

export default Hire;