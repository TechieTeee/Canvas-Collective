import Image from 'next/image';

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
            <li className="cursor-pointer">Artists' Den</li>
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
            The landscape for artists is marked by hardship and financial uncertainty. A significant majority of artists struggle to earn a living from their craft. In the United States, a 2017 study by Artfinder revealed that 75% of artists earned $10,000 or less per year from their art, with close to half making no more than $5,000. Women artists are particularly affected, with 83.6% earning less than $10,000.

            Moreover, artists are more likely to experience financial instability than the general population. A 2016 study by Cornell University found that nearly a third of artists in New York state earned less than $20,000 annually, despite two-thirds holding bachelor's or graduate degrees. These financial struggles take a toll on their mental health, with a 2022 study by Record Union revealing that 73% of independent musicians experienced stress, anxiety, and depression related to their work.

            The need for solutions is further emphasized by the significant economic impact of arts and culture. In the United States, the nonprofit arts and culture industry generated $151.7 billion in economic activity in 2022, supporting 2.6 million jobs and contributing $29.1 billion in tax revenue for local and state governments.

            Canvas Collective aims to address these pressing challenges, providing artists with access to reliable income and a platform to showcase their work. In a world where creativity knows no bounds, our mission is to empower artists, ensuring their talents are not confined by financial constraints or geographic borders.
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

        {/* Explore the Artists */}
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
      </main>
    </div>
  );
}


