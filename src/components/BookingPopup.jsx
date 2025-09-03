import { useState } from "react";

const BookingPopup = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Booking inquiry submitted from popup:", form);
    alert(`Thank you, ${form.name}! Your booking inquiry has been sent.`);

    setForm({ name: "", email: "", phone: "", message: "" });
    onClose();
  };

  const handleContentClick = (e) => {
    e.stopPropagation(); // Prevent closing when clicking inside
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="p-8 rounded-3xl shadow-lg w-full max-w-md relative"
        onClick={handleContentClick}
        style={{ backgroundColor: "#FFFFFF" }} // Solid white background
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold"
          aria-label="Close popup"
          title="Close"
          style={{ color: "#EA9236" }} // Amber
        >
          &times;
        </button>

        {/* Heading */}
        <h2
          className="text-3xl font-extrabold mb-8 text-center"
          style={{ color: "#09328E" }} // Blue
        >
          Booking Inquiry
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input Fields */}
          {[
            { id: "name", label: "Full Name", type: "text" },
            { id: "email", label: "Email Address", type: "email" },
            { id: "phone", label: "Phone Number", type: "tel" },
          ].map(({ id, label, type }) => (
            <div key={id}>
              <label
                htmlFor={id}
                className="block mb-2 font-semibold"
                style={{ color: "#09328E" }}
              >
                {label} <span style={{ color: "#EA9236" }}>*</span>
              </label>
              <input
                id={id}
                name={id}
                type={type}
                value={form[id]}
                onChange={handleChange}
                required
                placeholder={`Enter your ${label.toLowerCase()}`}
                className="w-full rounded-lg border px-4 py-3 font-medium focus:outline-none focus:ring-4 transition text-[#EA9236] border-[#EA9236] placeholder-[#EA9236]"
              />
            </div>
          ))}

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block mb-2 font-semibold"
              style={{ color: "#09328E" }}
            >
              Additional Message (optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows="3"
              value={form.message}
              onChange={handleChange}
              placeholder="Write any special requests or questions..."
              className="w-full rounded-lg border px-4 py-3 font-medium resize-none focus:outline-none focus:ring-4 transition text-[#EA9236] border-[#EA9236] placeholder-[#EA9236]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full font-extrabold py-3 rounded-xl shadow-lg transition text-white"
            style={{ backgroundColor: "#EA9236" }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#d17d29";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#EA9236";
            }}
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPopup;
