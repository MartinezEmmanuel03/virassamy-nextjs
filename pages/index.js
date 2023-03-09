import { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Responsive from "../components/ExclusivitesCarousel"
import Responsive2 from "../components/AvisCarousel"

import photo from '../public/photo-marilyn.jpg'
import stat from '../public/images/statistiques.png'
import bordureTop from '../public/images/bandeau-top.png'
import bordureBottom from '../public/images/bandeau-bottom.png'
import profil from '../public/images/profil.png'
import home from '../public/images/maison.png'
import feedback from '../public/images/feedback.png'
import mail from '../public/images/mail.png'

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

export default function Home({ presentation, statistiques, exclusivites, avis }) {
  const contactType = {
    personne: "",
    telephone: "",
    email: "",
    message: ""
  }
  const [contact, setContact] = useState(contactType)

  const handleContact = (place, value) => {
    const newContact = { ...contact };
    newContact[place] = value;
    setContact(newContact);
  };

  const submitContact = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      body: JSON.stringify({ contact }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        toast.success("Votre message a été envoyé", toastifyConfig);
        setContact(contactType)
      })
      .catch((err) => {
        toast.error("Une erreur s'est produite", toastifyConfig);
      })
  }

  return (
    <>
      <Head>
        <title>Virassamy Marylin</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <main>
          {/* menu version tablette et desktop */}
          <div className='bg-darkbg md:flex justify-around md:px-24 lg:px-40 py-4 hidden my-12'>
            <a href="#presentation"><h2 className='text-peach font-text text-2xl'> Présentation</h2></a>
            <a href="#exclus"><h2 className='text-peach font-text text-2xl'>Exclusivités</h2></a>
            <a href="#valorisation"><h2 className='text-peach font-text text-2xl'>Valorisation</h2></a>
            <a href="#contact"><h2 className='text-peach font-text text-2xl'>Contact</h2></a>
          </div>
          {/* partie présentation de Marilyn */}
          <div id='presentation' className='flex my-4'>
            <div className='mx-4 lg:ml-8 md:w-2/4 md:pl-10 md:my-4 lg:my-8'>
              <Image
                className='float-right md:hidden rounded-full aspect-square object-cover object-top mx-4 mt-4'
                src={photo}
                height={170}
                width={170}
                alt="photo de Marilyn Virassamy"
              />
              <h2 className='font-text text-text text-center text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-4 lg:mb-8'>Qui suis-je?</h2>
              <p className='font-text text-text text-lg md:text-2xl indent-12 text-justify'>{presentation.texte1}</p>
              <p className='font-text text-text text-lg mt-2 md:mt-4 lg:mt-8 md:text-2xl indent-12 text-justify'>{presentation.texte2}</p>
            </div>
            <div className='hidden md:block mx-auto'>
              <Image
                className='rounded-2xl px-2'
                src={photo}
                width={350}
                alt="photo de Marilyn Virassamy"
              />
            </div>
          </div>
          {/* partie statistiques */}
          <div className='lg:flex mt-12 md:mt-24 lg:justify-around'>
            <div className='mb-12'>
              <div className='flex justify-center'>
                <Image
                  className='mr-1 h-6 w-6 md:h-10 md:w-10'
                  src={stat}
                  alt="icone statistiques"
                />
                <p className='text-peach font-text ml-1 text-xl md:text-4xl'>{statistiques.chiffre1}</p>
              </div>
              <p className='text-text font-text text-center text-xl md:text-4xl mt-2'>Exclusivités en {statistiques.annee1}</p>

            </div>
            <div className='mb-12 px-14'>
              <div className='flex justify-center'>
                <Image
                  className='mr-1 h-6 w-6 md:h-10 md:w-10'
                  src={stat}
                  alt="icone statistiques"
                />
                <p className='text-peach font-text ml-1 text-xl md:text-4xl'>{statistiques.chiffre2}</p>
              </div>
              <p className='text-text font-text text-center text-xl md:text-4xl  mt-2'>Ventes en {statistiques.annee2}</p>

            </div>
          </div>
          {/* partie exclusivités */}
          <div id='exclus' className='m-0 p-0'>
            <Image
              className='m-0 p-0'
              src={bordureTop}
              width="100%"
              alt="bordure top"
            />
            <div className='bg-darkbg m-0 pt-8'>
              <h2 className='text-peach font-title text-5xl md:text-7xl text-center'>Exclusivités</h2>
              <div>
                <Responsive exclusivites={exclusivites} />
              </div>
            </div>
            <Image
              className='mt-0 p-0 bg-darkbg'
              src={bordureBottom}
              width="100%"
              alt="bordure top"
            />
          </div>
          {/* partie Avis */}
          <div className='pt-8'>
            <h2 className='text-peach font-title text-5xl md:text-7xl text-center'>Avis</h2>
            <Responsive2 avis={avis} />
          </div>
          {/* partie valorisation */}
          <div id='valorisation' className='m-0 p-0'>
            <Image
              className='m-0 p-0'
              src={bordureTop}
              width="100%"
              alt="bordure top"
            />
            <div className='bg-darkbg m-0 pt-8 pb-40'>
              <h2 className='text-peach font-title text-5xl md:text-7xl text-center'>Valorisation</h2>
            </div>
            <Image
              className='mt-0 p-0 bg-darkbg'
              src={bordureBottom}
              width="100%"
              alt="bordure top"
            />
          </div>
          {/* partie contact */}
          <div id='contact' className='py-8'>
            <h2 className='text-peach font-title text-5xl md:text-7xl text-center'>Contact</h2>
            <form
              className='bg-lightbg mx-8 md:mx-12 mt-4 md:pt-12 lg:pt-16 py-8 rounded-xl text-center'
              onSubmit={(e) => submitContact(e)}
            >
              <div className='flex flex-col md:flex-row items-center md:mx-8 '>
                <div className='flex flex-col md:h-40 md:justify-between items-center md:items-start w-full'>
                  <input
                    required
                    type="text"
                    placeholder="Nom et Prénom"
                    name="personne"
                    value={contact.personne}
                    onChange={(e) => handleContact(e.target.name, e.target.value)}
                    className='border border-peach w-3/4 md:w-4/5 mb-4 rounded-lg text-peach md:text-2xl pl-4'
                  />
                  <input
                    required
                    type="text"
                    placeholder="Téléphone"
                    name="telephone"
                    value={contact.telephone}
                    onChange={(e) => handleContact(e.target.name, e.target.value)}
                    className='border border-peach w-3/4 md:w-4/5 mb-4 rounded-lg text-peach md:text-2xl pl-4'
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={contact.email}
                    onChange={(e) => handleContact(e.target.name, e.target.value)}
                    className='border border-peach w-3/4 md:w-4/5 mb-4 md:mb-0 rounded-lg text-peach md:text-2xl pl-4'
                  />
                </div>
                <textarea
                  required
                  type="text"
                  row="5"
                  placeholder="Message"
                  name="message"
                  value={contact.message}
                  onChange={(e) => handleContact(e.target.name, e.target.value)}
                  className='border border-peach w-3/4 md:w-4/5 h-40 rounded-lg text-peach md:text-2xl pl-4'
                />
              </div>
              <button
                type="submit"
                className='bg-peach text-white rounded-xl mt-12 py-2 px-4 text-xl'
              >Envoyer</button>
            </form>
          </div>
          {/* tab bar */}
          <div className='flex justify-around md:hidden py-4 rounded-t-full fixed bottom-0 bg-lightbg w-full border-t border-peach'>
            <a href="#presentation"><Image
              className='h-8 w-8'
              src={profil}
              alt="icone présentation"
            /></a>
            <a href="#exclus"><Image
              className='h-8 w-8'
              src={home}
              alt="icone exclusivités"
            /></a>
            <a href="#valorisation"><Image
              className='h-8 w-8'
              src={feedback}
              alt="icone valorisation"
            /></a>
            <a href="#contact"><Image
              className='h-8 w-8'
              src={mail}
              alt="icone contact"
            /></a>
          </div>
        </main >
      </Layout>
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
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/statistiques')
  const res = await response.json();
  const statistiques = res.statistiques[0]

  const response2 = await fetch('http://localhost:3000/api/presentation')
  const res2 = await response2.json();
  const presentation = res2.presentation[0]

  const response3 = await fetch('http://localhost:3000/api/exclusivites')
  const res3 = await response3.json();
  const exclusivites = res3.exclusivites

  const response4 = await fetch('http://localhost:3000/api/avis')
  const res4 = await response4.json();
  const avis = res4.avis

  return {
    props: {
      statistiques,
      presentation,
      exclusivites,
      avis
    },
    revalidate: 5
  };
}
