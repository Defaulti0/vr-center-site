
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">VR Center</h1>
      <p className="text-2xl">The best VR Center in the world</p>
      <button><a href="/About">About</a></button>
      <button><a href="/Events">Events</a></button>
      <button><a href="/Games">Games</a></button>
      <button><a href="/Golf">Golf</a></button>
    </div>
  );
}
