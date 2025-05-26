import React from "react";
import MainBodyTitle from "./MainBodyTitle";
import { MdEmail, MdPhone, MdLocationPin } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function ContactSection() {
  return (
    <div id="contact">
      <MainBodyTitle title="Contact" />
      <div className="text-gray-400 text-lg">
        <p className="mt-4 mb-8">
          Let's connect! Feel free to reach out for opportunities, collaborations, or just to say hello.
        </p>
        
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-gray-800 p-2 rounded-lg">
                  <MdEmail size={24} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-white">jerry.guerrero95@gmail.com</p>
                  <p className="text-gray-500 text-sm">Email</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-gray-800 p-2 rounded-lg">
                  <MdPhone size={24} className="text-green-400" />
                </div>
                <div>
                  <p className="text-white">(956) 240-5995</p>
                  <p className="text-gray-500 text-sm">Phone</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-gray-800 p-2 rounded-lg">
                  <MdLocationPin size={24} className="text-red-400" />
                </div>
                <div>
                  <p className="text-white">McAllen, Texas</p>
                  <p className="text-gray-500 text-sm">Location</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">Connect with me</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/gerardo-guerrero2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <FaLinkedinIn size={24} className="text-white" />
                </a>
                <a
                  href="https://github.com/Durzo95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <FaGithub size={24} className="text-white" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form Placeholder */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Send a Message</h3>
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-400 text-center py-8">
                Contact form coming soon! <br />
                For now, please reach out via email or LinkedIn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 