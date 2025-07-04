const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      ></div>
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Experience{" "}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Luxury
          </span>{" "}
          Redefined
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Where exceptional service meets unparalleled comfort in the heart of
          paradise
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-nile-600 to-nile-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-nile-700 hover:to-nile-800 transition-all transform hover:scale-105">
            Book Your Stay
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all">
            Virtual Tour
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
