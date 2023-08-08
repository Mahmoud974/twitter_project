import { NavLink } from "react-router-dom"
import Navigateur from "../components/Navigateur"
import {IoIosArrowDropleft} from "react-icons/io"
import {LuMapPin} from "react-icons/lu"
import {BsCalendarDate} from "react-icons/bs"
import MyCompte from "../components/MyCompte"
import { useSelector } from "react-redux"
import Lists from "../components/Lists"
import { ExtendedUser } from '../share/module';



const Profil = () => {

  const profilUser = useSelector((profil:ExtendedUser)=> profil.profilUser[0].currentUser)
  
  return (
        <div className="flex ">
        <Navigateur/>

{
  profilUser.map((profil:ExtendedUser, index: number) =>

  <div key={index} className=" mt-4 absolute left-20 ">
        <div className="ml-4 flex items-center">

           <NavLink to='/'>
             <IoIosArrowDropleft className="text-3xl cursor-pointer hover:text-purple-500"/>
           </NavLink>

        <h1 className="text-2xl font-bold ml-4">
         {profil.username}
        </h1>
        </div>
        <div>
             <img src="/assets/games.jpg" alt="crypto"  className=" w-full bg-cover  mt-5"/>
        </div>
        <img src="/assets/jacob.png" alt="profil photo" className="w-28 h-28 border-3 -mt-12 ml-6 rounded-full border-4 relative border-gray-900"/>

        {/* Pseudo  */}
         <div className="ml-4 mt-6 flex flex-col">
        <p className="font-bold text-2xl " >
          {profil.username}
      </p>
       <p className=" text-gray-400">
         {profil.pseudo} 
      </p>
      <p className="mt-3">
         {profil.content}

      </p>
      {/* Donnée Abonnements, localisation */}
        <div>
            <div className="flex items-center mt-1 text-gray-500">
            <LuMapPin/>
      <p className="ml-1">
          {profil.spot}
      </p>
        </div>
        <div className="flex items-center  text-gray-500">
            <BsCalendarDate/>
      <p className="ml-1">
        A rejoint Twitter en juin 2020
      </p>
        </div>
        <div className="mt-2 flex space-x-6">
            <div className="flex">
                <p className="font-bold">
                    {profil.followers}
                </p>
                <p className="text-gray-500 ml-1">abonnements</p>
            </div>
            <div className="flex">
                <p className="font-bold">3</p>
                <p className="text-gray-500 ml-1">abonnés</p>
            </div>
        </div>
        
        </div>
    <MyCompte/>
  <Lists tweets={profil.tweet} />
      </div>
      
      </div>
  )
}
     

    </div>
  )
}

export default Profil