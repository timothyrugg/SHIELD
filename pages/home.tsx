import JoinForm from '../components/JoinForm';

export default function HomePage() {
  return (
    <div className="p-6 space-y-12">
      <section>
        <h2 className="text-2xl font-bold">The Mission</h2>
        <p>The Shield and Ladder Foundation is a nonprofit empowering police and fire athletes through endurance sports.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Join the Club</h2>
        <p>Are you an active or retired police officer or firefighter? Let’s ride, run, and race together.</p>
        <JoinForm />
      </section>

      <section>
        <h2 className="text-2xl font-bold">Back the Badge</h2>
        <p>Your support provides gear, race entries, and outreach for first responder athletes.</p>
        <div className="flex space-x-4 mt-4">
          <a href="mailto:info@shieldandladder.org" className="px-4 py-2 bg-blue-600 text-white rounded">Become a Sponsor</a>
          <a href="#" className="px-4 py-2 bg-green-600 text-white rounded">Donate</a>
        </div>
      </section>
    </div>
  );
}
