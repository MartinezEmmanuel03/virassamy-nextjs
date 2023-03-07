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

export default function Stats() {
  const [statistiques, setStatistiques] = useState({})

  const getStatistiques = async () => {
    const response = await fetch('http://localhost:3000/api/statistiques', {
      method: 'GET',
    })
    const res = await response.json();
    const infos = res.statistiques[0]
    setStatistiques(infos)
  }

  useEffect(() => {
    getStatistiques();
  }, [])

  const handleStatistiques = (place, value) => {
    const newStatistiques = { ...statistiques };
    newStatistiques[place] = value;
    setStatistiques(newStatistiques);
  };

  const submitStatistiques = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:3000/api/statistiques', {
      method: 'PUT',
      body: JSON.stringify({ statistiques }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        toast.success("Vos statistiques ont bien été mises à jour", toastifyConfig);
      })
      .catch((err) => {
        toast.error("une erreur s'est produite", toastifyConfig)
      })
  }

  return (
    <>
      <AdminLayout>
        <main>
          <h1 className="text-center font-text text-text text-4xl mt-16">Statistiques</h1>
          <form className="flex flex-col items-center" onSubmit={(e) => submitStatistiques(e)}>
            <div className="mt-24 flex justify-center">
              <input required type="text" name="chiffre1" value={statistiques.chiffre1} onChange={(e) => handleStatistiques(e.target.name, e.target.value)} className="border border-text rounded-lg text-text font-text text-4xl w-24 text-center" />
              <p className="mx-2 text-text font-text text-4xl">Exclusivités en</p>
              <input required type="text" name="annee1" value={statistiques.annee1} onChange={(e) => handleStatistiques(e.target.name, e.target.value)} className="border border-text rounded-lg text-text font-text text-4xl w-24 text-center" />
            </div>
            <div className="mt-16 flex justify-center">
              <input required type="text" name="chiffre2" value={statistiques.chiffre2} className="border border-text rounded-lg text-text font-text text-4xl w-24 text-center" />
              <p className="mx-2 text-text font-text text-4xl">Ventes en</p>
              <input required type="text" name="annee2" value={statistiques.annee2} className="border border-text rounded-lg text-text font-text text-4xl w-24 text-center" />
            </div>
            <button type="submit" onClick={(e) => submitStatistiques(e)} className="bg-text text-white text-xl border border-text hover:bg-white hover:text-text transition-colors duration-300 rounded-lg px-4 py-2 w-40 mt-16">Mettre à jour</button>
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