import React, { useEffect } from 'react';
import Image from "next/image";
import farmerIds from "../json/farmerIds";
import Capsule from "../components/Capsule";
import gsap from 'gsap';

type FarmerIdProps = {
  id: string,
  isFavorite: boolean
}

const Home = () => {
  useEffect(() => {
    gsap.fromTo(".header", {autoAlpha: 0, y: -20}, {autoAlpha: 1, y: 0, duration: 1});
    gsap.fromTo(".farmer-box", {autoAlpha: 0, y: 20}, {autoAlpha: 1, y: 0, duration: 1, delay: 1});
  })

  return (
    <div className="flex justify-center w-screen h-screen px-4 py-4 text-center bg-green-900">
      <div className="">
        <h1 className="px-3 py-3 text-lg font-black tracking-wide text-center text-yellow-300 bg-black header rounded-xl">
          Howdy Farmer!
        </h1>

        <div className="grid grid-cols-12 gap-6 mx-auto my-6 text-black max-w-screen-2xl">
          {farmerIds.map((farmerId: FarmerIdProps) => {
            const { id, isFavorite } = farmerId;

            return (
              <div
                key={id}
                className="relative px-3 pt-3 mx-auto rounded-md farmer-box col-span-full w-80 h-80 ring-2 ring-yellow-200 sm:col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
              >
                <Image
                  objectFit="cover"
                  src={`/images/farmers/${id}.png`}
                  alt={`Farmer #${id}`}
                  layout="fill"
                  className="rounded-md"
                  priority
                >
                </Image>
                <Capsule id={id} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
