'use client';

import './globals.css';

import { usePathname } from 'next/navigation';
import { Bellefair } from 'next/font/google';

import { GlobalNav } from '@/components';

const bellefair = Bellefair({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentPage = usePathname();

  return (
    <html lang="en">
      <body className={bellefair.className}>
        <main
          className={`grid grid-rows-max-content-1fr md:gap-y-0 sm:gap-y-4 min-h-screen 2xl:pl-36 md:pl-10 2xl:py-16 ${
            currentPage === '/'
              ? '2xl:bg-bg-desktop md:bg-bg-tablet sm:bg-bg-mobile bg-cover'
              : 'bg-text-blue'
          }`}
        >
          <GlobalNav></GlobalNav>
          {children}
        </main>
      </body>
    </html>
  );
}
