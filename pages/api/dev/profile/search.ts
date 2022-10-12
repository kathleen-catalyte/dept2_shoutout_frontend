import { faker } from '@faker-js/faker';
import { NextApiRequest, NextApiResponse } from 'next';
import { BasicProfile } from 'src/ts/interfaces/shoutout';

import shoutouts from '../data-set';

/**
 * @name handler
 * @param req
 * @param res
 * @description
 */
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // create an array of data based on Nat's
  const dataSet = shoutouts;
  // grab the query from the url
  const queriedName: string = (req.query.name as string).toLowerCase();
  const queriedEmail: string = (req.query.email as string).toLowerCase();
  // create response array to add matches to
  let responseArray: BasicProfile[] = [];
  // loop through the array to see if it has possible matches
  dataSet.forEach((shoutout) => {
    const recipientsDataSet = shoutout.recipients;

    recipientsDataSet.forEach((recipient) => {
      if (
        (recipient.name.toLowerCase().includes(queriedName) ||
          recipient.email.includes(queriedEmail)) &&
        !responseArray.some((profile) => profile.name === recipient.name)
      ) {
        // push matching recipient to the responseArray
        responseArray.push(recipient);
        if (responseArray.length >= 101) {
          return res.status(200).json(responseArray);
        }
      }
    });

    if (
      shoutout.author.name.toLowerCase().includes(queriedName) ||
      (shoutout.author.email.includes(queriedEmail) &&
        !responseArray.some((profile) => profile.name === shoutout.author.name))
    ) {
      responseArray.push(shoutout.author);
      if (responseArray.length >= 101) {
        return res.status(200).json(responseArray);
      }
    }
  });

  return res.status(200).json(responseArray);
};

export default handler;