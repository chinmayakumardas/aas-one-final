export default function CaseStudies() {
  return (
    <div className="w-full h-full">
      {/* Featured Projects Section */}
      <section className="flex items-center justify-center w-full h-screen bg-teal-500">
        <h1 className="text-6xl font-bold text-white">Featured Projects</h1>
      </section>

      {/* Industry-Specific Case Studies Section */}
      <section className="flex items-center justify-center w-full h-screen bg-blue-100">
        <h2 className="text-5xl font-bold">Industry-Specific Case Studies</h2>
      </section>

      {/* Client Success Stories Section */}
      <section className="flex items-center justify-center w-full h-screen bg-gray-200">
        <h2 className="text-5xl font-bold">Client Success Stories</h2>
      </section>

      {/* Problem Statement Section */}
      <section className="flex items-center justify-center w-full h-screen bg-orange-300">
        <h2 className="text-5xl font-bold">Problem Statement</h2>
      </section>
    </div>
  );
}
