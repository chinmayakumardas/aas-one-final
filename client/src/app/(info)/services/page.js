export default function Services() {
  return (
    <div className="w-full h-full">

      {/* IT Consulting Section */}
      <section className="flex items-center justify-center w-full h-screen bg-orange-100">
        <h2 className="text-5xl font-bold">IT Consulting</h2>
      </section>
      {/* Software Development Section */}
      <section className="flex items-center justify-center w-full h-screen bg-teal-500">
        <h1 className="text-6xl font-bold text-white">Software Development</h1>
      </section>

      {/* Data Analytics Section */}
      <section className="flex items-center justify-center w-full h-screen bg-indigo-200">
        <h2 className="text-5xl font-bold">Data Analytics</h2>
      </section>

      {/* Managed IT Services Section */}
      <section className="flex items-center justify-center w-full h-screen bg-red-300">
        <h2 className="text-5xl font-bold">Managed IT Services</h2>
      </section>
    </div>
  );
}
