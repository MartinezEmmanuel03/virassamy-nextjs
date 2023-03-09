import Image from "next/image"
import cube from "../public/images/cube.png"
import zone from "../public/images/zone.png"
import location from "../public/images/location.png"


export default function ExclusivitesCard({ exclusivite }) {
  return (
    <div className="mt-8 w-4/5 mx-auto mb-12 hover:scale-110 duration-200">
      <div className=" border border-peach hover:border-2 mx-auto bg-white rounded-xl">
        <a href={exclusivite.lienAnnonce} target="_blank" rel="noreferrer">
          <div>
            <img alt="photo du bien exclusif" src={exclusivite.imageurl} className="rounded-t-xl h-40 w-full" />
            <div>
              <p className="text-text font-text ml-1 text-lg md:text-md text-center">{exclusivite.titre}</p>
              <div className="flex justify-around mt-2">
                <div className="flex">
                  <Image
                    className='mr-1 h-6 w-6'
                    src={cube}
                    alt="icone statistiques"
                  />
                  <p className="text-text font-text ml-1 text-lg">{exclusivite.nombrePieces} pièces</p>
                </div>
                <div className="flex">
                  <Image
                    className='mr-1 h-6 w-6'
                    src={zone}
                    alt="icone statistiques"
                  />
                  <p className="text-text font-text ml-1 text-lg">{exclusivite.superficie} m²</p>
                </div>
              </div>
              <div className="flex justify-center my-2">
                <div className="flex">
                  <Image
                    className='mr-1 h-6 w-4'
                    src={location}
                    alt="icone statistiques"
                  />
                  <p className="text-text font-text ml-1 text-lg">{exclusivite.localisation}</p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}