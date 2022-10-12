// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next'


export default withApiAuthRequired(async function profilesSearch(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let profiles;
  if (process.env.API_HOST) {
    const { accessToken } = await getAccessToken(req, res, {});
    // const searchQuery = (req.query.name as string).toString();
    const url = `${process.env.API_HOST}/profile/search`
    // const url = `${process.env.API_HOST}/profile/search?name=${searchQuery}&email=${searchQuery}`

    const response = await fetch(url, {
      headers: {
        authorization: `Bearer ${accessToken}`
      }
    });

    profiles = await response.json();
  } else {
    // use mock data if no api_host provided
    console.warn("!!!!! No API_HOST configured using mock data !!!!!")
    // const searchQuery = (req.query.name as string).toString();
    const url = `${process.env.DEV_API_URL}/profile/search`
    // const url = `${process.env.DEV_API_URL}/search?name=${searchQuery}&email=${searchQuery}`
    const response = await fetch(url);

    profiles = await response.json();
    console.log(profiles);
  }

  res.status(200).json(profiles);
});