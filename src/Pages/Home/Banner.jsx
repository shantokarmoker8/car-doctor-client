import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
import img5 from "../../assets/images/banner/5.jpg";
import img6 from "../../assets/images/banner/6.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full md:h-[600px] ">
        <img src={img1} className="w-full rounded-xl" />

        <div className="absolute p-6 md:p-24  flex flex-col md:gap-5 bg-gradient-to-r from-[#151515] to-[#15151500] w-full h-full rounded-xl">
          <h3 className="text-2xl md:text-6xl  text-white font-bold  ">
            Affordable <br /> Price For Car <br /> Servicing
          </h3>
          <p className="capitalize md:text-lg text-sm text-white">
            There are many variations of passages of available, but <br /> the
            majority have suffered alteration in some form
          </p>

          <div className="flex gap-5">
            <button className="btn btn-secoundry text-sm border-none">
              Discover More
            </button>
            <button className="btn btn-third  ">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide4"
            className="btn btn-circle btn-primery bg-[#FFFFFF33] "
          >
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a
            href="#slide2"
            className="btn btn-circle btn-primery bg-[#FFFFFF33]"
          >
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full md:h-[600px]">
        <img src={img2} className="w-full rounded-xl" />
        <div className="absolute  md:p-24  flex flex-col gap-5 bg-gradient-to-r from-[#151515] to-[#15151500] w-full h-full rounded-xl">
          <h3 className="text-6xl text-white font-bold shadow ">
            Affordable <br /> Price For Car <br /> Servicing
          </h3>
          <p className="capitalize text-lg text-white">
            There are many variations of passages of available, but <br /> the
            majority have suffered alteration in some form
          </p>

          <div className="flex gap-5">
            <button className="btn btn-secoundry border-none">
              Discover More
            </button>
            <button className="btn btn-third  ">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide1"
            className="btn btn-circle btn-primery bg-[#FFFFFF33]"
          >
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a
            href="#slide3"
            className="btn btn-circle btn-primery bg-[#FFFFFF33]"
          >
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full md:h-[600px]">
        <img src={img3} className="w-full rounded-xl" />
        <div className="absolute  md:p-24  flex flex-col gap-5 bg-gradient-to-r from-[#151515] to-[#15151500] w-full h-full rounded-xl">
          <h3 className="text-6xl text-white font-bold shadow ">
            Affordable <br /> Price For Car <br /> Servicing
          </h3>
          <p className="capitalize text-lg text-white">
            There are many variations of passages of available, but <br /> the
            majority have suffered alteration in some form
          </p>

          <div className="flex gap-5">
            <button className="btn btn-secoundry border-none">
              Discover More
            </button>
            <button className="btn btn-third  ">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide2"
            className="btn btn-circle btn-primery bg-[#FFFFFF33]"
          >
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a
            href="#slide4"
            className="btn btn-circle btn-primery bg-[#FFFFFF33]"
          >
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full md:h-[600px]">
        <img src={img4} className="w-full rounded-xl" />
        <div className="absolute  md:p-24  flex flex-col gap-5 bg-gradient-to-r from-[#151515] to-[#15151500] w-full h-full rounded-xl">
          <h3 className="text-6xl text-white font-bold shadow ">
            Affordable <br /> Price For Car <br /> Servicing
          </h3>
          <p className="capitalize text-lg text-white">
            There are many variations of passages of available, but <br /> the
            majority have suffered alteration in some form
          </p>

          <div className="flex gap-5">
            <button className="btn btn-secoundry border-none">
              Discover More
            </button>
            <button className="btn btn-third  ">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide3"
            className="btn btn-circle btn-primery bg-[#FFFFFF33]"
          >
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a
            href="#slide5"
            className="btn btn-circle btn-primery bg-[#FFFFFF33]"
          >
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full md:h-[600px]">
        <img src={img5} className="w-full rounded-xl" />
        <div className="absolute  md:p-24  flex flex-col gap-5 bg-gradient-to-r from-[#151515] to-[#15151500] w-full h-full rounded-xl">
          <h3 className="text-6xl text-white font-bold shadow ">
            Affordable <br /> Price For Car <br /> Servicing
          </h3>
          <p className="capitalize text-lg text-white">
            There are many variations of passages of available, but <br /> the
            majority have suffered alteration in some form
          </p>

          <div className="flex gap-5">
            <button className="btn btn-secoundry border-none">
              Discover More
            </button>
            <button className="btn btn-third  ">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide4"
            className="btn btn-circle btn-primery bg-[#FFFFFF33]"
          >
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a
            href="#slide6"
            className="btn btn-circle btn-primery bg-[#FFFFFF33]"
          >
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full md:h-[600px]">
        <img src={img6} className="w-full rounded-xl" />
        <div className="absolute  md:p-24  flex flex-col gap-5 bg-gradient-to-r from-[#151515] to-[#15151500] w-full h-full rounded-xl">
          <h3 className="text-6xl text-white font-bold shadow ">
            Affordable <br /> Price For Car <br /> Servicing
          </h3>
          <p className="capitalize text-lg text-white">
            There are many variations of passages of available, but <br /> the
            majority have suffered alteration in some form
          </p>

          <div className="flex gap-5">
            <button className="btn btn-secoundry border-none">
              Discover More
            </button>
            <button className="btn btn-third  ">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide5"
            className="btn btn-circle btn-primery bg-[#FFFFFF33]"
          >
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a
            href="#slide1"
            className="btn btn-circle btn-primery bg-[#FFFFFF33]"
          >
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
