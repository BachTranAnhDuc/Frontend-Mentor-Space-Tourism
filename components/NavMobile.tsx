import { FC } from 'react';
import Image from 'next/image';
import iconClose from '../assets/shared/icon-close.svg';

import { useAppDispatch, useAppSelector } from '@/redux/hook';

import { closeNav } from '@/redux/features/pageSlice';

import navLink from '../untils/navLink.json';
import Link from 'next/link';

interface Props {}

const NavMobile: FC<Props> = (props): JSX.Element => {
  const isOpenNav = useAppSelector((store) => store.pageReducer.isOpenNav);

  const dispatch = useAppDispatch();

  if (isOpenNav) {
    return (
      <div className="fixed top-0 right-0 bg-white-trans-4-percents px-6 py-10 md:hidden md:invisible sm:grid sm:visible h-full w-2/3 backdrop-blur-lg grid-rows-max-content-1fr gap-y-20">
        <Image
          src={iconClose}
          alt="close"
          className="justify-self-end"
          onClick={() => {
            dispatch(closeNav(false));
          }}
        ></Image>

        <div className="grid grid-rows-4-max-content gap-y-10">
          {navLink.map(({ id, num, name, href }) => {
            return (
              <Link key={id} href={href}>
                <div className="grid grid-cols-max-content-1fr gap-x-4">
                  <h1 className="font-bold text-xl text-text-very-white tracking-widest">
                    {num}
                  </h1>
                  <p className="font-thin text-base text-text-very-white tracking-widest uppercase">
                    {name}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default NavMobile;
