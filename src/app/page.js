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
                    <p className="text-2xl text-black mb-8">Where art, community, and financial security converge</p>
                </div>

                {/* Empowering Artists Worldwide */}
                <div className="problem-section my-16 text-center">
                    <h2 className="text-3xl font-semibold text-black mb-4">The Problem</h2>
                    <p className="text-2xl text-black">
                        Many talented artists struggle to gain recognition and earn a living from their art.
                        Finding a platform to showcase their work and connect with art enthusiasts can be challenging.
                        Canvas Collective allows artists to have access to reliable income through a community service
                        agreement like for agriculture, but for art. Artists have access to regular pay through strategic
                        partnerships and powered by Near protocol and blockchain technology. Also, it's borderless,
                        so artists in the U.S. and abroad can be equally empowered.
                    </p>
                </div>

                {/* Empowering Artists Worldwide */}
                <div className="solution-section my-16 text-center">
                    <h2 className="text-3xl font-semibold text-black mb-4">Our Solution</h2>
                    <p className="text-2xl text-black">
                        The road to recognition and financial stability can be arduous for talented artists. Connecting with art enthusiasts and showcasing their work often presents significant challenges. However, Canvas Collective emerges as a groundbreaking platform, offering artists a dependable income source reminiscent of agricultural agreements, but thoughtfully tailored for the art community.

                        Driven by strategic alliances and leveraging the cutting-edge technology of Near protocol and blockchain, Canvas Collective pioneers a pathway for artists to secure regular income. It defies geographical boundaries, ensuring that artists, whether based in the U.S. or elsewhere, stand on equal footing. They are united by the limitless potential for creative expression and the boundless opportunity for financial empowerment. At Canvas Collective, no artist's creativity should ever be confined by financial constraints or geographical borders.
                    </p>
                </div>

                {/* Check Out Artists section */}
                <div className="checkout-artists my-16 text-center">
                    <h2 className="text-3xl font-semibold text-black mb-4">Check Out Our Artists</h2>
                    <p className="text-2xl text-black mb-8">
                        Explore a diverse collection of artworks from our talented artists.
                        Find the perfect piece to adorn your space or support your favorite creators.
                    </p>
                    <button className="bg-[#FFDE59] hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded">
                        Explore the Artists
                    </button>
                </div>
            </main>
        </div>
    );
}


