import { faker } from '@faker-js/faker';
import { NextApiRequest, NextApiResponse } from 'next';
import { BasicProfile } from 'ts/interfaces';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const queriedName: string = (req.query.name as string).toLowerCase();
  const queriedEmail: string = (req.query.email as string).toLowerCase();
  let matchingProfilesInDb: BasicProfile[] = [];

  const generateProfiles = () => {
    let profiles: BasicProfile[] = [];

    for (let i = 1; i < 151; i++) {
      profiles.push({
        employeeId: i.toString(),
        email: faker.internet.email(),
        team: 'DPUS',
        country: 'US',
        name: faker.name.fullName(),
        image72: `https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${i}.jpg`,
        image192: `https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${
          200 + i
        }.jpg`,
        image512: `https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${
          400 + i
        }.jpg`,
      });
    }

    return profiles;
  };

  const dataSet: BasicProfile[] = generateProfiles();

  dataSet.forEach((profile) => {
    if (
      profile.name &&
      (profile.name.toLowerCase().includes(queriedName) ||
        profile.email.includes(queriedEmail))
    ) {
      matchingProfilesInDb.push(profile);
      if (matchingProfilesInDb.length >= 100) {
        return res.status(200).json(matchingProfilesInDb);
      }
    }
  });

  return res.status(200).json(matchingProfilesInDb);
};

export default handler;
