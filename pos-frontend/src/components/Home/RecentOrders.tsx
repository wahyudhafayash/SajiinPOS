import React from "react";
import { FaSearch } from "react-icons/fa";
import OrderList from "./OrderList";

const RecentOrders: React.FC = () => {
  return (
    <div className="px-8 mt-6">
      <div className="bg-[#1a1a1a] w-full h-[450px] rounded-lg">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
            Recent Orders
          </h1>
          <a
            href="#"
            className="text-[#f5f5f5] text-sm font-semibold bg-[#2e2e2e] hover:bg-[#202020] py-2 px-4 rounded-lg transition-colors duration-200"
          >
            View All
          </a>
        </div>

        <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[10px] px-6 py-4 mx-6">
          <FaSearch className="text-[#f5f5f5]" />
          <input
            type="text"
            placeholder="Search recent orders..."
            className="bg-[#1f1f1f] outline-none text-[#f5f5f5] w-full"
          />
        </div>

        <div className="mt-4 px-6 overflow-y-scroll scrollbar-hide h-[300px]">
          {[...Array(10)].map((_, i) => (
            <OrderList
              name="John Doe"
              itemCount={8}
              tableNumber={4}
              status="ready"
              initials="JD"
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
