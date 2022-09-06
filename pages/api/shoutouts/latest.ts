// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next'

export default withApiAuthRequired(async function latestShoutouts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { accessToken } = await getAccessToken(req, res, {});
  const url = `${process.env.API_HOST}/shoutouts/latest`

  const response = await fetch(url, {
    headers: {
      authorization: `Bearer ${accessToken}`
    }
  });

  const latest = await response.json();
  res.status(200).json(latest);
});
