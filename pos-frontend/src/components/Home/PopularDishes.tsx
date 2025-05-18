import { popularDishes } from "../../constants";

const PopularDishes = () => {
  return (
    <div className="mt-6 pr-6">
      <div className="bg-[#1a1a1a] w-full rounded-lg">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
            Popular Dishes
          </h1>
          <a
            href="#"
            className="text-[#f5f5f5] text-sm font-semibold bg-[#2e2e2e] hover:bg-[#202020] py-2 px-4 rounded-lg transition-colors duration-200"
          >
            View All
          </a>
        </div>

        <div className="overflow-y-scroll scrollbar-hide h-[680px] pb-4">
          {popularDishes.map((dish) => (
            <div
              key={dish.id}
              className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-6 py-4 mt-3 mx-6"
            >
              <h1 className="text-[#f5f5f5] font-bold text-xl mr-4">
                {dish.id < 10 ? `0${dish.id}` : `${dish.id}`}
              </h1>
              <img
                src={dish.image}
                alt={dish.name}
                className="h-[50px] w-[50px] rounded-lg object-cover"
              />
              <div>
                <h1 className="text-[#f5f5f5] font-semibold tracking-wide">
                  {dish.name}
                </h1>
                <p className="text-[#cfcfcf] text-sm font-semibold mt-1">
                  <span className="text-[#ababab] tracking-wide">Orders:</span>
                  {dish.numberOfOrders}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDishes;
