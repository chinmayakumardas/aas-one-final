export default function Contact() {
  return (
    <div className="w-full h-full">
      {/* Get in Touch Section */}
      <section className="flex items-center justify-center w-full h-screen bg-blue-500">
        <h1 className="text-6xl font-bold text-white">Get in Touch</h1>
      </section>

      {/* Contact Information Section */}
      <section className="flex items-center justify-center w-full h-screen bg-gray-100">
        <h2 className="text-5xl font-bold">Contact Information</h2>
        <p className="mt-4 text-lg">Email: info@example.com</p>
        <p className="mt-2 text-lg">Phone: +1 (123) 456-7890</p>
      </section>

      {/* Social Media Links Section */}
      <section className="flex items-center justify-center w-full h-screen bg-green-200">
        <h2 className="text-5xl font-bold">Follow Us</h2>
        <div className="mt-4 text-lg">
          <a href="https://facebook.com" className="mr-4">Facebook</a>
          <a href="https://twitter.com" className="mr-4">Twitter</a>
          <a href="https://linkedin.com">LinkedIn</a>
        </div>
      </section>
    </div>
  );
}
