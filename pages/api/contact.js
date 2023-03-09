import { mailOptions, transporter } from "../../services/nodemailer";

export default async function contactHandler(req, res) {
  if (req.method === 'POST') {
    const data = req.body.contact
    console.log(data)
    if (!data.personne || !data.telephone || !data.email || !data.message) {
      return res.status(400).json({ message: "Bad request" })
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: `Nouveau message de ${data.personne}`,
        text: `${data.message} \n\n Phone: ${data.telephone} \n\n Name: ${data.personne} \n\n Email: ${data.email}`,
        html: `<h1>Nouveau message de ${data.personne}</h1><p>Message:</p><p>${data.message}</p><p>Coordonnées:</p><p>Téléphone: ${data.telephone}</p><p>Email: ${data.email}</p>`,
      })
      res.status(200).json({ success: true })
    } catch (error) {
      console.log(error)
      return res.status(402).json({ message: error.message })
    }
  }
  return res.status(400).json({ message: "Bad request" })
}