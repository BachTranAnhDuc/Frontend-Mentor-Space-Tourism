'use client';

import moonImage from '../../assets/destination/image-moon.png';
import Image from 'next/image';

import destinationLink from '../../untils/destinationLink.json';
import Link from 'next/link';

export const metadata = {
  title: 'Destination',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="3xl:py-16 3xl:px-24 grid grid-rows-max-content-1fr gap-y-20">
      <div className="grid grid-cols-max-content-1fr items-center gap-x-5">
        <h1 className="font-extrabold text-3xl text-devide tracking-[0.3rem]">
          01
        </h1>
        <h1 className="font-normal text-3xl text-text-very-white tracking-[0.2rem] uppercase">
          pick your destination
        </h1>
      </div>

      <div className="grid grid-cols-2">
        <Image
          src={moonImage}
          alt="moon"
          className="justify-self-center self-center"
        ></Image>
        <div className="pr-40 grid grid-rows-max-content-1fr gap-y-10">
          <div className="grid grid-cols-4-max-content gap-x-8">
            {destinationLink.map(({ id, name, href }) => {
              return (
                <Link href={'#'} key={id}>
                  <h3 className="font-extralight text-lg text-text-very-white tracking-widest uppercase">
                    {name}
                  </h3>
                </Link>
              );
            })}
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
