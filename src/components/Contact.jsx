"use client"
import React, { useState } from "react";
import { contact } from "@/data/contact";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., send to an API
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <section id="contact" className="py-12 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
        <div className="flex flex-col lg:flex-row lg:space-x-12 items-start">
          {/* Contact Links */}
          <div className="flex flex-col items-start space-y-6 w-full lg:w-1/2">
            {/* Email */}
            <div className="flex items-center space-x-3">
              <img
                src="/images/gmail-color.svg"
                alt="Email Icon"
                className="h-6 w-6"
              />
              <a
                href={`mailto:${contact.email}`}
                className="text-lg text-blue-600"
              >
                {contact.email}
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center space-x-3">
              <img
                src="/images/linkedin.svg"
                alt="LinkedIn Icon"
                className="h-6 w-6"
              />
              <a
                href={contact.linkedin}
                className="text-lg text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>

            {/* GitHub */}
            <div className="flex items-center space-x-3">
              <img
                src="/images/skills/github-color.svg"
                alt="GitHub Icon"
                className="h-8 w-8 bg-white rounded-full"
              />
              <a
                href={contact.github}
                className="text-lg text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>

            {/* Portfolio */}
            <div className="flex items-center space-x-3">
              <img
                src="/images/logo.png"
                alt="Portfolio Icon"
                className="h-6 w-6"
              />
              <a
                href={contact.portfolio}
                className="text-lg text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-800 p-6 rounded shadow-md space-y-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
