export default function Admin() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-lightbg w-5/6 lg:w-1/4 rounded-2xl shadow-md border-2 border-peach">
        <h2 className="text-center text-text text-4xl font-text font-bold mt-4">
          Connexion
        </h2>
        <form
          className="bg-lightbg px-6 pt-6 pb-8 rounded-2xl"
        >
          <input
            required
            className="shadow appearance-none border border-peach rounded-xl w-full bg-white py-2 px-3 text-text placeholder-text font-text"
            id="Identifiant"
            name="utilisateur"
            value=""
            type="text"
            placeholder="Identifiant"
          />
          <input
            required
            className="shadow appearance-none border border-peach rounded-xl w-full mt-4 py-2 bg-grey px-3 text-text placeholder-text font-text"
            id="Mot de passe"
            name="mot_de_passe"
            value=""
            type="password"
            placeholder="Mot de passe"
          />
          <div className="flex flex-col items-center mt-8">
            <button
              type="submit"
              className="rounded-xl px-6 py-2 border border-peach bg-white text-peach hover:bg-peach hover:text-white transition-colors duration-300 text-xl"
            >
              Valider
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}