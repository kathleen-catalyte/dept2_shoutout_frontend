export interface Shoutout {
    id: string;
    text: string;
    createDate: string;
    recipients: BasicProfile[];
    elements: Element[];
    channel: Channel;
    authorId: string;
    author: BasicProfile;
}

export interface BasicProfile {
    employeeId: string;
    email: string;
    team?: string;
    country?: string;
    name?: string;
    image72?: string;
    image192?: string;
    image512?: string;
}

export interface Element {
    id: number;
    text: string;
    type: string;
    employeeId?: string;
}

export interface Channel {
    id: string;
    slackId: string;
    name: string;
}