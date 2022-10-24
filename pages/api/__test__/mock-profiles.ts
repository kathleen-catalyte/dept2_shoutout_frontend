import { faker } from '@faker-js/faker';
import { BasicProfile } from 'ts/interfaces';

  const mockProfiles = () => {
    let profiles: BasicProfile[] = [
    {
        "employeeId": "1",
        "email": "X_MAyra_Hudson@gmail.com",
        "team": "DPUS",
        "country": "US",
        "name": "n/a",
        "image72": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1.jpg",
        "image192": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/2.jpg",
        "image512": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/3.jpg"
    },
    {
        "employeeId": "2",
        "email": "Mary_Hudson@gmail.com",
        "team": "DPUS",
        "country": "US",
        "name": "n/a",
        "image72": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1.jpg",
        "image192": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/2.jpg",
        "image512": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/3.jpg"
    },
    {
        "employeeId": "3",
        "email": "Ben_Hudson@gmail.com",
        "team": "DPUS",
        "country": "US",
        "name": "Jes Streb",
        "image72": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1.jpg",
        "image192": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/2.jpg",
        "image512": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/3.jpg"
    },
    {
        "employeeId": "4",
        "email": "mARY_Hudson@gmail.com",
        "team": "DPUS",
        "country": "US",
        "name": "Streb Ajes",
        "image72": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1.jpg",
        "image192": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/2.jpg",
        "image512": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/3.jpg"
    }
];

    for (let i = 5; i < 151; i++) {
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

export default mockProfiles;
