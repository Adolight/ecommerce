import React, { useState } from 'react';

export default function FormulaireContact() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    sujet: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici tu peux envoyer les données à un backend ou afficher un message de succès
    console.log(formData);
  };

  return (

    <section className='text-center'>
        <h2 className='text-white mt-30 '>Laissez nous vos message ici</h2>
    <form
      onSubmit={handleSubmit}
      className="w-250 mx-auto text-white bg-white/20  p-8 shadow-lg space-y-6 m-15"
    >
  
      <div className=''>

        
        <div className='flex gap-10 mb-10'>
            <label className="block ">Nom</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              className="w-200 border border-black rounded px-3 py-2"
              required
            />
        </div>
        

        <div className='flex gap-10 mb-10'>
          <label className="block">E-mail</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-200 border border-black rounded px-3 py-2"
            required
          />
        </div>

        <div className='flex gap-10 mb-10'>
          <label className="block">Sujet</label>
          <input
            type="text"
            name="sujet"
            value={formData.sujet}
            onChange={handleChange}
            className="w-200 border border-black rounded px-3 py-2"
          />
        </div>

        <div className='flex gap-10 mb-10'>
          <label className="block ">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-200 border border-black rounded px-3 py-2 h-32"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-2xl transition-transform hover:scale-95 w-25"
      >
        Envoyer
      </button>
    </form>
    </section>
    
  );
}
