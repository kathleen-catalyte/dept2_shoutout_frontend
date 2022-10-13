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
  const dataSet: Shoutout[] = [
    {
      id: '1',
      text: 'hi <@Beto> ',
      createDate: faker.date.soon().toDateString(),
      authorId: '1',
      recipients: [
        {
          employeeId: '2',
          email: faker.internet.email(),
          team: 'DPUS',
          country: 'US',
          name: 'Beto',
          image72: faker.image.avatar(),
          image192: faker.image.avatar(),
          image512: faker.image.avatar(),
        },
      ],
      elements: [
        {
          id: 1,
          text: 'hi',
          type: 'text',
          employeeId: null,
        },
        {
          id: 2,
          text: 'Beto',
          type: 'user',
          employeeId: '2',
        },
      ],
      channel: {
        id: faker.lorem.sentence(),
        slackId: faker.datatype.uuid(),
        name: faker.name.firstName(),
      },
      author: {
        employeeId: '1',
        email: faker.internet.email(),
        team: 'DPUS',
        country: 'US',
        name: 'Shouty',
        image72: faker.image.avatar(),
        image192: faker.image.avatar(),
        image512: faker.image.avatar(),
      },
    },
  ];

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
