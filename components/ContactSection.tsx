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
                <div className="bg-blue-600 p-3 rounded-lg">
                  <MdEmail size={20} className="text-white" />
                </div>
                <div>
                  <a 
                    href="mailto:jerry.guerrero95@gmail.com"
                    className="text-white hover:text-blue-400 transition-colors font-medium"
                  >
                    jerry.guerrero95@gmail.com
                  </a>
                  <p className="text-gray-500 text-sm">Email</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-green-600 p-3 rounded-lg">
                  <MdPhone size={20} className="text-white" />
                </div>
                <div>
                  <a 
                    href="tel:+19562405995"
                    className="text-white hover:text-green-400 transition-colors font-medium"
                  >
                    (956) 240-5995
                  </a>
                  <p className="text-gray-500 text-sm">Phone</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-red-600 p-3 rounded-lg">
                  <MdLocationPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">McAllen, Texas</p>
                  <p className="text-gray-500 text-sm">Location</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Professional Networks */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Connect With Me</h3>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/gerardo-guerrero2/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-lg transition-colors"
              >
                <FaLinkedinIn size={20} className="text-white" />
                <span className="text-white font-medium">LinkedIn</span>
              </a>
              <a
                href="https://github.com/Durzo95"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gray-700 hover:bg-gray-600 px-4 py-3 rounded-lg transition-colors"
              >
                <FaGithub size={20} className="text-white" />
                <span className="text-white font-medium">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 