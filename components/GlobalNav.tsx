'use client';

import { FC, useState } from 'react';

import { usePathname } from 'next/navigation';

import { useAppDispatch, useAppSelector } from '@/redux/hook';

import Image from 'next/image';
import logo from '../assets/shared/logo.svg';
import Link from 'next/link';

import navLink from '../untils/navLink.json';

import iconHamburger from '../assets/shared/icon-hamburger.svg';

import { onClickLink, onClickNav } from '@/redux/features/pageSlice';

interface Props {}

const GlobalNav: FC<Props> = (props): JSX.Element => {
  const currentPath = usePathname();

  // const getLink = useAppSelector((store) => store.pageReducer.link);
  const isOpenNav = useAppSelector((store) => store.pageReducer.isOpenNav);
  const dispatch = useAppDispatch();

  return (
    <nav className="md:p-0 sm:p-6 grid 2xl:grid-cols-global-nav md:grid-cols-global-nav-tablet sm:grid-cols-max-content-1fr items-center 2xl:gap-x-12 md:gap-x-40">
      <Image
        src={logo}
        alt="logo"
        onClick={() => {
          dispatch(onClickLink('/'));
        }}
        className="cursor-pointer hover:scale-110"
      />

      <div className="md:hidden md:invisible self-center justify-self-end">
        <Image
          src={iconHamburger}
          alt="icon-hamburger"
          onClick={() => {
            dispatch(onClickNav(true));
          }}
        ></Image>
      </div>

      <div className="sm:hidden sm:invisible 2xl:visible 2xl:inline-block h-[1px] 3xl:w-112% 2xl:w-122 bg-white-trans-14-percents"></div>

      <div className="sm:hidden sm:invisible md:visible bg-white-trans-4-percents 3xl:px-20 2xl:px-20 md:px-10 2xl:py-0 md:grid 2xl:grid-cols-4 md:grid-cols-4-max-content justify-items-center 3xl:gap-x-8 md:gap-x-4 2xl:gap-y-2 md:justify-self-end">
        {navLink.map(({ id, num, name, href }) => {
          return (
            <Link
              key={id}
              href={href}
              className=""
              // onClick={() => {
              //   dispatch(onClickLink(href));
              // }}
            >
              <div className="relative 2xl:py-10 md:py-8 grid 2xl:grid-cols-mincontent-1fr items-center gap-x-2">
                <h1 className="2xl:inline-block md:hidden font-extrabold 2xl:text-2xl md:text-lg text-text-very-white tracking-widest">
                  {num}
                </h1>

                <p className="font-thin uppercase 2xl:text-xl md:text-base text-text-very-white tracking-widest">
                  {name}
                </p>

                {currentPath === href && (
                  <div className="absolute content-none bottom-0 left-0 h-1 w-full bg-text-very-white rounded"></div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default GlobalNav;
