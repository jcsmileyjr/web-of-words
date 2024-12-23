

export default function LetterBox({letter}: {letter: string}) {
    return (
        <div className="w-1/4 h-16 flex items-center justify-center text-primaryBlue text-3xl border border-contrastPurple rounded">
            {letter}
        </div>
    );
}