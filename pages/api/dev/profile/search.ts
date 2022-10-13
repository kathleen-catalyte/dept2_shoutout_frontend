import { faker } from '@faker-js/faker';
import { NextApiRequest, NextApiResponse } from 'next';
import { BasicProfile, Shoutout } from 'src/ts/interfaces/shoutout';

/**
 * @name handler
 * @param req request sent to
 * @param res
 * @description
 */
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // create an array of data based on Nat's

  const generateShoutouts = () => {
    let shoutouts = [];

    for (let i = 1; i < 150; i++) {
      shoutouts.push({
        id: faker.random.numeric().toString(),
        text: faker.random.words(16),
        createDate: faker.date.soon().toDateString(),
        authorId: faker.random.numeric().toString(),
        recipients: [
          {
            employeeId: faker.random.numeric().toString(),
            email: faker.internet.email(),
            team: 'DPUS',
            country: 'US',
            name: faker.name.fullName(),
            image72: faker.image.avatar(),
            image192: faker.image.avatar(),
            image512: faker.image.avatar(),
          },
        ],
        elements: [
          {
            id: 1,
            text: 'Shoutouts to',
            type: 'text',
            employeeId: null,
          },
          {
            id: 2,
            text: faker.name.fullName(),
            type: 'user',
            employeeId: faker.random.numeric().toString(),
          },
        ],
        channel: {
          id: faker.lorem.sentence(),
          slackId: faker.datatype.uuid(),
          name: faker.name.firstName(),
        },
        author: {
          employeeId: faker.random.numeric().toString(),
          email: faker.internet.email(),
          team: 'DPUS',
          country: 'US',
          name: faker.name.fullName(),
          image72: faker.image.avatar(),
          image192: faker.image.avatar(),
          image512: faker.image.avatar(),
        },
      });
    }

    return shoutouts;
  };

  const dataSet: Shoutout[] = generateShoutouts();

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
        recipient.name &&
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
      (shoutout.author.name &&
        shoutout.author.name.toLowerCase().includes(queriedName)) ||
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
