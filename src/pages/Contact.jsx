export default function Contact() {
  return (
    <div
      className="flex flex-col items-center align-middle justify-center min-h-screen bg-cover bg-center p-8"
    >
      <div className="bg-white shadow-md rounded-lg w-full max-w-lg p-6 bg-opacity-80 backdrop-blur-md">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">Contact Us</h1>
        <div className="text-gray-800 text-lg">
          <div className="mb-6">
            <h2 className="font-semibold text-xl mb-2">Address:</h2>
            <p>
              House No. 21B
              <br />
              Zende Galli
              <br />
              Tal - Pandharpur
              <br />
              Dist - Solapur
              <br />
              Pin - 413304
            </p>
          </div>
          <div className="mb-6">
            <h2 className="font-semibold text-xl mb-2">Phone:</h2>
            <p className="text-blue-500 underline">123-456-7890</p>

            <h2 className="font-semibold text-xl mt-2">Email:</h2>
            <p className="text-blue-500 underline">vashali.ghayal@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
