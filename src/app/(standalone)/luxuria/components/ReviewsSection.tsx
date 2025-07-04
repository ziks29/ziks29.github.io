const StarRating = () => {
  return (
    <div className="flex items-center mb-4">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

interface ReviewCardProps {
  review: string;
  author: string;
  location: string;
  initials: string;
  gradientClass: string;
}

const ReviewCard = ({
  review,
  author,
  location,
  initials,
  gradientClass,
}: ReviewCardProps) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
      <StarRating />
      <p className="text-gray-700 dark:text-gray-300 mb-6 italic">{review}</p>
      <div className="flex items-center">
        <div
          className={`w-12 h-12 bg-gradient-to-br ${gradientClass} rounded-full flex items-center justify-center text-white font-semibold`}
        >
          {initials}
        </div>
        <div className="ml-4">
          <p className="font-semibold text-gray-900 dark:text-white">
            {author}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{location}</p>
        </div>
      </div>
    </div>
  );
};

const reviews = [
  {
    id: "sarah-mitchell",
    review:
      "Absolutely stunning hotel! The service was impeccable, and the ocean view from our suite was breathtaking. We will definitely be back!",
    author: "Sarah Mitchell",
    location: "New York, USA",
    initials: "SM",
    gradientClass: "from-nile-400 to-nile-600",
  },
  {
    id: "james-davidson",
    review:
      "The spa treatments were divine, and the restaurant exceeded all expectations. This is luxury at its finest!",
    author: "James Davidson",
    location: "London, UK",
    initials: "JD",
    gradientClass: "from-orange-400 to-orange-600",
  },
  {
    id: "maria-chen",
    review:
      "Perfect honeymoon destination! Every detail was thoughtfully arranged. The staff made us feel like royalty.",
    author: "Maria Chen",
    location: "Sydney, Australia",
    initials: "MC",
    gradientClass: "from-green-400 to-green-600",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Guests Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Read testimonials from our valued guests
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review.review}
              author={review.author}
              location={review.location}
              initials={review.initials}
              gradientClass={review.gradientClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
