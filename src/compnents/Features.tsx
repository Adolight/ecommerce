

const features = [
  {
   
    title: "A propos de nous",
    desc: "GASTROWOLF est un raustaurant qui offre les plats moudoulais avec un saveur unique et appetissant",
  },
  {
   
    title: "Notre histoire",
    desc: "Notre restaurant est né en 2023, motivé par une passion et un envie d’exposer les plats traditionnel moudoulais aux touristes.",
  },
  {

    title: "Notre mission",
    desc: "Faire decouvrire aux monde le gout a la moundoulaise, des saveurs unique en sont genre.",
  },

];



const Features = () => {
  return (
    <section className="bg-yellow/60 ">
      

      {/* Grille des 6 fonctionnalités */}
      <div className=" bg-white/20 justify-between grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 rounded-2xl px-45 m-20 py-10">
        {features.map((f, index) => (
          <div
            key={index}
            className=" text-white w-55 p-5 hover:shadow-xl transition text-center "
          >
            <h3 className="text-xl leading-20 font-semibold">{f.title}</h3>
            <p className="text-white-600 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default Features;
