export default function JoinForm() {
  return (
    <form className="mt-4 space-y-4 max-w-md">
      <input className="w-full p-2 border rounded" placeholder="Name" required />
      <input className="w-full p-2 border rounded" placeholder="Email" required type="email" />
      <input className="w-full p-2 border rounded" placeholder="Department" required />
      <input className="w-full p-2 border rounded" placeholder="Discipline (Road, MTB, Gravel, Running, Tri, etc.)" />
      <textarea className="w-full p-2 border rounded" placeholder="Message" />
      <button type="submit" className="w-full p-2 bg-blue-700 text-white rounded">Submit</button>
    </form>
  );
}
