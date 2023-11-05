import Image from 'next/image';
import Link from 'next/link';

export default function ArtistDen() {
  // Artist information
  const artist = {
    name: 'Ashley Rivers',
    currentEarnings: 5000,
    expectedEarnings: 10000,
    healthBenefits: 'Opolis Healthcare plan: platinum plan active until Dec 31st',
    upcomingDeadlines: 'Deliver artwork for "Sunset Collection" by Nov 15',
  };

  return (
    <div className="bg-[#CFC8BE]">
      {/* Navigation bar */}
      <nav className="bg-[#FFDE59] p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl text-black font-bold">Canvas Collective</h1>
          <ul className="flex space-x-4 items-center text-black">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Check Out the Artists</li>
            <li className="cursor-pointer">Collectors' Corner</li>
            <Link href="/artistden">
              <a>Artists' Den</a> {/* Use Link to navigate to artistden.js */}
            </Link>
            <li className="cursor-pointer">
              <button className="bg-[#FF739D] hover:bg-[#E84F70] text-white font-bold py-2 px-4 rounded">
                Sign In / Sign Up
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main content of ArtistDen page */}
      <main className="relative flex min-h-screen flex-col items-center justify-between p-24">
        {/* Artist profile */}
        <div className="text-center">
          <Image
            src="/jake-nackos-IF9TK5Uy-KI-unsplash.jpg"
            alt={artist.name}
            width={200}
            height={200}
            className="rounded-full"
          />
          <h1 className="text-3xl font-semibold text-black mt-4">{artist.name}</h1>
        </div>

        {/* Artist's earnings */}
        <div className="my-8 text-center">
          <h2 className="text-2xl font-semibold text-black">Earnings</h2>
          <p className="text-lg text-black">Current Earnings: ${artist.currentEarnings}</p>
          <p className="text-lg text-black">Expected Earnings: ${artist.expectedEarnings}</p>
        </div>

        {/* Health benefits */}
        <div className="my-8 text-center">
          <h2 className="text-2xl font-semibold text-black">Health Benefits</h2>
          <p className="text-lg text-black">{artist.healthBenefits}</p>
        </div>

        {/* Upcoming deadlines */}
        <div className="my-8 text-center">
          <h2 className="text-2xl font-semibold text-black">Upcoming Deadlines</h2>
          <p className="text-lg text-black">{artist.upcomingDeadlines}</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#FFDE59] text-center py-4">
        <p className="text-black">
          &copy; 2023 Canvas Collective. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
