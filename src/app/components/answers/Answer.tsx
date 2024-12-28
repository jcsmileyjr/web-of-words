
import { InputAnswer } from "@/app/types/inputAnswer"

export default function Answer() {
    const inputAnswers: InputAnswer[] = [{value: "She", points: 1, id: 1}, {value: "The", points: 1, id: 2}, {value: "Thread", points: 6, id: 3}, {value: "Head", points: 1, id: 4}, {value: "Read", points: 1, id: 5}, {value: "Here", points: 1, id: 6}, {value: "Trees", points: 5, id: 7}, {value: "Rat", points: 1, id: 8}, {value: "Are", points: 1, id: 9},];
    return (
        <section>
            <h2 className="font-medium text-xl text-center text-primaryBlue my-6 underline">Answers</h2>
            <div className="flex flex-row flex-wrap justify-between gap-2">
                {
                    inputAnswers.map((answer) => {
                        return (
                            <div key={answer.id} className="flex flex-row justify-between w-1/4 mb-2">
                                <p className="text-primaryBlue font-medium">{answer.value}</p>
                                <p className="text-secondaryBlue font-medium">{answer.points}</p>         
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}   