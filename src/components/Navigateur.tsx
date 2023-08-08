import {AiFillHome} from 'react-icons/ai'
import {FaBell} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {SiApostrophe} from 'react-icons/si'
import {ImPencil2} from 'react-icons/im'
import {AiFillHeart} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import {BiImage} from 'react-icons/bi'
import {BsEmojiLaughing} from 'react-icons/bs'
import {LuMapPin} from 'react-icons/lu'

const Navigateur = () => {
  return (
    <nav className='flex  fixed'>
      <div className='ml-4 mt-3 flex '>


      <ul className='flex flex-col space-y-6 items-center'>
        <NavLink to='/'>
        <li>
          <SiApostrophe className='text-5xl hover:text-purple-500 cursor-pointer'/>
        </li>
        </NavLink>
        <NavLink to='/'>
           <li>
          <AiFillHome className='text-3xl hover:text-purple-500 cursor-pointer'/>
        </li>
        </NavLink>
        <li>
          
          <FaBell className='text-3xl hover:text-purple-500 cursor-pointer'/>
        </li>
        <li>
          
          <AiFillHeart className='text-3xl hover:text-purple-500 cursor-pointer'/>
        </li>
       <NavLink to='/profil'>
         <li>
          
          <CgProfile className='text-3xl hover:text-purple-500 cursor-pointer'/>
        </li>
       </NavLink>
          <li>
          
          <MdEmail className='text-3xl hover:text-purple-500 cursor-pointer'/>
        </li>
        <li>
          
         <div className='bg-purple-700 hover:bg-purple-800 hover:text-gray-300 p-3 rounded-full' onClick={()=>window.my_modal_1.showModal()}>
          <ImPencil2 className='text-2xl  cursor-pointer '/>
       <dialog id="my_modal_1" className="modal flex justify-center">

       <form method="dialog" className="modal-box flex justify-between items-center" >
          <div>
            <img src="/assets/jacob.png" alt="profil photo" className='w-12 h-12 rounded-full'/>
          </div>
          
        <div>
           <textarea name="" id="" cols={30} rows={2} placeholder="What's up?!" className="bg-black h-12 w-full "></textarea>
       
       
       <div className='flex items-center justify-between '>
         <div className='flex space-x-3 text-lg ml-4 items-center'>
        <BiImage className=' text-purple-500 text-2xl'/>
        <BsEmojiLaughing className=' text-purple-500'/>
        <LuMapPin className=' text-purple-500'/>
        </div>
        
        <input type="submit" value="Send" className='bg-purple-500 px-6 rounded-full font-bold ' />
       </div>
       
        </div>
       <div className="modal-action">
        <button className="btn">X</button>
      </div> 
       </form>
</dialog>
          
         </div>
        </li>
        <NavLink to='/profil'>
          <li>
          
          <img src="/assets/jacob.png" alt="profil photo" className='w-12 h-12 mt-6 rounded-full' />
        </li>
        </NavLink>
      </ul>
    </div>
    <div className='bg-gray-500 w-[0.2vh] ml-6 left-14 h-full fixed'>

    </div>
    </nav>
  )
}
export default Navigateur