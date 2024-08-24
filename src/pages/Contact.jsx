import React from 'react';

const Contact = () => {
  return (
    <section className="py-12 px-4">
      <div className="container max-w-screen-md mx-auto">
        <h2 className="heading text-center mb-6">Contact Us</h2>
        <p className="mb-8 lg:mb-12 font-light text-center text_para">
          Feel free to reach out to us with any questions or concerns. Our team is here to help you!
        </p>

        <form action="#" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="form_label">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="form_input mt-1 bg-gradient-to-r from-green-400 to-blue-500 text-white placeholder:text-gray-200 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-300 ease-in-out"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="form_label">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@email.com"
                className="form_input mt-1 bg-gradient-to-r from-blue-400 to-purple-500 text-white placeholder:text-gray-200 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="form_label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Subject of your message"
              className="form_input mt-1 bg-gradient-to-r from-purple-400 to-pink-500 text-white placeholder:text-gray-200 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-300 ease-in-out"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="form_label">
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Type your message here..."
              className="form_input mt-1 bg-gradient-to-r from-cyan-500 to-red-500 text-white placeholder:text-gray-200 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-300 ease-in-out"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-3 px-6 rounded-full shadow-lg hover:from-indigo-600 hover:to-blue-700 transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
