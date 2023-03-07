import Link from 'next/link';
import Image from 'next/image'
import house from '../public/images_admin/house.png'
import pen from '../public/images_admin/edit.png'
import feedback from '../public/images_admin/feedback.png'
import logout from '../public/images_admin/disconnect.png'

export default function AdminLayout({ children }) {
  return (
    <div className="flex w-screen h-screen">
      <header className='bg-text w-1/5 h-full'>
        <h1 className='text-white font-bold text-center text-2xl mt-8 mb-20'>Tableau de bord</h1>
        <div className='flex items-end mb-4'>
          <Image
            className='h-8 w-8 ml-4 mr-4'
            src={house}
            alt="icone maison"
          />
          <Link href="/"><h2 className='text-white font-text text-xl p-0'>Accueil</h2></Link>
        </div>
        <div className='flex items-end mb-4'>
          <Image
            className='h-8 w-8 ml-4 mr-4'
            src={pen}
            alt="icone edit"
          />
          <Link href="/admin/infos"><h2 className='text-white font-text text-xl p-0'>Informations</h2></Link>
        </div>
        <div className='flex items-end mb-4'>
          <Image
            className='h-8 w-8 ml-4 mr-4'
            src={pen}
            alt="icone edit"
          />
          <Link href="/admin/stats"><h2 className='text-white font-text text-xl p-0'>statistiques</h2></Link>
        </div>
        <div className='flex items-end mb-4'>
          <Image
            className='h-8 w-8 ml-4 mr-4'
            src={house}
            alt="icone maison"
          />
          <Link href="/admin/exclus"><h2 className='text-white font-text text-xl p-0'>Exclusivités</h2></Link>
        </div>
        <div className='flex items-end mb-4'>
          <Image
            className='h-8 w-8 ml-4 mr-4'
            src={feedback}
            alt="icone avis"
          />
          <Link href="/admin/avis"><h2 className='text-white font-text text-xl p-0'>Avis</h2></Link>
        </div>
        <div className='flex items-end mb-4'>
          <Image
            className='h-8 w-8 ml-4 mr-4'
            src={logout}
            alt="icone disconnect"
          />
          <h2 className='text-white font-text text-xl p-0'>Déconnexion</h2>
        </div>
      </header>
      <main className='w-full h-full'>{children}</main>
    </div>
  );
}