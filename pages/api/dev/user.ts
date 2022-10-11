import { faker } from '@faker-js/faker';
import { NextApiRequest, NextApiResponse } from "next"


const handler = (req: NextApiRequest, res: NextApiResponse) => {
    res
        .status(200)
        .json({
            employeeId: "1",
            email: faker.internet.email(),
            team: "DPUS",
            country: "US",
            name: "Jesse Streb",
            image72: faker.image.avatar(),
            image192: faker.image.avatar(),
            image512: faker.image.avatar(),
            shoutoutsGiven: [
                {
                    id: 1,
                    text: "hi <@Beto> ",
                    createDate: faker.date.soon(),
                    authorId: "1",
                    recipients: [{
                        employeeId: "2",
                        email: faker.internet.email(),
                        team: "DPUS",
                        country: "US",
                        name: "Beto",
                        image72: faker.image.avatar(),
                        image192: faker.image.avatar(),
                        image512: faker.image.avatar()
                    }],
                    elements:
                        [{
                            id: 1,
                            text: "hi",
                            type: "text",
                            employeeId: null
                        }, {
                            id: 2,
                            text: "Beto",
                            type: "user",
                            employeeId: "2"
                        }]
                    ,
                    channel: {
                        id: faker.lorem.sentence(),
                        slackId: faker.datatype.uuid(),
                        name: faker.name.firstName()
                    },
                    author: {
                        employeeId: 1,
                        email: faker.internet.email(),
                        team: "DPUS",
                        country: "US",
                        name: "Shouty",
                        image72: faker.image.avatar(),
                        image192: faker.image.avatar(),
                        image512: faker.image.avatar()
                    }
                },
                {
                    id: 2,
                    text: "hi <@Beto> ",
                    createDate: faker.date.soon(),
                    authorId: "1",
                    recipients: [{
                        employeeId: "2",
                        email: faker.internet.email(),
                        team: "DPUS",
                        country: "US",
                        name: "Beto",
                        image72: faker.image.avatar(),
                        image192: faker.image.avatar(),
                        image512: faker.image.avatar()
                    }],
                    elements:
                        [{
                            id: 1,
                            text: "hi",
                            type: "text",
                            employeeId: null
                        }, {
                            id: 2,
                            text: "Beto",
                            type: "user",
                            employeeId: "2"
                        }]
                    ,
                    channel: {
                        id: faker.lorem.sentence(),
                        slackId: faker.datatype.uuid(),
                        name: faker.name.firstName()
                    },
                    author: {
                        employeeId: 1,
                        email: faker.internet.email(),
                        team: "DPUS",
                        country: "US",
                        name: "Shouty",
                        image72: faker.image.avatar(),
                        image192: faker.image.avatar(),
                        image512: faker.image.avatar()
                    }
                },
                {
                    id: 1,
                    text: "hi <@Beto> ",
                    createDate: faker.date.soon(),
                    authorId: "1",
                    recipients: [{
                        employeeId: "2",
                        email: faker.internet.email(),
                        team: "DPUS",
                        country: "US",
                        name: "Beto",
                        image72: faker.image.avatar(),
                        image192: faker.image.avatar(),
                        image512: faker.image.avatar()
                    }],
                    elements:
                        [{
                            id: 1,
                            text: "hi",
                            type: "text",
                            employeeId: null
                        }, {
                            id: 2,
                            text: "Beto",
                            type: "user",
                            employeeId: "2"
                        }]
                    ,
                    channel: {
                        id: faker.lorem.sentence(),
                        slackId: faker.datatype.uuid(),
                        name: faker.name.firstName()
                    },
                    author: {
                        employeeId: 1,
                        email: faker.internet.email(),
                        team: "DPUS",
                        country: "US",
                        name: "Shouty",
                        image72: faker.image.avatar(),
                        image192: faker.image.avatar(),
                        image512: faker.image.avatar()
                    }
                },
                {
                    id: 1,
                    text: "hi <@Beto> ",
                    createDate: faker.date.soon(),
                    authorId: "1",
                    recipients: [{
                        employeeId: "2",
                        email: faker.internet.email(),
                        team: "DPUS",
                        country: "US",
                        name: "Beto",
                        image72: faker.image.avatar(),
                        image192: faker.image.avatar(),
                        image512: faker.image.avatar()
                    }],
                    elements:
                        [{
                            id: 1,
                            text: "hi",
                            type: "text",
                            employeeId: null
                        }, {
                            id: 2,
                            text: "Beto",
                            type: "user",
                            employeeId: "2"
                        }]
                    ,
                    channel: {
                        id: faker.lorem.sentence(),
                        slackId: faker.datatype.uuid(),
                        name: faker.name.firstName()
                    },
                    author: {
                        employeeId: 1,
                        email: faker.internet.email(),
                        team: "DPUS",
                        country: "US",
                        name: "Shouty",
                        image72: faker.image.avatar(),
                        image192: faker.image.avatar(),
                        image512: faker.image.avatar()
                    }
                },
                {
                    id: 1,
                    text: "hi <@Beto> ",
                    createDate: faker.date.soon(),
                    authorId: "1",
                    recipients: [{
                        employeeId: "2",
                        email: faker.internet.email(),
                        team: "DPUS",
                        country: "US",
                        name: "Beto",
                        image72: faker.image.avatar(),
                        image192: faker.image.avatar(),
                        image512: faker.image.avatar()
                    }],
                    elements:
                        [{
                            id: 1,
                            text: "hi",
                            type: "text",
                            employeeId: null
                        }, {
                            id: 2,
                            text: "Beto",
                            type: "user",
                            employeeId: "2"
                        }]
                    ,
                    channel: {
                        id: faker.lorem.sentence(),
                        slackId: faker.datatype.uuid(),
                        name: faker.name.firstName()
                    },
                    author: {
                        employeeId: 1,
                        email: faker.internet.email(),
                        team: "DPUS",
                        country: "US",
                        name: "Shouty",
                        image72: faker.image.avatar(),
                        image192: faker.image.avatar(),
                        image512: faker.image.avatar()
                    }
                },
                {
                    id: 1,
                    text: "hi <@Beto> ",
                    createDate: faker.date.soon(),
                    authorId: "1",
                    recipients: [{
                        employeeId: "2",
                        email: faker.internet.email(),
                        team: "DPUS",
                        country: "US",
                        name: "Beto",
                        image72: faker.image.avatar(),
                        image192: faker.image.avatar(),
                        image512: faker.image.avatar()
                    }],
                    elements:
                        [{
                            id: 1,
                            text: "hi",
                            type: "text",
                            employeeId: null
                        }, {
                            id: 2,
                            text: "Beto",
                            type: "user",
                            employeeId: "2"
                        }]
                    ,
                    channel: {
                        id: faker.lorem.sentence(),
                        slackId: faker.datatype.uuid(),
                        name: faker.name.firstName()
                    },
                    author: {
                        employeeId: 1,
                        email: faker.internet.email(),
                        team: "DPUS",
                        country: "US",
                        name: "Shouty",
                        image72: faker.image.avatar(),
                        image192: faker.image.avatar(),
                        image512: faker.image.avatar()
                    }
                },

            ],
            shoutoutsReceived: [
                {
                    id: 1,
                    text: "hi <@Beto> ",
                    createDate: faker.date.soon(),
                    authorId: "1",
                    recipients: [{
                        employeeId: "2",
                        email: faker.internet.email(),
                        team: "DPUS",
                        country: "US",
                        name: "Beto",
                        image72: faker.image.avatar(),
                        image192: faker.image.avatar(),
                        image512: faker.image.avatar()
                    }],
                    elements:
                        [{
                            id: 1,
                            text: "hi",
                            type: "text",
                            employeeId: null
                        }, {
                            id: 2,
                            text: "Beto",
                            type: "user",
                            employeeId: "2"
                        }]
                    ,
                    channel: {
                        id: faker.lorem.sentence(),
                        slackId: faker.datatype.uuid(),
                        name: faker.name.firstName()
                    },
                    author: {
                        employeeId: 1,
                        email: faker.internet.email(),
                        team: "DPUS",
                        country: "US",
                        name: "Shouty",
                        image72: faker.image.avatar(),
                        image192: faker.image.avatar(),
                        image512: faker.image.avatar()
                    }
                }
            ]
        })
}

export default handler