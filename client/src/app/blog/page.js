export default function Blog() {
  return (
    <div className="w-full h-full">
      {/* Latest Blog Posts Section */}
      <section className="flex items-center justify-center w-full h-screen bg-blue-500">
        <h1 className="text-6xl font-bold text-white">Latest Blog Posts</h1>
      </section>

      {/* Categories Section */}
      <section className="flex items-center justify-center w-full h-screen bg-gray-100">
        <h2 className="text-5xl font-bold">Categories</h2>
      </section>

      {/* Authors Section */}
      <section className="flex items-center justify-center w-full h-screen bg-green-200">
        <h2 className="text-5xl font-bold">Authors</h2>
      </section>
    </div>
  );
}
