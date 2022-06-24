import pic1 from "../../../assets/pic1.jpg";
import pic2 from "../../../assets/kudan1.jpg";
import pic3 from "../../../assets/Tilaurakot1.jpg";
// import bgPic from "../../../assets/ShrishPro.png";
import { useNavigate } from "react-router-dom";
const Header = () => {

  const navigate=useNavigate();

  // const [menu, setMenu] = useState(false);
  return (
    <div>
      <section>
        <div className="w-full relative " >
          <img className="absolute w-full inset-0 h-full object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/hero2-bg.png" alt="we care family" />

          {/* <img className="absolute w-full inset-0 h-full object-cover object-center" src={bgPic} alt="section"/> */}
          
          <div className=" flex lg:flex-row flex-col relative items-center  z-10 ">
            <div className="w-full lg:w-1/2 h-[70vh] tm:min-h-[85vh]  relative md:container md:mx-auto ">
              {/* <img tabIndex="0" role="img" aria-label="people smiling" className="mx-auto" src="https://cdn.tuk.dev/assets/templates/weCare/hero2-left.png" alt="people smiling" /> */}
              <img  className="absolute right-0 top-[120px] tmd:top-28 tmd:left-32 xl:left-40 w-[280px] h-[220px] tm:w-[370px] tm:h-[270px] tmd:w-[370px] tmd:h-[280px] lg:w-[320px] lg:h-[230px]    xl:w-[350px] xl:h-[260px] z-50 rounded-xl transition-all ease-in-out duration-500 hover:z-[200] hover:scale-105" src={pic1} alt="people smiling" />


               <img className="absolute top-10 left-12 tmd:left-6 xl:left-10 w-[220px] h-[150px] tm:w-[270px] tm:h-[200px]  tmd:w-[300px] tmd:h-[230px] lg:w-[200px] lg:h-[150px] xl:w-[270px] xl:h-[200px] rounded-xl transition-all ease-in-out duration-500 hover:z-[200] hover:scale-105" src={pic2} alt="people smiling" />

              <img className="absolute top-72 right-0 xl:top-80 tmd:left-72 xl:left-80 z-[80] w-[190px] h-[140px] tm:w-[220px] tm:h-[170px]  tmd:w-[300px] tmd:h-[230px]] lg:w-[200px] lg:h-[150px] xl:w-[270px] xl:h-[200px] rounded-xl transition-all ease-in-out duration-500 hover:z-[200] hover:scale-105"  src={pic3} alt="people smiling" /> 
              
            </div>
            <div  className="w-full lg:w-1/2 h-full px-6 lg:px-2 pb-10 lg:scroll-pb-10">
              <p tabIndex="0" className="text-amber-700 uppercase text-2xl mb-2 lg:mb-4">Welcome to</p>
              <h1 tabIndex="0" className="text-amber-700 text-4xl tracking-[3px] lg:text-6xl font-bold md:mb-5 lg:mb-8">Yatharup</h1>
              <p tabIndex="0" className="text-gray-800 font-regular mb-3 text-lg lg:text-xl lg:mb-8 capitalize">Loreal Paris offerincare products is developed and rigorously tested with leading scientists. Indulge yourself in a luxurious and sensorial skincare experience. Cutting-edge innovations, proven by Science.</p>
             
                <div className="sm:flex  justify-center" >


                  <button  aria-label="search" className="focus:bg-amber-700 focus:ring-amber-700 focus:ring-2 focus:ring-offset-2 text-white bg-amber-600 hover:bg-amber-700 mt-4 sm:mt-0 p-3 lg:-ml-8 rounded w-full sm:w-auto relative text-lg lg:text-xl" onClick={()=>navigate("./createnewblog")}>
                    Create a new blog
                  </button>
               

              </div>
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
            /* Top menu */
            .top-100 {
                animation: slideDown 0.5s ease-in-out;
            }
            @keyframes slideDown {
                0% {
                    top: -50%;
                }
                100% {
                    top: 0;
                }
            }
            * {
                outline: none !important;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                -webkit-tap-highlight-color: transparent;
            }`}
      </style>
    </div>
  );
};
export default Header;
