import { useState } from "react";

export default function AvisCard({ avis }) {
  const [fullText, setFullText] = useState(true)
  const className = fullText === true ? "avisText" : "notAvisText"
  const rate = avis.etoiles;
  const highestRate = ["⭐", "⭐", "⭐", "⭐", "⭐"];
  const personRate = highestRate.slice(5 - rate);
  return (
    <div className="avisCard mt-8 w-4/5 mx-auto hover:scale-110 duration-200 bg-grey rounded-lg p-2 mb-12">
      <p className="text-text font-text font-bold">{avis.personne}</p>
      <div className="flex">
        {personRate.map((e, index) => (<p key={index}>{e}</p>))}
      </div>
      <p className={`{text-text font-text ${className}`}>{avis.texteAvis}</p>
      {(avis.texteAvis.length > 150) ? <button type="button" className="text-peach hover:underline" onClick={() => setFullText(!fullText)}>{fullText === true ? "Voir plus" : "Voir moins"}</button> : ""}
    </div>
  )
}