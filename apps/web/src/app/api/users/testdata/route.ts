import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

export function GET() {
  // TODO: Loop and randomize data
  const fakeUsers = [
    {
      rank: 1,
      username: faker.internet.userName(),
      profilePictureUrl: faker.internet.avatar(),
      portfolioBalanceSnapshot: 1534532.45,
      followerCount: 100000,
    },
    {
      rank: 2,
      username: faker.internet.userName(),
      profilePictureUrl: faker.internet.avatar(),
      portfolioBalanceSnapshot: 1434540.93,
      followerCount: 100000,
    },
    {
      rank: 3,
      username: faker.internet.userName(),
      profilePictureUrl: faker.internet.avatar(),
      portfolioBalanceSnapshot: 904510.34,
      followerCount: 100000,
    },
    {
      rank: 4,
      username: faker.internet.userName(),
      profilePictureUrl: faker.internet.avatar(),
      portfolioBalanceSnapshot: 804510.34,
      followerCount: 100000,
    },
    {
      rank: 5,
      username: faker.internet.userName(),
      profilePictureUrl: faker.internet.avatar(),
      portfolioBalanceSnapshot: 704510.34,
      followerCount: 100000,
    },
  ];

  return NextResponse.json(fakeUsers);
}
