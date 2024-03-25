function Header() {
  return ( 
    <header className="z-50 flex h-1/5 justify-between items-center pt-[0.85rem]">
      <div className="flex flex-col items-center justify-center overflow-hidden rounded-md mt-5 sm:-ml-12 w-2/5 sm:w-fit">
        <h1 className="sm:text-3xl text-[1.2rem] leading-[1.5rem] sm:font-bold font-thin sm:tracking-wide font-inter">Space Dolphin</h1>
        <div className="w-[22rem] h-5 relative">
          {/* Gradients */}
          <div className="absolute inset-x-11 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-11 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-[8.25rem] top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-[8.25rem] top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        </div>
      </div>
      <nav>
        <ul className="flex sm:space-x-9 space-x-3 text-sm sm:text-base cursor-pointer relative">
          <li>
            <a href="/" className="hover:text-new/90 relative group/btn">Home<BottomGradient /></a>
          </li>
          <li className="group relative">
            <a href="/nfts"  className="hover:text-[#0f51c1] text-new/80 relative group/btn">NFTs<BottomGradient /></a>
            <span className="hidden group-hover:block absolute whitespace-nowrap px-2 py-[0.4rem] bg-space-light-blue/85 text-space-stars text-xs rounded-md shadow-md -translate-y-[2.7rem] left-[2.3rem] transform -translate-x-2  overflow-hidden">Coming soon!</span>
          </li>
          <li>
            <a href="#contact" className="hover:text-new/90 relative group/btn">Contact<BottomGradient /></a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-300 opacity-0 absolute h-[0.75px] w-full -bottom-[0.2rem] inset-x-0 bg-gradient-to-r from-transparent via-new to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-300 opacity-0 absolute h-[0.75px] w-1/2 mx-auto -bottom-[0.2rem] inset-x-10 bg-gradient-to-r from-transparent via-space-blue to-transparent" />
    </>
  );
};





// <SparklesCore
// background="transparent"
// minSize={0.4}
// maxSize={0.8}
// particleDensity={3000}
// className="absolute w-full h-full top-0 left-0"
// particleColor="#5F91C7"

// />
// {/* Radial Gradient to prevent sharp edges */}
// {/* <div className="relative inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div> */}
