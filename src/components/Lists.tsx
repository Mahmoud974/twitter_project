import {AiOutlineComment, AiOutlineHeart} from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { ExtendedUser, User } from '../share/module'



  interface DHours {
  hour: string,
  minute: string
}


const Lists = () => {
  const otherUsers = useSelector((home:ExtendedUser) => home.profilUser[0].otherUsers)
 console.log(otherUsers);
 

  return (
   <div>
   {
    otherUsers.map((profil:ExtendedUser, index: number) =>   <NavLink to={`/description/${profil.id}`} key={index}>
      <div className="flex flex-col ml-4 mt-6 mr-4" >
    <div className="flex">
        <img src={profil.image.webp}  alt="profil photo" className="w-12 h-12 rounded-full"/>
        {/* Name, Pseudo, time, Status */}
      <div className="ml-4">
      <div className="flex flex-row">
        <p className="font-bold " >
    {profil.username}
      </p>
       <p className="ml-2 text-gray-400">
         {profil.pseudo}
         {profil.id}
      </p>
      <p className="ml-1 text-gray-400">
       
        ·{profil.date}
      
      </p>
      </div>
      <p className="">
        {profil.content}
      </p>
      <div className="mt-4">
         {
profil.img.webp ?
       <img src={profil.img.webp} alt="crypto"  className="rounded-xl"/> : null
     }
  </div>
  {/* Comments and Likes */}
  <div>
    <div className='flex justify-end space-x-3 '>
      <div className='flex mt-3 text-gray-500 hover:text-purple-500'>
      <AiOutlineComment className='text-2xl'/> 
    <p className='ml-1'>
     {profil.tweets.length}
    </p>
    </div>
    <div className='flex mt-3 text-gray-500 hover:text-red-500'>
      <AiOutlineHeart className='text-2xl '/> 
    <p className='ml-1'>
      {profil.likes}
    </p>
    </div>
    </div>
  </div>
      </div>
    </div>
  
      
    </div>
       <hr className='my-4'/>
    </NavLink>
    
)
   }

</div>

  )
}

export default Lists