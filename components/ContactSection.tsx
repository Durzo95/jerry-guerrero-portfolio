import React from "react";
import MainBodyTitle from "./MainBodyTitle";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import profileData from "../data/profileData";

export default function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title">
      <MainBodyTitle title="Contact" />
      <div className="text-gray-400 text-lg">
        <p className="mt-4 mb-8">
          Let's connect! Feel free to reach out for opportunities, collaborations, or just to say hello.
        </p>
        
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Get in Touch</h3>
            <div className="space-y-4" role="list" aria-label="Contact information">
              <div className="flex items-center gap-3" role="listitem">
                <div className="bg-blue-600 p-3 rounded-lg" aria-hidden="true">
                  <MdEmail size={20} className="text-white" />
                </div>
                <div>
                  <a 
                    href={`mailto:${profileData.contact.email}`}
                    className="text-white hover:text-blue-400 transition-colors font-medium"
                    aria-label={`Send email to ${profileData.contact.email}`}
                  >
                    {profileData.contact.email}
                  </a>
                  <p className="text-gray-500 text-sm">Email</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3" role="listitem">
                <div className="bg-green-600 p-3 rounded-lg" aria-hidden="true">
                  <MdPhone size={20} className="text-white" />
                </div>
                <div>
                  <a 
                    href={`tel:${profileData.contact.phone.replace(/\D/g, '')}`}
                    className="text-white hover:text-green-400 transition-colors font-medium"
                    aria-label={`Call ${profileData.contact.phone}`}
                  >
                    {profileData.contact.phone}
                  </a>
                  <p className="text-gray-500 text-sm">Phone</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Professional Networks */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Connect With Me</h3>

            <div className="flex gap-4" role="list" aria-label="Professional social media links">
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-lg transition-colors"
                aria-label={`Connect with ${profileData.personal.fullName} on LinkedIn`}
                role="listitem"
              >
                <FaLinkedinIn size={20} className="text-white" aria-hidden="true" />
                <span className="text-white font-medium">LinkedIn</span>
              </a>
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gray-700 hover:bg-gray-600 px-4 py-3 rounded-lg transition-colors"
                aria-label={`View ${profileData.personal.fullName}'s projects on GitHub`}
                role="listitem"
              >
                <FaGithub size={20} className="text-white" aria-hidden="true" />
                <span className="text-white font-medium">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 