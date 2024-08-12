import { Search, Library, Home as HomeIcon, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, RotateCcw, Square, SquarePlay, MicVocal, List, Speaker, Volume2, PictureInPicture2, Maximize2 } from 'lucide-react'
import Image from 'next/image';
import { PlayIcon, PlusCircleIcon } from '@heroicons/react/16/solid';



export default function Home() {
  return (


    <div className="h-screen flex flex-col">

      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center gap-2 pb-'>
            <div className='w-3 h-3 bg-red-500 rounded-full '></div>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
          </div>

          <nav className='space-y-5 mt-10' >
            <a href="" className='flex items-center gap-1 text-sm fount-semibold text-zin-200'>
              <HomeIcon />
              Home
            </a>
            <a href="" className='flex items-center gap-1 text-sm fount-semibold text-zin-200'>
              <Search />
              Search
            </a>
            <a href="" className='flex items-center gap-1 text-sm fount-semibold text-zin-200'>
              <Library />
              Your Library
            </a>
          </nav>

          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Host 2.0</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Kill_Time</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Pr0sp</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>s08</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Brzera</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Inisky</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Theking 2.0</a>
          </nav>
        </aside>

        <main className=" flex-1 p-6 ">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Bom dia</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/0 transition-colors'><Image src="/album1.jpeg" width={104} height={104}></Image>
              <strong>Iron Maiden</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <PlayIcon className='w-7 h-7' />
              </button> </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/0 transition-colors'><Image src="/album2.jpeg" width={104} height={104}></Image>
              <strong>Iron Maiden</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-7 invisible group-hover:visible'>
                <PlayIcon className='w-7 h-7' />
              </button> </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/0 transition-colors'><Image src="/album3.jpeg" width={104} height={104}></Image>
              <strong>Iron Maiden</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-7 invisible group-hover:visible'>
                <PlayIcon className='w-7 h-7' />
              </button> </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/0 transition-colors'><Image src="/album4.jpeg" width={104} height={104}></Image>
              <strong>Iron Maiden</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-7 invisible group-hover:visible'>
                <PlayIcon className='w-7 h-7' />
              </button> </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/0 transition-colors'><Image src="/album5.jpeg" width={104} height={104}></Image>
              <strong>Iron Maiden</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-7 invisible group-hover:visible'>
                <PlayIcon className='w-7 h-7' />
              </button> </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/0 transition-colors'><Image src="/album7.jpeg" width={104} height={104}></Image>
              <strong>Iron Maiden</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-7 invisible group-hover:visible'>
                <PlayIcon className='w-7 h-7' />
              </button> </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Para Miguel Falcão</h2>

          <div className='grid grid-cols-8 gap-2 mt-4'>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 '>
              <Image src="/album7.jpeg" className='w-full rounded-md' width={125} height={125} alt="Album"></Image>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Iron Maiden bao dimaizi</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 '>
              <Image src="/album5.jpeg" className='w-full rounded-md' width={125} height={125} alt="Album"></Image>
              <strong className='font-semibold'>Daily Mix 2</strong>
              <span className='text-sm text-zinc-500'>Iron Maiden bao dimaizi</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 '>
              <Image src="/album3.jpeg" className='w-full rounded-md' width={125} height={125} alt="Album"></Image>
              <strong className='font-semibold'>Daily Mix 3</strong>
              <span className='text-sm text-zinc-500'>Iron Maiden bao dimaizi</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 '>
              <Image src="/album2.jpeg" className='w-full rounded-md' width={125} height={125} alt="Album"></Image>
              <strong className='font-semibold'>Daily Mix 4</strong>
              <span className='text-sm text-zinc-500'>Iron Maiden bao dimaizi</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 '>
              <Image src="/album1.jpeg" className='w-full rounded-md' width={125} height={125} alt="Album"></Image>
              <strong className='font-semibold'>Daily Mix 5</strong>
              <span className='text-sm text-zinc-500'>Iron Maiden bao dimaizi</span>
            </a>
          </div>



        </main>
      </div>



      <footer className="bg-zinc-900 border-t-2 border-zinc-700 grid grid-flow-col">


        <div className=' flex items-center  '>
          <div className='flex items-center gap-2'><Image src="/album3.jpeg" className=' rounded-md' width={60} height={60} alt="Album"></Image>
            <div>
              <strong className='flex text-sm'>Wasting Love - 2015 Remaster</strong>
              <span className='flex text-zinc-400'>Iron Maiden</span>
            </div>
          <a href='#' className='pl-3'><PlusCircleIcon className='h-5 w-5 ' /></a>
        </div>
        </div>


        <div className='justify-self-center  '>
          <div className='flex gap-6 p-3 justify-center'>
            <button><Shuffle /></button>
            <button><SkipBack /></button>
            <button><Play  /></button>
            <button><SkipForward /></button>
            <button><RotateCcw /></button>
          </div>
          <div className='flex items-center gap-2'> 
            <span>0:31</span>
            <a href='#' className='pb-1'><button className='bg-white h-1 w-72 rounded-md '></button></a>
            <span>3:41</span>
          </div>
        </div>

        <div className='justify-self-end flex items-center gap-3 px-4'>
            <button><SquarePlay /></button>
            <button><MicVocal /></button>
            <button><List /></button>
            <button><Speaker /></button>
            <button><Volume2 /></button>
            <a href='#' className='pb-2'><button className='bg-white h-1 w-24 rounded-md'></button></a>
            <button><PictureInPicture2 /></button>
            <button><Maximize2 /></button>
        </div>


      </footer>

    </div>


  );
}
