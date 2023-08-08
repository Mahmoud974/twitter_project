
import Lists from "../components/Lists"
import Navigateur from "../components/Navigateur"
import Post from "../components/Post"
import Views from "../components/Views";






const Home = () => {


  return (
    <div className="flex  ">
      {/* Open the modal using ID.showModal() method */}


        <Navigateur/>
      <div className="absolute left-20 mt-4">
        <h1 className="text-2xl font-bold ml-4">
            Home
        </h1>
        <Post/>
        <Views/>
    

         <Lists/>
 
      </div>

    </div>
  )
}

export default Home