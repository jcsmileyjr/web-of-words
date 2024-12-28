'use client'
import { Shuffle, OctagonPause, BadgeX, Trash2 } from 'lucide-react';

export default function ControlButton({text, iconType, onClick}: {text: string, iconType: string, onClick: () => void}) {
    return (
        <button onClick={onClick} className='flex flex-col gap-2 text-primaryBlue'>
            <div className=''>
                {iconType === "shuffle" && <Shuffle />}
                {iconType === "pause" && <OctagonPause  />}
                {iconType === "reset" && <BadgeX  />}
                {iconType === "remove" && <Trash2  />}
            </div>
            <p>{text}</p>
        </button>
    )
}