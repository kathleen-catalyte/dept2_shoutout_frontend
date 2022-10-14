import { faker } from '@faker-js/faker';
import { NextApiRequest, NextApiResponse } from 'next';
import { FullProfile } from 'src/interfaces/profile';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const { id }: any = (req.query);
    let matchingProfilesInDb: FullProfile[] = [];
    let profiles: FullProfile[] = [];
    const generateProfiles = () => {

        profiles.push({
            employeeId: "12",
            email: faker.internet.email(),
            team: "DPUS",
            country: "US",
            name: "Beto",
            image72: faker.image.avatar(),
            image192: faker.image.avatar(),
            image512: faker.image.avatar(),
            shoutoutsGiven: [
                {
                    id: "1",
                    text: "hi <@Jesse Streb> ",
                    createDate: faker.date.soon().toISOString(),
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
                        }, {
                            id: 2,
                            text: "Jesse Streb",
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
                        employeeId: "1",
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
                    id: "1",
                    text: "hi <@Beto> ",
                    createDate: faker.date.soon().toISOString(),
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
                        employeeId: '1',
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

        for (let i = 1; i < 151; i++) {
            profiles.push({
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
                        id: "1",
                        text: "hi <@Beto> ",
                        createDate: faker.date.soon().toISOString(),
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
                            employeeId: "1",
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
                        id: "1",
                        text: "hi <@Beto> ",
                        createDate: faker.date.soon().toISOString(),
                        authorId: "1",
                        recipients: [{
                            employeeId: "2",
                            email: faker.internet.email(),
                            team: "DPUS",
                            country: "US",
                            name: "Jesse Streb",
                            image72: faker.image.avatar(),
                            image192: faker.image.avatar(),
                            image512: faker.image.avatar()
                        }],
                        elements:
                            [{
                                id: 1,
                                text: "hi",
                                type: "text",
                            }, {
                                id: 2,
                                text: "Jesse Streb",
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
                            employeeId: '1',
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
            });
        }

        return profiles;
    };
    generateProfiles();

    const result = profiles.filter(profile => profile.employeeId === id)
    if (result.length == 1) {
        return (
            res.status(200).json(result[0]))
    }

    else {
        return res.status(200).json({
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
                    id: "1",
                    text: "hi <@Beto> ",
                    createDate: faker.date.soon().toISOString(),
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
                        employeeId: "1",
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
                    id: "1",
                    text: "hi <@Jesse Streb> ",
                    createDate: faker.date.soon().toISOString(),
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
                        }, {
                            id: 2,
                            text: "Jesse Streb",
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
                        employeeId: '1',
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
};

export default handler;