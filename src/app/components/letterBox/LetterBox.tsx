

// Use React state to persist the selected letter styling
export default function LetterBox({letter}: {letter: string}) {
    return (
        <button className="w-1/4 h-16 flex items-center justify-center text-primaryBlue text-3xl border-2 active:border-4 border-contrastPurple rounded focus:outline-none focus:border-secondaryBlue active:border-borderStrawberry transition duration-300">
            {letter}
        </button>
    );
}