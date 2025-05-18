import React, { useState, useEffect } from "react";

const Greetings: React.FC = () => {
  const [wibDate, setWibDate] = useState<Date>(getWIBDate());

  useEffect(() => {
    const timer = setInterval(() => {
      setWibDate(getWIBDate());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function getWIBDate(): Date {
    const local = new Date();
    const utc = local.getTime() + local.getTimezoneOffset() * 60000;
    return new Date(utc + 7 * 60 * 60 * 1000);
  }

  function getGreeting(date: Date): string {
    const hour = date.getHours();
    if (hour >= 5 && hour < 11) return "Selamat Pagi";
    if (hour >= 11 && hour < 15) return "Selamat Siang";
    if (hour >= 15 && hour < 19) return "Selamat Sore";
    return "Selamat Malam";
  }

  function formatDate(date: Date): string {
    const months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    return `${months[date.getMonth()]} ${String(date.getDate()).padStart(
      2,
      "0"
    )}, ${date.getFullYear()}`;
  }

  function formatTime(date: Date): string {
    return `${String(date.getHours()).padStart(2, "0")}:${String(
      date.getMinutes()
    ).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;
  }

  return (
    <div className="flex justify-between items-center px-8 mt-5">
      <div>
        <h1 className="text-[#f5f5f5] text-xl font-semibold tracking-wide">
          {getGreeting(wibDate)}, John Doe
        </h1>
        <p className="text-[#ababab] text-sm">
          Berikan layanan terbaik untuk pelanggan kamu
        </p>
      </div>
      <div>
        <h1 className="text-[#f5f5f5] text-3xl font-bold tracking-wide w-[130px]">
          {formatTime(wibDate)}
        </h1>
        <p className="text-[#ababab] text-sm text-end mr-2">
          {formatDate(wibDate)}
        </p>
      </div>
    </div>
  );
};

export default Greetings;
