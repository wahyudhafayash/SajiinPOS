import React from "react";
import { getRandomBG } from "../../utils";

interface TableCardProps {
  name: string;
  status: string;
  initials: string;
}

const TableCard: React.FC<TableCardProps> = ({ name, status, initials }) => {
  const bgColor = getRandomBG();

  return (
    <div className="w-full bg-[#262626] hover:bg-[#313131] p-4 rounded-lg mb-4 cursor-pointer">
      <div className="flex items-center justify-between px-1">
        <h1 className="text-[#f5f5f5] text-xl font-semibold">{name}</h1>
        <p
          className={`${
            status === "Booked"
              ? "text-[#02ca3a] bg-[#04f5481e]"
              : "bg-[#f6b00036] text-[#ffb700]"
          } px-2 py-1 rounded-lg`}
        >
          {status}
        </p>
      </div>

      <div className="flex items-center justify-center mt-5 mb-7">
        <h1
          className="text-white rounded-full p-5 text-2xl"
          style={{ backgroundColor: bgColor }}
        >
          {initials}
        </h1>
      </div>
    </div>
  );
};

export default TableCard;
