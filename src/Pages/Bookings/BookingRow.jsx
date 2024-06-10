const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, customerName, price, date, img, service, phone, status } =
    booking;

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="rounded-xl w-36 h-36">
              <img src={img} alt={service} />
            </div>
          </div>
          <div>
            <div className="font-bold text-xl">{customerName}</div>
            <div className="text-base opacity-50">{service}</div>
            <div className="text-base opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>{price}</td>
      <td>{date}</td>
      <th>
        {status === "confirm" ? (
          <span className="border rounded-xl p-4 border-[#29B170] text-[#29B170]">
            Confirmed
          </span>
        ) : (
          <button
            onClick={() => handleBookingConfirm(_id)}
            className="btn btn-secoundry"
          >
            Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingRow;
