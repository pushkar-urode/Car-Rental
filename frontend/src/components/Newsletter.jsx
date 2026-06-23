/*import React from "react";
const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 max-md:px-4 my-10 mb-40">
      <h1 className="md:text-4x1 text-2x1 font-semibold">Never Miss a Deal!</h1>
      <p className="md:text-lg text-gray-500/70 pb-8">
        Subscribe to get the latest offers, new arrivals, and exclusive
        discounts
      </p>
      <form className="flex items-center justify-between max-w-2x1 w-167 md:h-13 h-12">
        <input
          className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
          type="text"
          placeholder="Enter your email id"
          required
        />
        <button
          type="submit" className="md:px-12 px-8 h-full text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer rounded-md rounded-1-none"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};
export default Newsletter;
*/
import React from "react";

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 px-4 my-10 mb-20 md:mb-40">
      <h1 className="text-2xl md:text-4xl font-semibold">
        Never Miss a Deal!
      </h1>

      <p className="text-sm md:text-lg text-gray-500/70 pb-6 md:pb-8 max-w-2xl">
        Subscribe to get the latest offers, new arrivals, and exclusive
        discounts
      </p>

      <form className="flex w-full max-w-2xl h-12 md:h-13">
        <input
          className="w-full h-full px-3 border border-gray-300 border-r-0 rounded-l-md outline-none text-gray-500"
          type="email"
          placeholder="Enter your email id"
          required
        />

        <button
          type="submit"
          className="px-5 md:px-12 h-full text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer rounded-r-md whitespace-nowrap"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;