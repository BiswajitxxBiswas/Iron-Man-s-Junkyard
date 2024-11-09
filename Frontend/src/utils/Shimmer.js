const Shimmer = () => {
  const shimmerCards = new Array(15).fill(null); // Create an array with 15 elements

  return (
      <div className="shimmer-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
          {shimmerCards.map((_, index) => (
              <div
                  className="shimmer-card bg-gray-200 rounded-lg p-6 shadow-lg animate-pulse"
                  key={index}
              >
                  <div className="shimmer-image bg-gray-300 h-48 w-full rounded-md mb-6"></div>
                  <div className="shimmer-name bg-gray-300 h-6 w-3/4 rounded-md mb-4"></div>
                  <div className="shimmer-address bg-gray-300 h-5 w-1/2 rounded-md mb-4"></div>
                  <div className="shimmer-rating bg-gray-300 h-5 w-1/4 rounded-md mb-2"></div>
                  <div className="shimmer-rating bg-gray-300 h-5 w-1/4 rounded-md"></div>
              </div>
          ))}
      </div>
  );
}

export default Shimmer;