import { faker } from '@faker-js/faker';
import { NextApiResponse } from 'next';

const handler = (req: NextApiResponse, res: NextApiResponse) => {
  res.status(200).json([
    {
      id: 1,
      text: 'hi. <@Beto> ' + faker.lorem.sentence(),
      createDate: faker.date.soon(),
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
          text: 'hi.',
          type: 'text',
          employeeId: null,
        },
        {
          id: 2,
<<<<<<< HEAD
          text: "Beto",
          type: "user",
          employeeId: "12",
=======
          text: 'Beto',
          type: 'user',
          employeeId: '2',
>>>>>>> ca2d3e76551b2bd8ab6213fcdda476535210bf09
        },
        { id: 3, text: faker.lorem.paragraph(), type: 'text' },
      ],
      channel: {
        id: faker.lorem.sentence(),
        slackId: faker.datatype.uuid(),
        name: faker.name.firstName(),
      },
      author: {
        employeeId: 1,
        email: faker.internet.email(),
<<<<<<< HEAD
        team: "DPUS",
        country: "US",
        name: "Jesse Streb",
=======
        team: 'DPUS',
        country: 'US',
        name: 'Chuck',
>>>>>>> ca2d3e76551b2bd8ab6213fcdda476535210bf09
        image72: faker.image.avatar(),
        image192: faker.image.avatar(),
        image512: faker.image.avatar(),
      },
    },
    {
      id: 3,
<<<<<<< HEAD
      text: "hi. <@Jesse Streb> ",
=======
      text: 'hi. <@Beto> ',
>>>>>>> ca2d3e76551b2bd8ab6213fcdda476535210bf09
      createDate: faker.date.soon(),
      authorId: '1',
      recipients: [
        {
          employeeId: '2',
          email: faker.internet.email(),
<<<<<<< HEAD
          team: "DPUS",
          country: "US",
          name: "Jessee Streb",
=======
          team: 'DPUS',
          country: 'US',
          name: 'Beto',
>>>>>>> ca2d3e76551b2bd8ab6213fcdda476535210bf09
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
<<<<<<< HEAD
          text: "Jesse Streb",
          type: "user",
          employeeId: "2",
=======
          text: 'Beto',
          type: 'user',
          employeeId: '2',
>>>>>>> ca2d3e76551b2bd8ab6213fcdda476535210bf09
        },
      ],
      channel: {
        id: faker.lorem.sentence(),
        slackId: faker.datatype.uuid(),
        name: faker.name.firstName(),
      },
      author: {
        employeeId: 1,
        email: faker.internet.email(),
<<<<<<< HEAD
        team: "DPUS",
        country: "US",
        name: "Beto",
=======
        team: 'DPUS',
        country: 'US',
        name: 'Annabelle',
>>>>>>> ca2d3e76551b2bd8ab6213fcdda476535210bf09
        image72: faker.image.avatar(),
        image192: faker.image.avatar(),
        image512: faker.image.avatar(),
      },
    },
    {
      id: 1,
      text: 'hi. <@Beto> ',
      createDate: faker.date.soon(),
      authorId: '1',
      recipients: [
        {
          employeeId: '2',
          email: faker.internet.email(),
<<<<<<< HEAD
          team: "DPUS",
          country: "US",
          name: "Jesse Streb",
=======
          team: 'DPUS',
          country: 'US',
          name: 'Beto',
>>>>>>> ca2d3e76551b2bd8ab6213fcdda476535210bf09
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
<<<<<<< HEAD
          text: "Jessee Streb",
          type: "user",
          employeeId: "2",
=======
          text: 'Beto',
          type: 'user',
          employeeId: '2',
>>>>>>> ca2d3e76551b2bd8ab6213fcdda476535210bf09
        },
      ],
      channel: {
        id: faker.lorem.sentence(),
        slackId: faker.datatype.uuid(),
        name: faker.name.firstName(),
      },
      author: {
        employeeId: 12,
        email: faker.internet.email(),
<<<<<<< HEAD
        team: "DPUS",
        country: "US",
        name: "Beto",
=======
        team: 'DPUS',
        country: 'US',
        name: 'Shouty',
>>>>>>> ca2d3e76551b2bd8ab6213fcdda476535210bf09
        image72: faker.image.avatar(),
        image192: faker.image.avatar(),
        image512: faker.image.avatar(),
      },
<<<<<<< HEAD
    }, {
=======
    },
    {
>>>>>>> ca2d3e76551b2bd8ab6213fcdda476535210bf09
      id: 1,
      text: 'hi. <@Beto> ' + faker.lorem.sentence(),
      createDate: faker.date.soon(),
      authorId: '1',
      recipients: [
        {
<<<<<<< HEAD
          employeeId: 12,
=======
          employeeId: '2',
>>>>>>> ca2d3e76551b2bd8ab6213fcdda476535210bf09
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
          text: 'hi.',
          type: 'text',
          employeeId: null,
        },
        {
          id: 2,
<<<<<<< HEAD
          text: "Jesse Streb",
          type: "user",
          employeeId: "2",
=======
          text: 'Beto',
          type: 'user',
          employeeId: '2',
>>>>>>> ca2d3e76551b2bd8ab6213fcdda476535210bf09
        },
        { id: 3, text: faker.lorem.paragraph(), type: 'text' },
      ],
      channel: {
        id: faker.lorem.sentence(),
        slackId: faker.datatype.uuid(),
        name: faker.name.firstName(),
      },
      author: {
        employeeId: 12,
        email: faker.internet.email(),
<<<<<<< HEAD
        team: "DPUS",
        country: "US",
        name: "Beto",
=======
        team: 'DPUS',
        country: 'US',
        name: 'Chuck',
>>>>>>> ca2d3e76551b2bd8ab6213fcdda476535210bf09
        image72: faker.image.avatar(),
        image192: faker.image.avatar(),
        image512: faker.image.avatar(),
      },
<<<<<<< HEAD
    }, {
=======
    },
    {
>>>>>>> ca2d3e76551b2bd8ab6213fcdda476535210bf09
      id: 1,
      text: 'hi. <@Beto> ' + faker.lorem.sentence(),
      createDate: faker.date.soon(),
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
          text: 'hi.',
          type: 'text',
          employeeId: null,
        },
        {
          id: 2,
<<<<<<< HEAD
          text: "Jesse Streb",
          type: "user",
          employeeId: "2",
=======
          text: 'Beto',
          type: 'user',
          employeeId: '2',
>>>>>>> ca2d3e76551b2bd8ab6213fcdda476535210bf09
        },
        { id: 3, text: faker.lorem.paragraph(), type: 'text' },
      ],
      channel: {
        id: faker.lorem.sentence(),
        slackId: faker.datatype.uuid(),
        name: faker.name.firstName(),
      },
      author: {
        employeeId: 12,
        email: faker.internet.email(),
<<<<<<< HEAD
        team: "DPUS",
        country: "US",
        name: "Beto",
=======
        team: 'DPUS',
        country: 'US',
        name: 'Chuck',
>>>>>>> ca2d3e76551b2bd8ab6213fcdda476535210bf09
        image72: faker.image.avatar(),
        image192: faker.image.avatar(),
        image512: faker.image.avatar(),
      },
    },
  ]);
};

export default handler;
