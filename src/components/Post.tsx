import { useState } from 'react'
import {BiImage} from 'react-icons/bi'
import {BsEmojiLaughing} from 'react-icons/bs'
import {LuMapPin} from 'react-icons/lu'
import { useDispatch } from 'react-redux'


const Post = () => {
  const [text, setText] = useState<string>('')
  const dispatch = useDispatch()



  return (
     <div className="">
        
    <div className="flex ml-6 mt-8">
      <div>
          <img src="/assets/image-juliusomo.webp" alt="profil photo" />
      </div>
       <form action="" >
         <textarea name="" id="" cols={30} rows={2} placeholder="What's up?!" className="ml-4 bg-black h-12"></textarea>
       <div className='flex items-center justify-between '>
         <div className='flex space-x-3 text-lg ml-4 items-center'>
        <BiImage className=' text-purple-500 text-2xl'/>
        <BsEmojiLaughing className=' text-purple-500'/>
        <LuMapPin className=' text-purple-500'/>
        </div>
        <input type="submit" value="Send" className='bg-purple-500 px-6 rounded-full font-bold ' />
       </div>
       </form>
    </div>


     </div>
  )
}

export default Post