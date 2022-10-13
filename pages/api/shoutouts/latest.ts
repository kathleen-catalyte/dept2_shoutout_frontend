// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';

export default withApiAuthRequired(async function latestShoutouts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let latest;
  if (process.env.API_HOST) {
    const { accessToken } = await getAccessToken(req, res, {});
    const url = `${process.env.API_HOST}/shoutouts/latest`;

    const response = await fetch(url, {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });

    latest = await response.json();
  } else {
    // use mock data if no api_host provided
    console.warn('!!!!! No API_HOST configured using mock data !!!!!');
    const url = `${process.env.DEV_API_URL}/latest`;
    const response = await fetch(url);

    latest = await response.json();
  }

  res.status(200).json(latest);
});
