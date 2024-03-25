import SDImage from '../../assets/SpaceDolphin.png';

function SDLogo() {
    return (
        <>
            <img
                src={SDImage}
                alt="Space Dolphin Logo"
                className="fixed z-30 lg:w-96 lg:h-96 sm:h-[20rem] sm:w-[20rem] h-[18rem] w-[18rem] right-0 bottom-0 opacity-50 sm:opacity-100"
            />
        </>
    );
}

export default SDLogo;
