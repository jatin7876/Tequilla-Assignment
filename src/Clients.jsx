import React from "react";
import ALG from "./assets/aljirzra.png"
import CP from "./assets/cpbanck.png"
import DB from "./assets/dbank.webp"
import EM from "./assets/emirates.png"
import KAL from "./assets/klipartz.com.png"
import ROS from "./assets/roshan.png"
import ZAN from "./assets/zain.png"
import RAK from "./assets/rakbank.png"

export default function OurClients() {
  const clients = [
    {
      name: "Emirates NBD",
      logo: EM,
    },
    {
      name: "Roshan",
      logo: ROS,
    },
    {
      name: "Etisalat",
      logo: ALG,
    },
    {
      name: "Zain",
      logo: ZAN,
    },
    {
      name: "RAKBANK",
      logo: RAK,
    },
    {
      name: "Capital Bank",
      logo: CP,
    },
    {
      name: "Liv Bank",
      logo: DB,
    },
    {
      name: "Bank Aljazira",
      logo: KAL,
    },
  ];

  return (
    <section className="w-full flex justify-center py-24 pr-50 bg-[#f7f8fa]">
      <div className="max-w-6xl w-full px-6">
        {/* Heading */}
        <h2 className="text-8xl font-manrope font-bold text-[#0d365e] leading-tight ">
           Our
        </h2>
        <h2 className="text-8xl font-manrope font-bold text-[#246bb2] leading-tight mb-14 ">
           Clients
        </h2>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-6 flex items-center justify-center rounded-sm h-32"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-30 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
