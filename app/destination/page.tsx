import { NextPage } from 'next';

import moonImage from '../../assets/destination/image-moon.png';
import Image from 'next/image';

import destinationLink from '../../untils/destinationLink.json';
import Link from 'next/link';

interface Props {}

const page: NextPage<Props> = () => {
  return (
    <div className="grid grid-rows-destination gap-y-6">
      <h1 className="font-normal text-8xl text-text-very-white tracking-widest uppercase">
        moon
      </h1>

      <p className="font-normal text-lg text-text-blue ">
        See our planet as you've never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you're
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </p>

      <div className="h-[1px] w-full bg-white-trans-14-percents backdrop-blur-lg"></div>

      <div className="grid grid-cols-2 gap-x-2">
        <div className="grid grid-rows-max-content-1fr gap-y-1">
          <h1 className="font-normal text-lg text-text-blue uppercase">
            avg. distance
          </h1>
          <p className="font-normal text-3xl text-text-very-white uppercase">
            384,400 km
          </p>
        </div>
        <div className="grid grid-rows-max-content-1fr gap-y-1">
          <h1 className="font-normal text-lg text-text-blue uppercase">
            est. travel time
          </h1>
          <p className="font-normal text-3xl text-text-very-white uppercase">
            3 days
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
