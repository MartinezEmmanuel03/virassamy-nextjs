import { query } from "../../lib/data"

export default async function exclusivitesHandler(req, res) {

  try {
    if (req.method === 'GET') {
      const querySql =
        "SELECT * FROM exclusivites";
      const data = await query({ query: querySql });
      res.status(200).json({ exclusivites: data })
    }
    else if (req.method === 'POST') {
      const exclu = req.body.exclu;
      const postExclu = await query({ query: "INSERT INTO exclusivites (imageurl, titre, nombrePieces, superficie, localisation, lienAnnonce) VALUES (?, ?, ?, ?, ?, ?)", values: [exclu.imageurl, exclu.titre, exclu.nombrePieces, exclu.superficie, exclu.localisation, exclu.lienAnnonce] });
      res.status(200).json({ exclusivites: postExclu })
    }
    else if (req.method === "DELETE") {
      const id = req.body.exclu.id
      console.log(id)
      const deleteExclu = await query({ query: "DELETE FROM exclusivites WHERE id = ?", values: [id] })
      res.status(200).json({ exclusivites: deleteExclu })
    }
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
}