import Header from '../components/Header';
import ComingSoon from '../components/ComingSoon.tsx';
import Footer from '../components/Footer';
import SDLogo from '../components/ui/logo.tsx';
import { BackgroundBeams } from '../components/ui/background-beams.tsx';

function NFTs() {
    return (
        <main className="flex grow flex-col min-h-screen bg-black text-space-blue mx-0 md:px-14 sm:px-7 px-4">
            <Header />
            <BackgroundBeams />
            <SDLogo />
            <ComingSoon />
            <Footer />
        </main>
    );
}

export default NFTs;
