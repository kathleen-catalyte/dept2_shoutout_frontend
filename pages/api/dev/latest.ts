import { faker } from "@faker-js/faker";
import { NextApiResponse } from "next";

const handler = (req: NextApiResponse, res: NextApiResponse) => {
  res.status(200).json([
    {
      id: 1,
      text: "hi. <@Beto> " + faker.lorem.sentence(),
      createDate: faker.date.soon(),
      authorId: "1",
      recipients: [
        {
          employeeId: "2",
          email: faker.internet.email(),
          team: "DPUS",
          country: "US",
          name: "Beto",
          image72: faker.image.avatar(),
          image192: faker.image.avatar(),
          image512: faker.image.avatar(),
        },
      ],
      elements: [
        {
          id: 1,
          text: "hi.",
          type: "text",
          employeeId: null,
        },
        {
          id: 2,
          text: "Beto",
          type: "user",
          employeeId: "2",
        },
        { id: 3, text: faker.lorem.sentence(), type: "text" },
      ],
      channel: {
        id: faker.lorem.sentence(),
        slackId: faker.datatype.uuid(),
        name: faker.name.firstName(),
      },
      author: {
        employeeId: 1,
        email: faker.internet.email(),
        team: "DPUS",
        country: "US",
        name: "Chuck",
        image72: faker.image.avatar(),
        image192: faker.image.avatar(),
        image512: faker.image.avatar(),
      },
    },
    {
      id: 3,
      text: "hi. <@Beto> ",
      createDate: faker.date.soon(),
      authorId: "1",
      recipients: [
        {
          employeeId: "2",
          email: faker.internet.email(),
          team: "DPUS",
          country: "US",
          name: "Beto",
          image72: faker.image.avatar(),
          image192: faker.image.avatar(),
          image512: faker.image.avatar(),
        },
      ],
      elements: [
        {
          id: 1,
          text: "hi",
          type: "text",
          employeeId: null,
        },
        {
          id: 2,
          text: "Beto",
          type: "user",
          employeeId: "2",
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
        team: "DPUS",
        country: "US",
        name: "Annabelle",
        image72: faker.image.avatar(),
        image192: faker.image.avatar(),
        image512: faker.image.avatar(),
      },
    },
    {
      id: 1,
      text: "hi. <@Beto> ",
      createDate: faker.date.soon(),
      authorId: "1",
      recipients: [
        {
          employeeId: "2",
          email: faker.internet.email(),
          team: "DPUS",
          country: "US",
          name: "Beto",
          image72: faker.image.avatar(),
          image192: faker.image.avatar(),
          image512: faker.image.avatar(),
        },
      ],
      elements: [
        {
          id: 1,
          text: "hi",
          type: "text",
          employeeId: null,
        },
        {
          id: 2,
          text: "Beto",
          type: "user",
          employeeId: "2",
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
        team: "DPUS",
        country: "US",
        name: "Shouty",
        image72: faker.image.avatar(),
        image192: faker.image.avatar(),
        image512: faker.image.avatar(),
      },
    },
  ]);
};

export default handler;
