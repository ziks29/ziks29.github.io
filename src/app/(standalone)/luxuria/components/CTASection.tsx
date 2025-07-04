const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-nile-600 to-nile-800">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready for Your Dream Getaway?
        </h2>
        <p className="text-xl text-nile-100 mb-8">
          Book now and experience the pinnacle of luxury hospitality.
          Limited-time offers available.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-nile-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
            Book Your Stay Now
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-nile-800 transition-all">
            View Special Offers
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
