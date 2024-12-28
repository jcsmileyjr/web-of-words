import LetterBox from "../letterBox/LetterBox";
import { Option } from "@/app/types/option";

export default function Game() {
    const letters: Option[] = [{value:'T', id: 1}, {value:'R', id: 2}, {value:'A', id: 3}, {value:'S', id: 4}, {value:'H', id: 5}, {value:'E', id: 6}, {value:'K', id: 7}, {value:'E', id: 8}, {value:'D', id: 9}];
    return (
        <section>
            <p className="font-bold text-3xl text-center text-primaryBlue my-6">Game</p>


            <div className="flex flex-row flex-wrap gap-2 items-center justify-between">
                {
                    letters.map((option) => {
                        return (
                            <LetterBox key={option.id} letter={option.value} />
                        )
                    })
                }
            </div>
        </section>
    );
}