import React from "react";
import { FaCheckDouble, FaCircle } from "react-icons/fa";
import type { OrderListProps } from "../../utils/interface";

const OrderList: React.FC<OrderListProps> = ({
  name,
  itemCount,
  tableNumber,
  status,
  initials,
}) => {
  return (
    <div className="flex items-center gap-6 mb-3">
      <button className="bg-[#f6b100] text-[#f5f5f5] text-xl p-3 font-bold rounded-lg">
        {initials}
      </button>
      <div className="flex items-center justify-between w-[80%]">
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
            {name}
          </h1>
          <p className="text-[#ababab] text-sm">{itemCount} Items</p>
        </div>
        <div>
          <h1 className="text-[#f6b100] font-semibold border border-[#f6b100] rounded-lg p-1.5">
            Table No: {tableNumber}
          </h1>
        </div>
        <div className="flex flex-col items-end gap-1">
          {status === "ready" && (
            <>
              <p className="bg-[#04f5482d] text-[#02ca3a] px-6 py-1 rounded-lg">
                <FaCheckDouble className="inline mr-2" /> Ready
              </p>
              <p className="text-[#ababab] text-sm tracking-wide">
                <FaCircle className="inline mr-2 text-[#02ca3a]" />
                Ready to serve
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderList;
