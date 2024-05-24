import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="md:grid grid-cols-2 gap-14 py-32">
      <div className="relative my-auto ">
        <img src={person} alt="" className="w-3/4" />

        <img
          src={parts}
          alt=""
          className="absolute w-1/2 right-5 top-1/2 border-8 border-white rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-7">
        <h4 className="primery-color text-xl font-bold">About Us</h4>
        <h1 className="text-5xl font-bold">
          We are qualified <br /> & of experience <br />
          in this field
        </h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
        </p>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
        </p>
        <div>
          <button className="btn btn-secoundry">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
