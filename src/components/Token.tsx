import logoUniswap from '../assets/uni-logo.svg';

function Token() {
    // const LogoUniswap = LogoUniswap;
    type LinkUniswapProps = {
        text: string;
        anchor: string;
    };
    const LinkUniswap = ({ text, anchor }: LinkUniswapProps) => (
        <div
            className="col-span-2 flex flex-col items-center mx-6 sm:pb-0 pb-20 group"
            aria-label={text}
        >
            <span className="block transition duration-300 h-[0.75px] group-hover:h-[0.85px] w-full -bottom-[0.2rem] inset-x-0 bg-gradient-to-r from-transparent via-new to-transparent group-hover:via-space-blue group-hover:from-space-light-blue/10 group-hover:to-space-light-blue/10 " />
            <span className="blur-sm block transition duration-300 h-[0.75px] group-hover:h-[0.85px] w-1/2 mx-auto -bottom-[0.2rem] inset-x-10 bg-gradient-to-r from-transparent via-space-blue to-transparent group-hover:via-space-light-blue group-hover:from-space-light-blue/10 group-hover:to-space-light-blue/10 " />
            <a
                className="flex justify-left items-center cursor-pointer"
                aria-label={text}
                href={anchor}
            >
                {' '}
                {/* group-hover:text-space-light-blue  */}
                {text}
                <img
                    src={logoUniswap}
                    alt="Uniswap logo"
                    className="token-svg group w-10 h-full pl-1 pb-1 m-2 group-hover:fill-space-light-blue "
                />
            </a>
            <span className="block transition duration-300  h-[0.75px] group-hover:h-[0.85px] w-full -bottom-[0.2rem] inset-x-0 bg-gradient-to-r from-transparent via-new to-transparent group-hover:via-space-blue group-hover:from-space-light-blue/10 group-hover:to-space-light-blue/10 " />
            <span className="blur-sm block transition duration-300 h-[0.75px] group-hover:h-[0.85px] w-1/2 mx-auto -bottom-[0.2rem] inset-x-10 bg-gradient-to-r from-transparent via-space-blue to-transparent group-hover:via-space-light-blue group-hover:from-space-light-blue/10 group-hover:to-space-light-blue/10 " />
        </div>
    );

    return (
        <section className="lg:h-96 h-[40rem] z-50 flex flex-col sm:justify-center justify-around sm:mt-0 mt-24 sm:pt-32 md:pt-0 pt-0">
            <div className="relative hidden sm:flex flex-col items-center sm:-top-20">
                <span className="block transition duration-300 h-[0.75px] w-1/2 -bottom-[0.2rem] inset-x-0 bg-gradient-to-r from-transparent via-new to-transparent" />
                <span className="blur-sm block transition duration-300 h-[0.75px] w-1/2 mx-auto -bottom-[0.2rem] inset-x-10 bg-gradient-to-r from-transparent via-space-blue to-transparent" />
            </div>
            <div className="lg:h-96 h-[40rem] sm:ml-8 sm:grid sm:grid-cols-10 items-center sm:justify-left sm:relative md:-top-10 sm:-top-20">
                <LinkUniswap
                    text="Buy on Uniswap"
                    anchor="https://app.uniswap.org/swap?outputCurrency=0x8c902412739910407158007Af97Ba39f002A6Fa7&chain=base"
                />
                <article className="md:ml-16 sm:mx-0 mx-6 col-span-5 text-center md:leading-10 leading-9">
                    <h2 className="sm:text-2xl text-[1.4rem] font-bold text-center sm:leading-9 leading-8 sm:pt-0 pt-4">
                        Tokenomics
                    </h2>
                    <h3 className="text-center text-xl sm:leading-9 leading-8 sm:mt-6 mt-2 mb-1 font-semibold">
                        Total Supply: 299,792,000 $DT
                    </h3>
                    <p className="text-center text-lg sm:leading-9 leading-8">
                        Mirroring the speed of light, our total supply honors
                        the swift journey through blockchain space.{' '}
                    </p>
                    <h3 className="text-center text-xl sm:leading-9 leading-8 sm:mt-6 mb-1 mt-8 font-semibold">
                        Founder's Reserve: 40,000,000 $DT
                    </h3>
                    <p className="text-center text-lg sm:leading-9 leading-8 md:pb-[1.55rem] pb-[1.40rem]">
                        Forty million tokens are secured for project
                        development, echoing the variety within dolphin species.
                    </p>
                    <a
                        className="underline underline-offset-3 hover:text-new/85"
                        href="https://basescan.org/address/0x8c902412739910407158007af97ba39f002a6fa7"
                    >
                        View on BaseScan
                    </a>
                </article>
            </div>
        </section>
    );
}

export default Token;
