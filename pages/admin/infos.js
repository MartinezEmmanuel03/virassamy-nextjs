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

export default function Infos() {
  const [paragraphes, setParagraphes] = useState({});

  const getParagraphes = async () => {
    const response = await fetch('http://localhost:3000/api/presentation', {
      method: 'GET',
    })
    const res = await response.json();
    const infos = res.presentation[0]
    setParagraphes(infos)
  }

  useEffect(() => {
    getParagraphes();
  }, [])

  const handleParagraphes = (place, value) => {
    const newParagraphes = { ...paragraphes };
    newParagraphes[place] = value;
    setParagraphes(newParagraphes);
  };

  const submitParagraphes = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:3000/api/presentation', {
      method: 'PUT',
      body: JSON.stringify({ paragraphes }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        toast.success("Votre texte a bien été modifié", toastifyConfig)
      })
      .catch((err) => {
        toast.error("une erreur s'est produite", toastifyConfig)
      })
  }

  return (
    <>
      <AdminLayout>
        <main>
          <h1 className="text-center font-text text-text text-4xl mt-8">Informations</h1>
          <form className="flex flex-col items-center mt-10" onSubmit={() => submitParagraphes()}>
            <textarea required row='5' name="texte1" value={paragraphes.texte1} onChange={(e) => handleParagraphes(e.target.name, e.target.value)} placeholder="premier paragraphe" className="w-3/5 border border-text mb-8 h-32 px-4 pt-2 text-text font-text rounded-lg" />
            <textarea required row='7' name="texte2" value={paragraphes.texte2} onChange={(e) => handleParagraphes(e.target.name, e.target.value)} placeholder="second paragraphe" className="w-3/5 border border-text mb-8 h-48 px-4 pt-2 text-text font-text rounded-lg" />
            <button type='submit' onClick={(e) => submitParagraphes(e)} className="bg-text text-white text-xl border border-text hover:bg-white hover:text-text transition-colors duration-300 rounded-lg px-4 py-2 w-40">Mettre à jour</button>
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