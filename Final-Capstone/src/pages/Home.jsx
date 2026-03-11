function Home({ title, subtitle, description }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-black shadow-lg rounded-2xl p-8 max-w-md text-center">

        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          {title}
        </h1>

        <h2 className="text-xl text-gray-500 mb-4">
          {subtitle}
        </h2>

        <p className="text-gray-600">
          {description}
        </p>

      </div>

    </div>
  );
}

export default Home;
