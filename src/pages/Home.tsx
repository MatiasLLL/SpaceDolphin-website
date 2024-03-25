import About from '../components/About';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Token from '../components/Token.tsx';
import SDLogo from '../components/ui/logo.tsx';
import { BackgroundBeams } from '../components/ui/background-beams.tsx';

function Home() {
    return (
        <main className="flex grow flex-col min-h-screen bg-black text-space-blue mx-0 md:px-14 sm:px-7 px-4">
            <Header />
            <BackgroundBeams />
            <SDLogo />
            <About />
            <Token />
            <Footer />
        </main>
    );
}

export default Home;
