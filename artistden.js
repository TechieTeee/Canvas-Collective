import Image from 'next/image';
import Link from 'next/link';

export default function ArtistDen() {
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
        {/* Add your content for the ArtistDen page here */}

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
