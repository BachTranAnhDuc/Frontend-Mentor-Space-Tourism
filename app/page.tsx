import { NextPage } from 'next';
import Link from 'next/link';

interface Props {}

const page: NextPage<Props> = () => {
  return (
    <section className="h-full grid md:content-center">
      <div className="py-12 md:px-24 sm:px-10 grid 2xl:grid-cols-2 sm:grid-cols-1 sm:grid-rows-max-content-1fr md:items-end sm:items-center 2xl:gap-x-10 md:gap-x-0 2xl:gap-y-0 md:gap-y-20 sm:gap-y-5">
        <div className="3xl:pr-48 2xl:pr-28 md:p-9 grid 2xl:grid-rows-3 md:grid-rows-3-max-content 3xl:gap-y-6 2xl:gap-y-2 md:gap-y-6 sm:gap-y-6 items-center 2xl:justify-items-start md:justify-items-center">
          <p className="font-medium 2xl:text-3xl md:text-xl sm:text-lg text-text-blue tracking-wider uppercase 2xl:text-start sm:text-center">
            so, you want to travel to
          </p>
          <h1 className="3xl:mb-0 2xl:mb-4 md:mb-2 font-semibold 2xl:text-8xl md:text-9xl sm:text-6xl text-text-very-white tracking-widest uppercase 2xl:text-start sm:text-center">
            space
          </h1>
          <p className="font-normal 2xl:text-xl md:text-lg sm:text-base text-text-blue 2xl:text-start sm:text-center">
            Let&apos;s face it; if you want to go to space, you might as well
            genuiely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&apos;ll give you a truly out of
            this world experience!
          </p>
        </div>

        <div className="justify-self-center 2xl:mb-0 md:mb-8">
          <div className="bg-text-very-white md:h-52 md:w-52 sm:h-40 sm:w-40 rounded-full grid justify-center content-center">
            <Link
              href={'#'}
              className="font-normal md:text-4xl sm:text-2xl text-primary uppercase"
            >
              explore
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
