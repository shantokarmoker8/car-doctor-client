import { FaArrowRightLong } from "react-icons/fa6";
import PropTypes from "prop-types";
const ServiceCard = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div className="p-6 border rounded-2xl flex flex-col gap-5">
      <img src={img} alt="" className="rounded-2xl h-[208px] w-full" />
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="flex items-center justify-between primery-color">
        <h4 className="text-xl font-semibold ">Price: ${price}</h4>
        <FaArrowRightLong></FaArrowRightLong>
      </div>
    </div>
  );
};

export default ServiceCard;
ServiceCard.propTypes = {
  service: PropTypes.object,
};
