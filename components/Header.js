import { MicrophoneIcon, SearchIcon } from '@heroicons/react/outline'
import { XIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useRouter } from "next/router"
import { useRef } from 'react'
import Avatar from './Avatar'
import HeaderOptions from './HeaderOptions'
const png = require('../download.jpg')

const Header = () => {
    const searchInputRef = useRef(null)
    const router = useRouter()

    const search= e =>{
        e.preventDefault()
        const trem = searchInputRef.current.value
        if (!trem) {return null}
        router.push(`/search?term=${trem}`)
      }
      
    return (
        <header className="sticky top-0 bg-white">
            <div className="flex items-center w-full p-6">
            <Image 
            src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
            height={40}
            width={120}
            alt=''
            className='cursor-pointer'
            onClick={() => {router.push('/')}}
            />
            <form className='flex items-center flex-grow max-w-3xl px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg'>
                <input defaultValue={router.query.term} type="text" ref={searchInputRef} className='flex-grow w-full focus:outline-none' />
                <XIcon className='text-gray-500 transition transform cursor-pointer h-7 decoration-100 hover:scale-125 sm:mr-3'
                onClick={()=>{searchInputRef.current.value = ""}}/>
                <MicrophoneIcon className='hidden h-6 pl-4 mr-3 text-blue-500 border-l-2 border-gray-300 cursor-pointer sm:inline-flex'/>
                <SearchIcon className='hidden h-6 text-blue-500 cursor-pointer sm:inline-flex'
                onClick={search}/>
                <button type='submit' onClick={search} hidden>Search</button>
            </form>
            <Avatar url={png} className='ml-auto'/>
            </div>
            
            {/* HeaderOptions */}
            <HeaderOptions/>
        </header>
    )
}

export default Header
