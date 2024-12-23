import { PanelRightOpen } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className='flex items-center justify-between text-primaryBlue'>
            <div className='flex flex-row gap-2'>
                <PanelRightOpen />
                <p className='font-medium  text-base'>Show/Hide</p>
            </div>
            <h1 className='font-bold text-xl'>Web of Words</h1>
            <p className='font-medium text-base'>Score: <span className='font-bold text-xl'>0</span></p>
        </nav>    
    )
}