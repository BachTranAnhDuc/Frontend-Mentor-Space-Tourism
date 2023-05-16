import type { Destination } from './destination';

import destinationLink from '../../../untils/destinationLink.json';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const slug = searchParams.get('slug');

  const destination = destinationLink.find((el) => {
    return el.name === slug;
  });

  return new Response(
    JSON.stringify({
      destination,
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  );
}
