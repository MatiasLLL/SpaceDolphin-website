import SDImage from '../../assets/SpaceDolphin.png';

function SDLogo() {
    return (
        <>
            <img
                src={SDImage}
                alt="Space Dolphin Logo"
                className="fixed z-30 lg:w-96 lg:h-96 sm:h-2/5 h-1/3 w-auto right-0 bottom-0 opacity-50 sm:opacity-100"
            />
        </>
    );
}

export default SDLogo;
