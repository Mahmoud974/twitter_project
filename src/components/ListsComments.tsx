import {AiOutlineComment, AiOutlineHeart} from 'react-icons/ai'

const ListsComments = () => {
    return (
        <div>
      <div className="flex flex-col ml-4 mt-6 mr-4">
    <div className="flex">
        <img src="/assets/image-juliusomo.webp" alt="profil photo" className="w-12 h-12"/>
        {/* Name, Pseudo, time, Status */}
      <div className="ml-4">
      <div className="flex flex-row">
       
       <p className="text-white font-bold">
        @PépiteSexiste 
      </p>
      <p className="ml-1 text-gray-400">
      · 6h
      </p>
      </div>
      <p className="">
        Pourquoi aurait-on besoin d'une place de parking rose ..? 
      </p>
      
  {/* Comments and Likes */}
  <div>
    <div className='flex justify-end space-x-3 '>
      <div className='flex mt-3 text-gray-500'>
      <AiOutlineComment className='text-2xl'/> 
   
    </div>
    <div className='flex mt-3 text-gray-500'>
      <AiOutlineHeart className='text-2xl'/> 
   
    </div>
    </div>
  </div>
      </div>
    </div>
  
      
    </div>

    <div className="bg-gray-500 w-full h-[0.2vh] mt-4 "></div>
</div>
    );
};

export default ListsComments;