import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"

const MeublesCuis = () => {
    return (
        <div className="bg-[#ff8c005d] m-20 rounded-2xl">
            
            <div className="m-3 gap-30 p-10 flex justify-center text-white">

                <div className="bg-[#ffffff00] w-80 h-100 rounded-lg ">
                    <div className="overflow-hidden max-h-60 rounded-lg">
                        <img className="" src={img2} alt="image meubles 2" />
                    </div>
                        
                    <div className="p-5">
                        <span>Prix :</span>
                        <p>Descruption :</p>
                    </div>
                </div>

                <div className="bg-[#ffffff00] w-80 h-100 rounded-lg ">
                    <div className="overflow-hidden max-h-60 rounded-lg ">
                        <img className="" src={img3} alt="image meubles3" />
                    </div>
                        
                    <div className="p-5">
                        <span>Prix :</span>
                        <p>Descruption :</p>
                    </div>
                </div>

                <div className="bg-[#ffffff00] w-80 h-100 rounded-lg ">
                    <div className="overflow-hidden max-h-60 rounded-lg ">
                        <img className="" src={img4} alt="image meubles4" />
                    </div>
                        
                    <div className="p-5">
                        <span>Prix :</span>
                        <p>Descruption :</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default MeublesCuis;