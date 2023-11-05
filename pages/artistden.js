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

  // Calculate the progress for current earnings and deadlines
  const currentEarningsProgress = (artist.currentEarnings / artist.expectedEarnings) * 100;
  // Assuming you want to show a progress bar for the upcoming deadline but it's not clear from the provided data, you can use a placeholder value.
  const upcomingDeadlineProgress = 50; // 50% progress as an example

  return (
    <div className="bg-[#CFC8BE]">
      {/* ... (Navigation bar) ... */}

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
          <progress max="100" value={currentEarningsProgress}></progress>
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
          <progress max="100" value={upcomingDeadlineProgress}></progress>
        </div>

        {/* Customer Testimonial */}
        <div className="my-8 text-center">
          <h2 className="text-2xl font-semibold text-black">Customer Testimonial</h2>
          <div className="bg-white p-4 rounded-md shadow-lg">
            <p className="text-lg text-gray-600">
              "I recently purchased artwork from Ashley Rivers on Canvas Collective, and it has truly transformed my living space. Her art exudes a unique blend of creativity and emotion. I'm grateful to have found her work on this platform, and I can't wait to see what she creates next!"
            </p>
            <p className="text-md text-gray-400 mt-4">- Sarah, a satisfied Canvas Collective customer</p>
          </div>
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
