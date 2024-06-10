import { useLoaderData } from "react-router-dom";
import chackout from "../../assets/images/checkout/checkout.png";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const BookService = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const due = form.due.value;

    const booking = {
      customerName: name,
      date,
      email,
      img,
      phone,
      service: title,
      service_id: _id,
      price: due,
    };
    console.log(booking);
    fetch("http://localhost:3000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <div className="h-80 relative rounded-2xl bg-gradient-to-r ">
        <img src={chackout} alt="" className="w-full h-full" />
        <h2 className=" absolute top-[50%] left-[100px] text-white font-bold text-5xl ">
          {title}
        </h2>
      </div>
      <div className="bg-[#F3F3F3] my-32 rounded-2xl p-24">
        <form className="grid grid-cols-2 gap-6" onSubmit={handleBookService}>
          <input
            type="text"
            name="name"
            id=""
            defaultValue={user?.displayName}
            placeholder="Name"
            className="py-4 px-6 rounded-lg "
          />
          <input
            type="date"
            name="date"
            id=""
            placeholder="Date"
            className="py-4 px-6 rounded-lg"
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Email"
            defaultValue={user?.email}
            className="py-4 px-6 rounded-lg"
          />
          <input
            type="text"
            name="phone"
            id=""
            placeholder="phone"
            className="py-4 px-6 rounded-lg"
          />
          <input
            type="text"
            name="due"
            id=""
            placeholder="price"
            defaultValue={"$" + price}
            className="py-4 px-6 rounded-lg col-span-2"
          />

          <input
            type="submit"
            value="Order Confirm"
            name=""
            id=""
            className="btn btn-secoundry col-span-2"
          />
        </form>
      </div>
    </div>
  );
};

export default BookService;
