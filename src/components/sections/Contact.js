// src/components/sections/Contact.js
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactInfo = () => {
  const contactItems = [
    { label: 'Email', color: 'text-blue-400', value: 'ujjwalrajput1006@gmail.com', fill: 'none', gradient: 'from-blue-500 to-cyan-500', d: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { label: 'Phone', color: 'text-green-400', value: '+91 (875) 536-6145', fill: 'none', gradient: 'from-green-500 to-emerald-500', d: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
    { label: 'GitHub', color: 'text-purple-400', fill: 'currentColor', value: 'https://github.com/ujjwal-stack', gradient: 'from-purple-500 to-pink-500', d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
    { label: 'LinkedIn', color: 'text-blue-400', fill: 'currentColor', value: 'https://www.linkedin.com/in/ujjwal-singh-aa1697202/', gradient: 'from-blue-600 to-blue-700', d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' }
  ];

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 project-card">
      <h3 class="text-2xl font-bold mb-6 flex items-center">
        <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
          <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        Contact Information
      </h3>
      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-4 group">
            <div className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
              <svg class="w-6 h-6 text-white" fill={item.fill} stroke="currentColor" viewBox="0 0 24 24">
                <path d={item.d} />
              </svg>
            </div>
            <div>
              <p className={`font-semibold ${item.color}`}>{item.label}</p>
              <p className="text-gray-300">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'ujjwalportfolio',   // replace with your EmailJS Service ID
      'template_xuxcece',  // replace with your EmailJS Template ID
      form.current,
      'fIHLY5jh3ymtJlowb'    // replace with your EmailJS Public Key
    )
      .then(() => {
        setStatus('✅ Message sent successfully!');
        e.target.reset();
      },
        (error) => {
          console.error(error.text);
          setStatus('❌ Failed to send message. Try again later.');
        }
      );
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 project-card">
      <h3 class="text-2xl font-bold mb-6 flex items-center">
        <div class="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
          <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </div>
        Send Message
      </h3>
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
          <div class="relative">
            <input
              type="text"
              name="user_name"
              className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all"
              placeholder="Your Name"
              required
            />
            <div class="absolute right-3 top-3">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
          <div class="relative">
            <input
              type="email"
              name="user_email"
              className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all"
              placeholder="your@email.com"
              required
            />
            <div class="absolute right-3 top-3">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
        <input type="hidden" name="time" value={new Date().toLocaleString()} />
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
          <div class="relative">
            <textarea
              name="message"
              rows="4"
              className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all resize-none"
              placeholder="Your message..."
              required
            ></textarea>
            <div class="absolute right-3 top-3">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
          <span>Send Message</span>
        </button>
      </form>
      {status && (
        <div className="mt-4 text-center">
          <span className="text-sm text-yellow-400 bg-yellow-400/20 px-3 py-1 rounded-full">
            {status}
          </span>
        </div>
      )}
    </div>
  );
};

const Contact = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <section className="section-content fade-in">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold gradient-text mb-4">Get In Touch</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;