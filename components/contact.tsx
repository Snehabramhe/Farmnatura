"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import FarmNaturaFooter from "./project-highlights/FarmNaturaFooter";
import MoveInSection from "./project-highlights/MoveInSection";

const Contact = () => {
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });


  const [success, setSuccess] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form Submitted:", formData);

 
    setTimeout(() => {
      setSuccess(true);
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    }, 2000);
  };

 
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <div className="flex flex-col md:flex-row items-center bg-[#FFFFFF] p-6 md:p-10 rounded-lg shadow-2xl max-w-4xl mx-auto mt-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image src="/images/form.svg" alt="Contact Form Image" width={400} height={300} className="w-full h-auto rounded-lg" />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10 ">
          <h2 className="text-lg font-bold text-green-800 mb-1">Have</h2>
          <h3 className="text-xl font-semibold text-green-800 mb-1">Questions?</h3>
          <h2 className="text-lg text-green-800 mt-6">Send Us A Message</h2>

          {success && (
            <p className="text-green-600 text-sm mt-2">Your message has been sent successfully!</p>
          )}

          <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell Us About Your Question"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              rows={4}
              required
            ></textarea>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-yellow-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-yellow-600 transition"
            >
              Submit →
            </button>
          </form>
        </div>
      </div>
       <div className="mt-15">
          <MoveInSection bgColor="#FFFBE5"/>
        </div>

        <div>
          <FarmNaturaFooter bgColor="#FFFBE5"/>
        </div>
      
    </div>
     
  );
};

export default Contact;