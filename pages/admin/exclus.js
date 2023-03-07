import AdminLayout from "../../components/AdminLayout";
import { useState, useEffect } from "react";
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

export default function Exclus() {

  const excluType = {
    id: "",
    imageurl: "",
    titre: "",
    nombrePieces: "",
    superficie: "",
    localisation: "",
    lienAnnonce: ""
  }
  const [exclu, setExclu] = useState({ excluType });
  const [exclus, setExclus] = useState([]);

  const getAllExclus = async () => {
    const response = await fetch('http://localhost:3000/api/exclusivites', {
      method: 'GET',
    })
    const res = await response.json();
    const exclus = res.exclusivites
    setExclus(exclus)
  }

  useEffect(() => {
    getAllExclus();
  }, [])

  const selectExclu = (id) => {
    if (parseInt(id, 10) !== 0) {
      const exc = exclus.find((e) => e.id === parseInt(id, 10));
      const newExc = { ...exc };
      setExclu(newExc);
    }
    else {
      setExclu(excluType)
    }
  };

  const handleExclu = (place, value) => {
    const newExclu = { ...exclu };
    newExclu[place] = value;
    setExclu(newExclu);
  };


  const submitExclusivite = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:3000/api/exclusivites', {
      method: 'POST',
      body: JSON.stringify({ exclu }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        toast.success("Votre exclusivité a bien été enregistrée", toastifyConfig)
        getAllExclus();
        setExclu(excluType);
      })
      .catch((err) => {
        toast.error("Une erreur s'est produite", toastifyConfig)
      })
  }

  const deleteExclusivite = async (e) => {
    e.preventDefault();
    if (exclu.id) {
      await fetch(`http://localhost:3000/api/exclusivites`, {
        method: 'DELETE',
        body: JSON.stringify({ exclu }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(() => {
          toast.success("Votre exclusivité a bien été supprimée", toastifyConfig);
          getAllExclus();
          setExclu(excluType);
        })
        .catch((err) => {
          toast.error("Une erreur s'est produite", toastifyConfig);
        })
    }
  }

  return (
    <>
      <AdminLayout>
        <main>
          <h1 className="text-center font-text text-text text-4xl mt-8">Exclusivités</h1>
          <div className="flex flex-col items-center">
            <select defaultValue={0} onChange={(e) => { selectExclu(e.target.value) }} className="w-2/3 mx-auto border border-text rounded-lg pl-2 text-xl my-16">
              <option value={0}>Les exclusivités</option>
              {exclus.map((exclu) => (
                <option key={exclu.id} value={exclu.id}>
                  {exclu.titre}
                </option>
              ))}
            </select>
            <form className="flex flex-col items-start w-2/3 mx-auto" onSubmit={(e) => { !exclu.id ? submitExclusivite(e) : deleteExclusivite(e) }}>
              <input required type="text" placeholder="Url de l'image" name="imageurl" value={exclu.imageurl} onChange={(e) => handleExclu(e.target.name, e.target.value)} className="border border-text rounded-lg pl-2 text-xl mb-4 w-full" />
              <input required type="text" maxLength={30} placeholder="Titre de l'annonce" name="titre" value={exclu.titre} onChange={(e) => handleExclu(e.target.name, e.target.value)} className="border border-text rounded-lg pl-4 text-xl mb-4 w-full" />
              <div className="flex justify-between mb-4 w-full">
                <input required type="text" placeholder="Nbre de pièces" name="nombrePieces" value={exclu.nombrePieces} onChange={(e) => handleExclu(e.target.name, e.target.value)} className="border border-text rounded-lg pl-4 text-xl" />
                <input required type="text" placeholder="Superficie" name="superficie" value={exclu.superficie} onChange={(e) => handleExclu(e.target.name, e.target.value)} className="border border-text rounded-lg pl-4 text-xl" />
              </div>
              <input required type="text" maxLength={25} placeholder="Localisation" name="localisation" value={exclu.localisation} onChange={(e) => handleExclu(e.target.name, e.target.value)} className="border border-text rounded-lg pl-4 text-xl mb-4 w-full" />
              <input required type="text" placeholder="Lien de l'annonce" name="lienAnnonce" value={exclu.lienAnnonce} onChange={(e) => handleExclu(e.target.name, e.target.value)} className="border border-text rounded-lg pl-4 text-xl mb-8 w-full" />
              <button type="submit" className="bg-text text-white text-xl border border-text hover:bg-white hover:text-text transition-colors duration-300 rounded-lg px-2 py-1 w-32 self-center">{exclu.id ? "Supprimer" : "Ajouter"}</button>
            </form>
          </div>
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