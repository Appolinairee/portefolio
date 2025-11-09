const Layout = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={`px-32 border-solid w-full inline-block z-0 bg-light dark:bg-dark max-xl:px-24 max-xl:py-0 max-lg:px-16 max-md:px-12 max-sm:px-8 max-md:pt-8 ${className}`}>
            {children}
        </div>
    )
}

export default Layout;