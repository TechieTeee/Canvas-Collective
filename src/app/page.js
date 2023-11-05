import Image from 'next/image';
import Link from 'next/link'; // Import the Link component

export default function Home() {
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
            <li className="cursor-pointer">
              <Link href="https://nextjs.org/">
                <a>Artists' Den</a> {/* Use Link to navigate to artistden.js */}
              </Link>
            </li>
            <li className="cursor-pointer">
              <button className="bg-[#FF739D] hover:bg-[#E84F70] text-white font-bold py-2 px-4 rounded">
                Sign In / Sign Up
              </button>
            </li>
          </ul>
        </div>
      </nav>
      
      {/* Main content */}
      <main className="relative flex min-h-screen flex-col items-center justify-between p-24">
        {/* Hero section with image */}
        <div className="hero text-center">
          <Image
            src="/pexels-los-muertos-crew-7205806.jpg"
            alt="Hero Image"
            width={1200}
            height={800}
          />
          <div className="h-16" /> {/* Spacer with 16px height */}
          <h1 className="text-6xl font-bold text-black mb-4">Canvas Collective</h1>
          <p className="text-2xl text-black mb-8">
            Where art, community, and financial security converge
          </p>
        </div>

        {/* Problem Statement */}
        <div className="problem-section my-16 text-center">
          <h2 className="text-3xl font-semibold text-black mb-4">The Problem</h2>
          <p className="text-2xl text-black">
            The world of artists is characterized by financial hardship and uncertainty that transcends borders. A vast majority of artists worldwide grapple with the challenge of making a living from their craft, irrespective of cultural and language differences. This global issue calls for an all-encompassing solution that empowers artists and acknowledges their contributions, regardless of their location.

            The prevalence of financial insecurity among artists is a harsh reality, with many struggling to make ends meet. A 2017 Artfinder study revealed that 75% of artists worldwide earned less than $10,000 annually from their art, and nearly half earned no more than $5,000. Female artists, in particular, face acute financial instability, with 83.6% earning less than $10,000. This lack of stable income takes a significant toll on artists' mental health, as a 2022 Record Union study found that 73% of independent musicians experienced stress, anxiety, and depression related to their work. These challenges are a universal experience for artists worldwide.

            Despite their financial struggles, artists play a crucial role in enriching our lives and shaping our world. Their creative expressions serve as a source of inspiration, a medium for social commentary, and a bridge across cultures. They challenge our perspectives, expand our horizons, and connect us to our shared humanity.

            To address the pressing challenges faced by artists globally, urgent solutions are needed to provide financial security, encourage collaboration, and expand access to opportunities. Universal Basic Income (UBI) has emerged as a potential solution, offering artists a regular, unconditional payment that could alleviate financial stress and enable them to focus on their craft.
          </p>
          <p className="text-2xl text-black">
            In addition to UBI, initiatives that promote cross-border collaboration and provide artists with access to international markets can also play a significant role in addressing financial insecurity. Platforms like Canvas Collective can serve as hubs for artists to connect, share their work, and gain exposure to a global audience.

            Empowering artists is not just about addressing their financial needs; it is about recognizing and celebrating their immense contributions to society. Artists are the voices of our communities, the storytellers of our time, and the visionaries who shape our future. They deserve support, nurturing, and the opportunity to thrive in their chosen field.

            In a world where creativity knows no bounds, it is imperative to break down barriers and foster an environment where artists can flourish. By providing them with financial stability, access to opportunities, and a platform to showcase their work, we can unleash their creative potential and ensure that their talents shine brightly across the globe.
          </p>
        </div>

        {/* Empowering Artists Worldwide */}
        <div className="solution-section my-16 text-center">
          <h2 className="text-3xl font-semibold text-black mb-4">Empowering Artists Worldwide</h2>
          <p className="text-2xl text-black">
            The road to recognition and financial stability can be arduous for talented artists. Connecting with art enthusiasts and showcasing their work often presents significant challenges. However, Canvas Collective emerges as a groundbreaking platform, offering artists a dependable income source reminiscent of agricultural agreements, but thoughtfully tailored for the art community.

            Driven by strategic alliances and leveraging the cutting-edge technology of Near protocol and blockchain, Canvas Collective pioneers a pathway for artists to secure regular income. It defies geographical boundaries, ensuring that artists, whether based in the U.S. or elsewhere, stand on equal footing. They are united by the limitless potential for creative expression and the boundless opportunity for financial empowerment. At Canvas Collective, no artist's creativity should ever be confined by financial constraints or geographical borders.
          </p>
        </div>

        <div className="h-16" /> {/* Spacer with 16px height */}
        {/* Canvas Collective Community Pic */}
        <div className="text-center">
          <Image
            src="/pexels-matheus-bertelli-3856033.jpg"
            alt="Centered Image"
            width={880}
            height={660}
          />
        </div>

        {/* Explore Artists */}
        <div className="checkout-artists my-16 text-center">
          <h2 className="text-3xl font-semibold text-black mb-4">Check Out Our Artists</h2>
          <p className="text-2xl text-black mb-8">
            Explore a diverse collection of artworks from our talented artists.
            Find the perfect piece to adorn your space or support your favorite creators.
          </p>
          <button className="bg-[#FFDE59] hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded">
            Check Out Our Artists
          </button>
        </div>

        <div className="text-center">
          <Image
            src="/pexels-joshua-poyer-2854589.jpg"
            alt="Centered Image"
            width={600}
            height={450}
          />
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-[#FFDE59] text-center py-4">
        <p className="text-black text-sm">
          &copy; 2023 Canvas Collective. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
