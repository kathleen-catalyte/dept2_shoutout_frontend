import { faker } from '@faker-js/faker';
import { Shoutout } from 'ts/interfaces';

/* generates 150 random shoutouts to manually test API profile search requests */
const generateShoutouts = () => {
  let shoutouts: Shoutout[] = [];

  for (let i = 1; i < 151; i++) {
    shoutouts.push({
      id: i.toString(),
      text: faker.random.words(16),
      createDate: faker.date.soon().toDateString(),
      authorId: faker.random.numeric().toString(),
      recipients: [
        {
          employeeId: i.toString(),
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
        employeeId: (2000 + i).toString(),
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

  shoutouts.push({
    id: '152',
    text: faker.random.words(16),
    createDate: faker.date.soon().toDateString(),
    authorId: '5001',
    recipients: [
      {
        employeeId: faker.random.numeric().toString(),
        email: 'recipient@email.com',
        name: 'Recipient to demonstrate recipients are fetched',
      },
    ],
    elements: [
      {
        id: 1,
        text: 'Shoutouts to',
        type: 'text',
      },
      {
        id: 2,
        text: faker.name.fullName(),
        type: 'user',
      },
    ],
    channel: {
      id: faker.lorem.sentence(),
      slackId: faker.datatype.uuid(),
      name: faker.name.firstName(),
    },
    author: {
      employeeId: '5001',
      email: faker.internet.email(),
    },
  });

  shoutouts.push({
    id: '153',
    text: faker.random.words(16),
    createDate: faker.date.soon().toDateString(),
    authorId: faker.random.numeric().toString(),
    recipients: [
      {
        employeeId: faker.random.numeric().toString(),
        email: faker.internet.email(),
      },
    ],
    elements: [
      {
        id: 1,
        text: 'Shoutouts to',
        type: 'text',
      },
      {
        id: 2,
        text: faker.name.fullName(),
        type: 'user',
      },
    ],
    channel: {
      id: faker.lorem.sentence(),
      slackId: faker.datatype.uuid(),
      name: faker.name.firstName(),
    },
    author: {
      employeeId: faker.random.numeric().toString(),
      email: 'author@email.com',
      name: 'Author to demonstrate authors are fetched',
    },
  });

  return shoutouts;
};

export default generateShoutouts;
