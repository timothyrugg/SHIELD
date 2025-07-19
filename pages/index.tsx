import Head from 'next/head';

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black text-white">
      <Head>
        <title>Shield and Ladder</title>
      </Head>
      <h1 className="text-4xl font-bold">United by Service. Driven by Endurance.</h1>
      <a href="/home" className="mt-6 px-6 py-3 bg-white text-black rounded-xl">Enter</a>
    </div>
  );
}
