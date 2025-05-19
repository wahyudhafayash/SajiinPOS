import React from "react";
import { FaCheckDouble, FaCircle } from "react-icons/fa";

const OrderCard: React.FC = () => {
  return (
    <div className="w-[450px] bg-[#262626] rounded-lg p-4 mb-4">
      <div className="flex items-center gap-6 mb-3">
        <button className="bg-[#f6b100] text-[#f5f5f5] text-xl p-3 font-bold rounded-lg">
          AM
        </button>
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col items-start gap-1">
            <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
              John Doe
            </h1>
            <p className="text-[#ababab] text-sm">#101/Dine in</p>
          </div>

          <div className="flex flex-col items-end gap-1">
            <p className="bg-[#04f5482d] text-[#02ca3a] px-6 py-1 rounded-lg">
              <FaCheckDouble className="inline mr-2" /> Ready
            </p>
            <p className="text-[#ababab] text-sm tracking-wide">
              <FaCircle className="inline mr-2 text-[#02ca3a]" />
              Ready to serve
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 text-[#ababab]">
        <p>January 18, 2025 08:32 PM</p>
        <p>8 Items</p>
      </div>
      <hr className="w-full mt-4 border-t-1 border-gray-500 " />
      <div className="flex items-center justify-between mt-4">
        <h1 className="text-[#f5f5f5] text-lg font-bold">Total</h1>
        <p className="text-[#f5f5f5] text-lg font-semibold">Rp. 250.000</p>
      </div>
    </div>
  );
};

export default OrderCard;
