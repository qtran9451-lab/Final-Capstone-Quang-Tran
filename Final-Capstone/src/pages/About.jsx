function About({ game, description, mission }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 p-8">
      <div className="bg-white shadow-lg rounded-xl p-6 max-w-lg text-center">

        <h1 className="text-3xl font-bold mb-3">About Us</h1>

        <h2 className="text-xl font-semibold text-green-700 mb-2">
          {game}
        </h2>

        <p className="text-gray-700 mb-3">
          {description}
        </p>

        <p className="text-gray-600 italic">
          {mission}
        </p>

      </div>
    </div>
  );
}