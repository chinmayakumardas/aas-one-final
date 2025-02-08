export default function AboutUs() {
  return (
    <div className="w-full h-full">
      {/* Mission & Vision Section */}
      <section className="flex items-center justify-center w-full h-screen bg-green-500">
        <h1 className="text-6xl font-bold text-white">Mission & Vision</h1>
      </section>

      {/* Awards and Recognition Section */}
      <section className="flex items-center justify-center w-full h-screen bg-yellow-100">
        <h2 className="text-5xl font-bold">Awards and Recognition</h2>
      </section>

      {/* Team Profiles Section */}
      <section className="flex items-center justify-center w-full h-screen bg-blue-200">
        <h2 className="text-5xl font-bold">Team Profiles</h2>
      </section>

      {/* Strategic Partnerships Section */}
      <section className="flex items-center justify-center w-full h-screen bg-purple-300">
        <h2 className="text-5xl font-bold">Strategic Partnerships</h2>
      </section>
    </div>
  );
}
