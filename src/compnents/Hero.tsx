//import Slideshow from "./slideshow"
// import Buton from "./buton";
import img6 from "../assets/img6.jpg";

const Hero = () => {
    return (
        <div className="bg-[#ff8c005d] rounded-2xl flex justify-between px-20 m-20">
            <div className=" w-90 h-90 m-10 mx-30 rounded-xl">
              <img src={img6} alt="" className="rounded-xl"/>
            </div>
                
            <div className=" right-0 text-white text-center px-25 py-25 " >
                <h1 className="text-4xl p-5 font-medium  leading-8 ">
                    Savourez  <span className="text-[#00AD0C]">l’excellence</span> à la <br /> Moundoulaise ! 
                </h1>
                <p className="p-5">Nous concevons et fabriquons des meubles en bois uniques : <br />
                     penderies, lits, placards, cuisines… avec un savoir-faire  artisanal et <br />des matériaux durables.
                </p>
                
            </div>
        </div>
    )
}

export default Hero;