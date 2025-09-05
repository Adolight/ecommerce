import Meubbur from "../compnents/meubbur"
function NosServices() {
  return (
    <section>
      <div className="flex justify-center m-5">
        <div className=" flex bg-black/15 p-5 w-150 justify-center">
          <h1 className="text-5xl border-lg font-bold mb-4 text-white">Catalogues <span className="text-[#00AD0C]">des Plats</span></h1>
        </div>
      </div>
      <Meubbur />
      <Meubbur />
      
    </section>
  );
}

export default NosServices;
