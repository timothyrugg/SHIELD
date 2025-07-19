import Head from 'next/head';

export default function Landing() {
  return (
    <div className="relative h-screen bg-black text-white flex flex-col justify-center items-center text-center">
      <Head>
        <title>Shield and Ladder</title>
      </Head>
      <h1 className="text-4xl font-bold mb-4">United by Service. Driven by Endurance.</h1>
      <a href="/home" className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition">
        Enter
      </a>
    </div>
  );
}
