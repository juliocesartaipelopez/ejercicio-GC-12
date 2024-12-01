import { FaFacebookF, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col">

      <div className="flex-grow flex flex-col items-center justify-center w-full">
        <h1 className="text-3xl font-bold mb-8">Let's talk</h1>
        <div className="w-10/12 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full py-8">

            <div className="w-full aspect-square md:aspect-auto md:h-[350px] bg-gray-700 rounded-3xl border border-gray-400">
              <img
                src="pexels-photo-7095726.webp"
                alt="Profile"
                className="object-cover w-full h-full rounded-3xl"
              />
            </div>

   
            <div className="w-full aspect-square md:aspect-auto md:h-[350px] bg-gray-700 rounded-tr-[200px] rounded-bl-[200px] rounded-br-3xl rounded-tl-3xl border border-gray-400">
              <img
                src="pexels-photo-7095726.webp"
                alt="Profile"
                className="object-cover w-full h-full rounded-tr-[200px] rounded-bl-[200px] rounded-br-3xl rounded-tl-3xl"
              />
            </div>

            <div className="w-full md:h-[350px] bg-gray-700 rounded-3xl border border-gray-400 flex items-center justify-center">
              <form className="bg-gray-800 p-6 rounded-3xl w-full h-full flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-black p-3 rounded-md hover:bg-blue-500"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

 
      <footer className="w-full bg-gray-900 p-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-gray-400">
 
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="font-bold text-lg text-white">Elegant</h2>
            <p>Elevate Your Style Today!</p>
          </div>

    
          <div className="flex flex-col sm:flex-row gap-8 text-center md:text-left">
        
            <div>
              <h3 className="font-bold text-white mb-2">Pages</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    New Collection
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Delivery
                  </a>
                </li>
              </ul>
            </div>

        
            <div>
              <h3 className="font-bold text-white mb-2">Legal Information</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms y Conditions
                  </a>
                </li>
              </ul>
            </div>

        
            <div>
              <h3 className="font-bold text-white mb-2">Contact Us</h3>
              <ul className="flex gap-4 justify-center md:justify-start text-white">
                <li>
                  <a href="mailto:example@example.com" className="text-xl hover:text-blue-500">
                    <FaEnvelope />
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-xl hover:text-blue-500">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-xl hover:text-pink-500">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-xl hover:text-red-500">
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </footer>
    </section>
  );
};

export default ContactSection;
