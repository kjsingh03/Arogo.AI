import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className='w-full h-[80vh] flex flex-col gap-4 items-center justify-center'>
            <p className='text-6xl text-accent font-semibold'>Page Not found</p>
            <p className='hover:underline'><Link to="/">Click here to go to home page</Link></p>
        </div >
    )
}
