import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaComment,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = {};

    if (!formData.name) {
      formErrors.name = "Name is required";
    }
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid";
    }
    if (!formData.message) {
      formErrors.message = "Message is required";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch("https://your-api-endpoint.com/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setFormData({ name: "", email: "", message: "" });
          setSuccessMessage("Your message was sent successfully!");
        } else {
          setSuccessMessage("Something went wrong. Please try again.");
        }
      } catch (error) {
        setSuccessMessage("Failed to send. Please check your connection.");
      }
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact-page bg-gradient-to-br from-orange-500 via-gray-900 to-black text-white">
      <div className="contact-header py-20 text-center">
        <h1 className="text-5xl font-bold text-orange-400 mb-4">
          We'd Love to Hear from You!
        </h1>
        <p className="text-lg">
          Whether you have a question or just want to say hello, we’re here to
          help.
        </p>
      </div>

      <section className="contact-details py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          <div className="detail-card bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <FaPhoneAlt className="text-4xl text-orange-400 mb-4" />
            <h3 className="text-xl font-bold">Phone</h3>
            <p>+123 456 7890</p>
          </div>
          <div className="detail-card bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <FaEnvelope className="text-4xl text-orange-400 mb-4" />
            <h3 className="text-xl font-bold">Email</h3>
            <p>info@example.com</p>
          </div>
          <div className="detail-card bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <FaMapMarkerAlt className="text-4xl text-orange-400 mb-4" />
            <h3 className="text-xl font-bold">Location</h3>
            <p>123 Fitness Street, Wellness City</p>
          </div>
        </div>
      </section>

      <section className="contact-form-section py-12 bg-gray-900">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-orange-400 mb-6">
            Send Us a Message
          </h2>
          {successMessage && (
            <p className="text-green-500 mb-4">{successMessage}</p>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <label className="block text-lg mb-1" htmlFor="name">
                Name:
              </label>
              <div className="input-with-icon">
                <FaUser className="input-icon text-orange-500" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-4 pl-12 rounded-lg bg-gray-100 text-gray-900 ${
                    errors.name ? "error-outline" : ""
                  }`}
                  placeholder="Enter your name"
                />
              </div>
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>

            <div className="relative">
              <label className="block text-lg mb-1" htmlFor="email">
                E-mail:
              </label>
              <div className="input-with-icon">
                <FaEnvelope className="input-icon text-orange-500" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-4 pl-12 rounded-lg bg-gray-100 text-gray-900 ${
                    errors.email ? "error-outline" : ""
                  }`}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <div className="relative">
              <label className="block text-lg mb-1" htmlFor="message">
                Message:
              </label>
              <div className="input-with-icon">
                <FaComment className="input-icon text-orange-500" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-4 pl-12 rounded-lg bg-gray-100 text-gray-900 h-32 ${
                    errors.message ? "error-outline" : ""
                  }`}
                  placeholder="Write your message here"
                ></textarea>
              </div>
              {errors.message && (
                <p className="text-red-500">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
