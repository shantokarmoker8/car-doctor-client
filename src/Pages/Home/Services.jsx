import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-5 text-center">
        <h3 className="primery-color font-bold text-xl">Service</h3>
        <h1 className="text-5xl font-bold">Our Service Area</h1>
        <p className="text-base">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br />
          words which dont look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Services;
