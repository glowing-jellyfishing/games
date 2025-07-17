import { NextResponse } from 'next/server';

export async function GET() {
  const games = [
    {
      title: 'Brookhaven 🏡RP',
      creator: 'Wolfpaq',
      thumbnail: 'https://tr.rbxcdn.com/1b1e1e1e1e1e1e1e1e1e1e1e1e1e1e1e/420/420/Image/Png',
    },
    {
      title: 'Blox Fruits',
      creator: 'Gamer Robot Inc',
      thumbnail: 'https://tr.rbxcdn.com/2b2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e/420/420/Image/Png',
    },
    {
      title: 'Adopt Me!',
      creator: 'DreamCraft',
      thumbnail: 'https://tr.rbxcdn.com/3b3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e/420/420/Image/Png',
    },
    {
      title: 'Pet Simulator X!',
      creator: 'BIG Games Simulators',
      thumbnail: 'https://tr.rbxcdn.com/4b4e4e4e4e4e4e4e4e4e4e4e4e4e4e4e/420/420/Image/Png',
    },
    {
      title: 'Murder Mystery 2',
      creator: 'Nikilis',
      thumbnail: 'https://tr.rbxcdn.com/5b5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e/420/420/Image/Png',
    },
  ];
  return NextResponse.json(games);
}
