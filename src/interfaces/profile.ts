import { Shoutout } from "./shoutout";

export interface FullProfile {
    employeeId: string,
    email: string,
    team?: string,
    country?: string,
    name?: string,
    image72?: string,
    image192?: string,
    image512?: string,
    shoutoutsGiven: Shoutout[],
    shoutoutsReceived: Shoutout[],
    statusCode?: number
}