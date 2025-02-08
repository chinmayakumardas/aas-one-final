export default function Insights() {
  return (
    <div className="w-full h-full">
      {/* Market Trends Analysis Section */}
      <section className="flex items-center justify-center w-full h-screen bg-blue-500">
        <h1 className="text-6xl font-bold text-white">Market Trends Analysis</h1>
      </section>

      {/* Technical Research Reports Section */}
      <section className="flex items-center justify-center w-full h-screen bg-gray-100">
        <h2 className="text-5xl font-bold">Technical Research Reports</h2>
      </section>

      {/* Webinars & Online Workshops Section */}
      <section className="flex items-center justify-center w-full h-screen bg-green-200">
        <h2 className="text-5xl font-bold">Webinars & Online Workshops</h2>
      </section>
    </div>
  );
}
