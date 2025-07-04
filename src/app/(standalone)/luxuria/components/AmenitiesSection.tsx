const amenities = [
  { id: "pool", icon: "🏊‍♀️", name: "Infinity Pool" },
  { id: "yoga", icon: "🧘‍♀️", name: "Yoga Studio" },
  { id: "tennis", icon: "🎾", name: "Tennis Court" },
  { id: "fitness", icon: "🏋️‍♂️", name: "Fitness Center" },
  { id: "wine", icon: "🍷", name: "Wine Cellar" },
  { id: "parking", icon: "🚗", name: "Valet Parking" },
  { id: "beach", icon: "🌊", name: "Private Beach" },
  { id: "transfer", icon: "✈️", name: "Airport Transfer" },
];

const AmenitiesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-nile-50 to-nile-100 dark:from-gray-800 dark:to-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Hotel Amenities
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need for the perfect stay
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {amenities.map((amenity) => (
            <div key={amenity.id} className="text-center">
              <div className="text-4xl mb-4">{amenity.icon}</div>
              <p className="font-semibold text-gray-900 dark:text-white">
                {amenity.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
