import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row items-start justify-start p-3 m-2 cursor-pointer white-glassmorphism hover:shadow-xl">
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className="flex flex-col flex-1 ml-5">
      <h3 className="mt-2 text-lg text-white">{title}</h3>
      <p className="mt-1 text-sm text-white md:w-9/12">{subtitle}</p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex items-center justify-center w-full gradient-bg-services">
    <div className="flex flex-col items-center justify-between px-4 py-12 mf:flex-row md:p-20">
      <div className="flex flex-col items-start justify-start flex-1">
        <h1 className="py-2 text-3xl text-white sm:text-5xl text-gradient ">
          Services that we
          <br />
          continue to improve
        </h1>
        <p className="w-11/12 my-2 text-base font-light text-left text-white md:w-9/12">
          The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer
        </p>
      </div>

      <div className="flex flex-col items-center justify-start flex-1">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security gurantee"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Best exchange rates"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Fastest transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
        />
      </div>
    </div>
  </div>
);

export default Services;
