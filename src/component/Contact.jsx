import "../css/front.css"
import Swal from 'sweetalert2';
import axios from 'axios';
import { useState } from 'react';


function Contact() {
  const URL = 'http://localhost:3000/contact';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name' && /\d/.test(value)) {
      alert("Name field cannot contain digits.");
      return;
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      Swal.fire({
        title: "Validation Error",
        text: "Name, email, and query fields are required.",
        icon: "error",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        title: "Validation Error",
        text: "Please enter a valid email address.",
        icon: "error",
      });
      return;
    }

    try {
      const response = await axios.post(URL, formData);
      console.log(response.data);
      setFormData({ name: '', email: '', message: '' });
      Swal.fire({
        title: "Success",
        text: response.data.message,
        icon: "success",
      });
    } catch (err) {
      console.log('Error: ', err);
      Swal.fire({
        title: "Error",
        text: "Something went wrong. Please try again later.",
        icon: "error",
      });
    }
  };

  return (
    <div className="relative" id="contact">
      <div className="pho"></div> {/* This is the blurred background */}
      <div className="flex items-center justify-center">
        <div className="bg-white mt-8 mb-8 p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                onChange={handleChange}
                type="text"
                name="name"
                value={formData.name}
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                onChange={handleChange}
                type="email"
                name="email"
                value={formData.email}
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                onChange={handleChange}
                name="message"
                value={formData.message}
                placeholder="Your message"
                rows="5"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
