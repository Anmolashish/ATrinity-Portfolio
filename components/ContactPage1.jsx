import React from "react";
import { Home, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export default function ContactPage1() {
  return (
    <div className="py-12 w-full flex justify-center items-center ">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 min-h-40 w-full p-4 max-w-6xl">
        {/* Visit Us Card */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-full rounded-2xl flex flex-col justify-start items-center gap-4 p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="bg-white/20 backdrop-blur-sm h-16 w-16 rounded-full flex items-center justify-center border-2 border-white">
            <MapPin className="text-white" size={32} strokeWidth={1.5} />
          </div>
          <div className="text-center space-y-3">
            <h4 className="text-white font-bold text-xl md:text-2xl">
              Visit Us
            </h4>
            <p className="text-white/80 text-sm max-w-xs mx-auto">
              Come visit our showroom to see our products in person and get
              expert advice from our team.
            </p>
            <p className="text-white text-sm md:text-base bg-white/10 p-3 rounded-lg backdrop-blur-sm">
              561/9 Tagore nagar, Near social convent school, Jalandhar
            </p>
            <a
              href="https://maps.google.com/?q=561/9+Tagore+nagar+Jalandhar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm mt-2 transition-colors bg-white/20 px-4 py-2 rounded-full"
            >
              <MapPin size={16} /> Get Directions
            </a>
          </div>
        </div>

        {/* Call Us Card */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-full rounded-2xl flex flex-col justify-start items-center gap-4 p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="bg-white/20 backdrop-blur-sm h-16 w-16 rounded-full flex items-center justify-center border-2 border-white">
            <Phone className="text-white" size={32} strokeWidth={1.5} />
          </div>
          <div className="text-center space-y-3">
            <h4 className="text-white font-bold text-xl md:text-2xl">
              Call Us
            </h4>
            <p className="text-white/80 text-sm max-w-xs mx-auto">
              Have questions? Our customer support team is available 24/7 to
              assist you.
            </p>
            <div className="flex flex-col gap-2 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
              <a
                href="tel:+919465337387"
                className="text-white hover:text-blue-100 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <Phone size={14} /> 9465337387
              </a>
              <a
                href="tel:+917888346624"
                className="text-white hover:text-blue-100 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <Phone size={14} /> 7888346624
              </a>
            </div>
            <p className="text-white/70 text-xs mt-2">
              Mon-Sat: 9:00 AM - 8:00 PM
            </p>
          </div>
        </div>

        {/* Email Us Card */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-full rounded-2xl flex flex-col justify-start items-center gap-4 p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="bg-white/20 backdrop-blur-sm h-16 w-16 rounded-full flex items-center justify-center border-2 border-white">
            <Mail className="text-white" size={32} strokeWidth={1.5} />
          </div>
          <div className="text-center space-y-3">
            <h4 className="text-white font-bold text-xl md:text-2xl">
              Email Us
            </h4>
            <p className="text-white/80 text-sm max-w-xs mx-auto">
              Send us an email and we'll get back to you within 24 hours.
            </p>
            <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
              <a
                href="mailto:Atrinity9928@gmail.com?subject=Inquiry%20from%20Website"
                className="text-white hover:text-blue-100 transition-colors flex items-center justify-center gap-2 text-sm md:text-base break-all"
              >
                <Mail size={14} /> Atrinity9928@gmail.com
              </a>
            </div>
            <a
              href="mailto:Atrinity9928@gmail.com"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm mt-2 transition-colors bg-white/20 px-4 py-2 rounded-full"
            >
              <MessageCircle size={16} /> Send Message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
