import { query } from "../../lib/data"

export default async function avisHandler(req, res) {

  try {
    if (req.method === 'GET') {
      const querySql =
        "SELECT * FROM avis";
      const data = await query({ query: querySql });
      res.status(200).json({ avis: data })
    }
    else if (req.method === 'POST') {
      const avis = req.body.avis;
      const postAvis = await query({ query: "INSERT INTO avis (personne, etoiles, texteAvis) VALUES (?, ?, ?)", values: [avis.personne, avis.etoiles, avis.texteAvis] });
      res.status(200).json({ avis: postAvis })
    }
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
}