import React, { useState } from "react";
import { FaUser, FaEnvelope, FaComment } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
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

    // Simple validation
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

    // If no errors, proceed with form submission
    if (Object.keys(formErrors).length === 0) {
      try {
        // Replace this URL with your actual backend endpoint
        const response = await fetch("https://your-api-endpoint.com/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // Send form data as JSON
        });

        if (response.ok) {
          // Reset the form and show success message
          setFormData({ name: "", email: "", message: "" });
          setSuccessMessage("Your message was sent successfully!");
        } else {
          // Handle any error from the server
          setSuccessMessage("Something went wrong. Please try again.");
        }
      } catch (error) {
        // Handle network errors
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
    <div
      id="contact"
      className="contact-section  section-offset py-12 text-white"
    >
      <div className="max-w-3xl mx-auto px-6 lg:py-10">
        <div className="contact-form">
          <h2 className="text-5xl font-bold mb-6 text-orange-400">
            Get Started Today!
          </h2>
          <p className="text-lg mb-6">
            Book a consultation today and let’s discuss how we can work together
            to achieve your fitness goals!
          </p>

          {successMessage && (
            <p className="text-green-500 mb-4">{successMessage}</p>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="relative">
              <label className="block text-lg" htmlFor="name">
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
                  className={`w-full p-3 pl-10 rounded-lg text-gray-900 ${
                    errors.name ? "error-outline" : ""
                  }`}
                />
              </div>
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>

            <div className="relative">
              <label className="block text-lg" htmlFor="email">
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
                  className={`w-full p-3 pl-10 rounded-lg text-gray-900 ${
                    errors.email ? "error-outline" : ""
                  }`}
                />
              </div>
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <div className="relative">
              <label className="block text-lg" htmlFor="message">
                Message:
              </label>
              <div className="input-with-icon">
                <FaComment className="input-icon text-orange-500" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-3 pl-10 rounded-lg text-gray-900 h-32 ${
                    errors.message ? "error-outline" : ""
                  }`}
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
      </div>
    </div>
  );
};

export default Contact;
