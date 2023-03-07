import AdminLayout from "../../components/AdminLayout";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastifyConfig = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "light",
};

export default function Avis() {
  const [avis, setAvis] = useState({})

  const handleAvis = (place, value) => {
    const newAvis = { ...avis };
    newAvis[place] = value;
    setAvis(newAvis);
  };

  const submitAvis = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:3000/api/avis', {
      method: 'POST',
      body: JSON.stringify({ avis }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        toast.success("Votre avis a bien été enregistré", toastifyConfig);
      })
      .catch((err) => {
        toast.error("Une erreur s'est produite", toastifyConfig);
      })
  }

  return (
    <>
      <AdminLayout>
        <main>
          <h1 className="text-center font-text text-text text-4xl mt-8">Avis</h1>
          <form className="flex flex-col items-center mt-8 w-3/5 mx-auto" onSubmit={(e) => submitAvis(e)}>
            <input required type="text" name="personne" value={avis.personne} onChange={(e) => handleAvis(e.target.name, e.target.value)} placeholder="Nom et prénom de l'auteur de l'annonce" className="border border-text rounded-lg pl-4 text-xl w-full" />
            <select defaultValue={0} name="etoiles" value={avis.etoiles} onChange={(e) => handleAvis(e.target.name, e.target.value)} className="w-2/3 mx-auto border border-text rounded-lg pl-2 text-xl my-8">
              <option value={0}>Nombre d'étoiles</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <textarea required row='9' placeholder="Texte de l'avis" name="texteAvis" value={avis.texteAvis} onChange={(e) => handleAvis(e.target.name, e.target.value)} className="w-full border border-text mb-8 h-48 px-4 pt-2 text-text font-text rounded-lg" />
            <button type="submit" className="bg-text text-white text-xl border border-text hover:bg-white hover:text-text transition-colors duration-300 rounded-lg px-4 py-2 w-40 mt-8">Ajouter</button>
          </form>
        </main>
      </AdminLayout>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}