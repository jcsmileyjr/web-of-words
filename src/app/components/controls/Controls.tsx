import ControlButton from "../controlButton/ControlButton";
import {AlarmClock} from 'lucide-react';

export default function Controls() {
    const test = () => {console.log("test")}
    return (
        <section className="flex flex-row items-center justify-between">
            <ControlButton text={"Shuffle"} iconType={"shuffle"} onClick={test} />
            <ControlButton text={"Pause"} iconType={"pause"} onClick={test} />
            <div className="flex flex-col gap-2 items-center text-primaryBlue">
                <AlarmClock />
                <p className="font-bold">36 seconds</p>
            </div>
            <ControlButton text={"Reset"} iconType={"reset"} onClick={test} />
            <ControlButton text={"Remove"} iconType={"remove"} onClick={test} />
        </section>
    )
}