import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../components/Avatar'
import {ViewGridIcon} from '@heroicons/react/solid'
import {SearchIcon,MicrophoneIcon} from '@heroicons/react/outline'
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'
const png = require('../download.jpg')

export default function Home() {
  
  const router = useRouter()
  const searchInputRef = useRef(null)

  const search= e =>{
    e.preventDefault()
    const trem = searchInputRef.current.value
    if (!trem) {return null}
    router.push(`/search?term=${trem}`)
  }
  
  return (
    <div className='flex flex-col items-center justify-center h-screen '>
      <Head>
        <title>Google 2.O</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
      </Head>
      
      {/* Header */}
      <header className='flex justify-between w-full p-5 text-sm text-gray-700'>

        {/* Left */}
        <div className="flex items-center space-x-4">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-4">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icon */}
          <ViewGridIcon className="w-10 h-10 p-2 rounded-full cursor-pointer hover:bg-gray-100"/>

          {/* Avatar */}
          <Avatar url={png}/>

        </div>
        
      </header>

      {/* Body */}
      <form className='flex flex-col items-center flex-grow w-4/5 mt-44'>
        <Image 
        alt='Google' 
        src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
        height={100}
        width={300}
        />
        <div className="flex items-center w-full max-w-md px-5 py-3 mt-5 border border-gray-200 rounded-full hover:shadow-lg focus-within:shadow-lg sm:max-w-xl lg:max-w-2xl">
          <SearchIcon onClick={search} className="h-5 mr-3 text-gray-500 rounded-full cursor-pointer"/>
          <input type="text" className='flex-grow focus:outline-none' ref={searchInputRef} />
          <MicrophoneIcon className="h-5 rounded-full cursor-pointer"/>
        </div>
        <div className="flex flex-col justify-center w-1/2 mt-8 space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className='px-2 btn' onClick={search}>Google Search</button>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <button className='px-2 btn' onClick={search}>I'm Feeling Lucky</button>
        </div>
      </form>

      {/* Footer */}
      <Footer/>

    </div>
  )
}
