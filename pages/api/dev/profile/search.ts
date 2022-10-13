import { NextApiRequest, NextApiResponse } from 'next';
import { BasicProfile, Shoutout } from 'ts/interfaces';

import generateShoutouts from './search-dummy-data';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const dataSet: Shoutout[] = generateShoutouts();
  const queriedName: string = (req.query.name as string).toLowerCase();
  const queriedEmail: string = (req.query.email as string).toLowerCase();
  let matchingProfilesInDb: BasicProfile[] = [];

  dataSet.forEach((shoutout) => {
    const recipientsDataSet = shoutout.recipients;

    recipientsDataSet.forEach((recipient) => {
      if (
        recipient.name &&
        (recipient.name.toLowerCase().includes(queriedName) ||
          recipient.email.includes(queriedEmail)) &&
        !matchingProfilesInDb.some((profile) => profile.name === recipient.name)
      ) {
        matchingProfilesInDb.push(recipient);
        if (matchingProfilesInDb.length >= 101) {
          return res.status(200).json(matchingProfilesInDb);
        }
      }
    });

    if (
      (shoutout.author.name &&
        shoutout.author.name.toLowerCase().includes(queriedName)) ||
      (shoutout.author.email.includes(queriedEmail) &&
        !matchingProfilesInDb.some(
          (profile) => profile.name === shoutout.author.name
        ))
    ) {
      matchingProfilesInDb.push(shoutout.author);
      if (matchingProfilesInDb.length >= 101) {
        return res.status(200).json(matchingProfilesInDb);
      }
    }
  });

  return res.status(200).json(matchingProfilesInDb);
};

export default handler;
