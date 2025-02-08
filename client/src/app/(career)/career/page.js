export default function Careers() {
  return (
    <div className="w-full h-full">
      {/* Job Openings Section */}
      <section className="flex items-center justify-center w-full h-screen bg-indigo-500">
        <h1 className="text-6xl font-bold text-white">Job Openings</h1>
      </section>

      {/* Company Culture & Values Section */}
      <section className="flex items-center justify-center w-full h-screen bg-green-100">
        <h2 className="text-5xl font-bold">Company Culture & Values</h2>
      </section>

      {/* Employee Benefits & Perks Section */}
      <section className="flex items-center justify-center w-full h-screen bg-orange-200">
        <h2 className="text-5xl font-bold">Employee Benefits & Perks</h2>
      </section>

      {/* Internship/Graduate Programs Section */}
      <section className="flex items-center justify-center w-full h-screen bg-purple-300">
        <h2 className="text-5xl font-bold">Internship/Graduate Programs</h2>
      </section>

      {/* Career Opportunities Section */}
      <section className="flex items-center justify-center w-full h-screen bg-blue-400">
        <h2 className="text-5xl font-bold">Career Opportunities</h2>
      </section>
    </div>
  );
}
