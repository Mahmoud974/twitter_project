import { NavLink } from "react-router-dom";
import Navigateur from "./Navigateur";
import {IoIosArrowDropleft} from "react-icons/io"
import Post from "./Post";
import ListsComments from "./ListsComments";

const List = () => {
    return (
        <div className="flex ">
            
        <Navigateur/>
        
     <div className="ml-4 mt-4 absolute left-20 mr-4">
        <div className="flex items-center">
           <NavLink to='/'>
             <IoIosArrowDropleft className="text-3xl cursor-pointer hover:text-purple-500"/>
           </NavLink>
        <h1 className="text-2xl font-bold ml-4">
            Status
        </h1>
        </div>

 <div className="flex mt-12">
        <div>
           
        <div className="flex flex-row">
             <img src="/assets/image-juliusomo.webp" alt="profil photo" className="w-12 h-12"/>
        <div className="flex flex-col items-center ml-2 ">
            <p className="font-bold " >
        Pépite Sexiste
      </p>
       <p className="text-gray-400">
        @PépiteSexiste 
      </p>
        </div>
     
        </div>
        {/* Name, Pseudo, time, Status */}
      <div className="ml-4">
      
      </div>
      <p className="my-2">
        Pourquoi aurait-on besoin d'une place de parking rose ..? 
      </p>
      <div className="mt-4">
      <img src={`https://source.unsplash.com/random/?Games/${Math.random()}"`} alt="crypto"  className="rounded-xl"/>
  </div>
  <div className="my-4">
    <p className=" text-gray-500">
        5:41 AM · 29 mai 2023
    </p>

  </div>
<div className="bg-gray-500 w-full h-[0.2vh] my-2"></div>

  
  {/* Comments and Likes */}
  <div>
    <div className='flex justify-between space-x-3 text-white '>
      <div className='flex mt-3  '>
    
    <p className='ml-1 font-bold'>
      205
    </p>
    <p className="ml-1 text-gray-400">Comments</p>
    </div>
    <div className='flex mt-3 text-gray-500'>
      
    <p className='ml-1 font-bold text-white'>
      205
    </p>
     <p className="ml-1 text-gray-400">Likes</p>
    </div>
    </div>
  </div>
  <div className="bg-gray-500 w-full h-[0.2vh] my-4"></div>
        <Post/>

          <div className="bg-gray-500 w-full h-[0.2vh] my-4"></div>

            <ListsComments/>
      </div>
    </div>
  
      
    </div>
        
     

    </div>
    );
};

export default List;