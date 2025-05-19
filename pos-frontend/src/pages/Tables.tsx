import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import TableCard from "../components/tables/TableCard";
import { useState } from "react";
import { tables } from "../constants";

const Tables = () => {
  const [status, setStatus] = useState<"All" | "Booked">("All");
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex items-center justify-between px-10 py-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-3xl font-bold tracking-wider">
            Tables
          </h1>
        </div>
        <div className="flex items-center justify-around gap-4">
          {["All", "Booked"].map((value) => (
            <button
              key={value}
              onClick={() => setStatus(value as typeof status)}
              className={`cursor-pointer text-[#ababab] text-lg font-semibold rounded-lg px-5 py-2 ${
                status === value ? "bg-[#383838]" : ""
              }`}
            >
              {value === "All"
                ? "All"
                : value === "Booked"
                ? "Booked"
                : value.charAt(0).toUpperCase() + value.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 items-center justify-center px-10 py-4 overflow-y-scroll scrollbar-hide h-[calc(100vh-15rem)]">
        {tables.map((table) => {
          return (
            <TableCard
              key={table.id}
              name={table.name}
              status={table.status}
              initials={table.initial}
            />
          );
        })}
      </div>
      <BottomNav />
    </section>
  );
};

export default Tables;
