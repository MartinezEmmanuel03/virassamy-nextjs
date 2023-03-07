import { query } from "../../lib/data"

export default async function presentationHandler(req, res) {

  try {
    if (req.method === 'GET') {
      const querySql =
        "SELECT texte1, texte2 FROM presentation";
      const data = await query({ query: querySql });
      res.status(200).json({ presentation: data })
    }
    else if (req.method === 'PUT') {
      const paragraphes = req.body.paragraphes;
      const updateTexts = await query({ query: "UPDATE presentation SET texte1 = ?, texte2 = ? WHERE id = ?", values: [paragraphes.texte1, paragraphes.texte2, 1] })
      res.status(200).json({ presentation: updateTexts })
    }
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
}