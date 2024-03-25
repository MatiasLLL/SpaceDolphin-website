import { FaXTwitter } from 'react-icons/fa6';

function Footer() {
    return (
        <footer
            className="grow-0 z-50 sm:h-36 h:96 px-1 flex flex-col sm:text-[0.85rem] text-[0.65rem] justify-center sm:py-0 py-3"
            id="contact"
        >
            <div className="flex flex-col items-center relative sm:-top-6 -top-3">
                <span className="block transition duration-300 h-[0.75px] w-2/3 -bottom-[0.2rem] inset-x-0 bg-gradient-to-r from-transparent via-new to-transparent" />
                <span className="blur-sm block transition duration-300 h-[0.75px] w-2/3 mx-auto -bottom-[0.2rem] inset-x-10 bg-gradient-to-r from-transparent via-space-blue to-transparent" />
            </div>
            <div className="flex items-center justify-between">
                <div className="flex flex-col text-start justify-start sm:w-1/3 w-[30%] sm:leading-[1.65rem] leading-5 pl-1">
                    <a href="mailto:space@dolphin.xyz">space@dolphin.xyz</a>
                    <p>
                        Contract address:
                        <br />
                        0x5C9bC954F6ed9500A4851c2e3A9b286bF8918c2A
                    </p>
                </div>
                <p className="sm:w-1/3 w-[40%] sm:text-[0.85rem] text-[0.62rem] text-center sm:pb-0 pb-4">
                    &copy; {new Date().getFullYear()} Space Dolphin. All rights
                    soar into the cosmos.
                </p>
                <a
                    href=""
                    className="flex items-center justify-left sm:pl-[4.65rem] pl-[3.65rem] sm:w-1/3 w-[30%] sm:text-2xl text-[1.6rem]"
                >
                    <FaXTwitter />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
