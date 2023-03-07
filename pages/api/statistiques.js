import { query } from "../../lib/data"

export default async function statistiquesHandler(req, res) {

  try {
    if (req.method === 'GET') {
      const querySql =
        "SELECT chiffre1, annee1, chiffre2, annee2 FROM statistiques";
      const valueParams = [];
      const data = await query({ query: querySql, values: [valueParams] });
      res.status(200).json({ statistiques: data })
    } else if (req.method === 'PUT') {
      const stats = req.body.statistiques
      const updateStats = await query({ query: "UPDATE statistiques SET chiffre1 = ?, annee1 = ?, chiffre2 = ?, annee2 = ? Where id = ?", values: [stats.chiffre1, stats.annee1, stats.chiffre2, stats.annee2, 1] })
      res.status(200).json({ statistiques: updateStats })
    }
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
}