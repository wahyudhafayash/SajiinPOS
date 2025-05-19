import React, { useState } from "react";
import BottomNav from "../components/shared/BottomNav";
import OrderCard from "../components/orders/OrderCard";
import BackButton from "../components/shared/BackButton";

const Orders: React.FC = () => {
  const [status, setStatus] = useState<
    "all" | "progress" | "ready" | "completed"
  >("all");

  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex items-center justify-between px-10 py-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-3xl font-bold tracking-wider">
            Orders
          </h1>
        </div>

        <div className="flex items-center justify-around gap-4">
          {["all", "progress", "ready", "completed"].map((value) => (
            <button
              key={value}
              onClick={() => setStatus(value as typeof status)}
              className={`cursor-pointer text-[#ababab] text-lg font-semibold rounded-lg px-5 py-2 ${
                status === value ? "bg-[#383838]" : ""
              }`}
            >
              {value === "all"
                ? "All"
                : value === "progress"
                ? "In Progress"
                : value.charAt(0).toUpperCase() + value.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 items-center justify-center px-10 py-4 overflow-y-scroll scrollbar-hide h-[calc(100vh-15rem)]">
        {Array.from({ length: 20 }).map((_, index) => (
          <OrderCard key={index} />
        ))}
      </div>

      <BottomNav />
    </section>
  );
};

export default Orders;
