
import { NavLink, useParams } from 'react-router-dom'
import Navigateur from './Navigateur';
import {IoIosArrowDropleft} from "react-icons/io";
import { useSelector } from 'react-redux';
import { ExtendedUser, User } from '../share/module';
import Post from './Post';



const Description = () => {
const tweetDescription = useSelector((state:ExtendedUser ) => state.profilUser[0].otherUsers)
const {id} = useParams<string>()
console.log(tweetDescription);



   
  return (
     <div className="flex flex-col h-screen ">

        <Navigateur/>
      <div className="absolute left-20 mt-4">
                <div className="ml-4 flex items-center">
         <NavLink to='/'>
             <IoIosArrowDropleft className="text-3xl cursor-pointer hover:text-purple-500"/>
           </NavLink>
        <h1 className="text-2xl font-bold ml-4">
            Discussion
        </h1>

      </div>
      </div>

      {
        tweetDescription.filter((status:{id:number} )=> status.id === Number(id)).map((profil:User) => <div key={profil.id} className="flex flex-col ml-20 mt-20 mr-4" >
 
        {/* Name, Pseudo, time, Status */}
      <div className="ml-4">
      <div className="flex flex-row cursor-pointer" >
       
     
       <div className='flex flex-col ml-2'>
<NavLink to={`/profilOther/${profil.id}`}>
    
      
          <img src={profil.image.webp} alt="profil photo" className="w-12 h-12 rounded-full"/>
       
        </NavLink>


       
         <p className="font-bold " >
    {profil.username}
      </p>
       <p className=" text-gray-400">
         {profil.pseudo}</p>
      </div>
      
      </div>
      <p className="mt-4">
        {profil.content}
      </p>
      <div className="mt-4">
      <img src={profil.img.webp} alt="crypto"  className="rounded-xl"/>
  </div>
  {/* Comments and Likes */}
  <div>
    <div className='flex justify-between items-center  space-x-3 '>
       <p className=" text-gray-400">
      {profil.date}
      </p>
      <div className='flex mt-3 text-gray-500'>
   
    <p className='ml-1 font-bold text-white'>
     {profil.tweets.length}
    </p>
    <p> comments</p>
    </div>
    <div className='flex mt-3 text-gray-500'>
       <p className='ml-1 font-bold text-white'>
     {profil.likes}
    </p>
    <p> J'aime</p>

    </div>
    </div>
  </div>
      </div>

  
      
    </div>)
      }
<hr className='ml-20 mt-12'/>

<div>

</div>
<div className='relative '/>
<div className='ml-24'>
  <Post />
{/* Tweet clients */}
{
  tweetDescription.map((tweet:User) => {console.log(tweet.tweets)
  
      
    {
      tweet.tweets.map(tweet => <div>
  
     <img src={tweet.ok} alt="profil photo" className="w-12 h-12 rounded-full"/>
     
       <div className='flex flex-col ml-2'>
         <p className="font-bold " >
 {tweet.tweet}
      </p>
       <p className=" text-gray-400">
        {tweet.pseudo}
        </p>
      </div>
      
      
      <p className="mt-4">
       
      </p>
  </div>
  )
    }

  }
  )
}
</div>
</div>



  )
}

export default Description