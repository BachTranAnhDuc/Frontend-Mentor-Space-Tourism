import 'server-only';
import { notFound } from 'next/navigation';
import { getBaseUrl } from '@/lib/getBaseUrl';
import type { Destination } from './destination';

const getDestination = async (slug: string) => {
  const res = await fetch(`${getBaseUrl()}/api/destination/?slug=${slug}`);

  const destination: Destination = await res.json();

  return destination;
};

export { getDestination };
