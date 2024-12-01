import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const Form = () => {
  return (
   
    <div className="bg-black min-h-screen text-white">
      <div className="text-white w-full pt-20 pb-10"> {/* Aumenté el padding-top a 20 para bajar el contenido */}
        <h1 className="text-center text-4xl font-bold mb-8">Frequently Asked Questions</h1>
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="bg-gray-800 rounded-lg overflow-hidden mb-4">
            <button className="flex justify-between items-center w-full p-4 text-lg font-medium">
              <span>1. What payment methods do you accept?</span>
              <span><AiFillCaretDown /></span>
            </button>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden mb-4">
            <button className="flex justify-between items-center w-full p-4 text-lg font-medium">
              <span>2. How long does shipping take?</span>
              <span><AiFillCaretDown /></span>
            </button>
            <div className="p-4 text-gray-400 border-t border-gray-700 flex justify-between items-center">
              Shipping typically takes 5-7 business days.
              <AiFillCaretUp />
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden mb-4">
            <button className="flex justify-between items-center w-full p-4 text-lg font-medium">
              <span>3. What is your return policy?</span>
              <span><AiFillCaretDown /></span>
            </button>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden mb-4">
            <button className="flex justify-between items-center w-full p-4 text-lg font-medium">
              <span>4. How do I track my order?</span>
              <span><AiFillCaretDown /></span>
            </button>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden mb-4">
            <button className="flex justify-between items-center w-full p-4 text-lg font-medium">
              <span>5. Do you offer international shipping?</span>
              <span><AiFillCaretDown /></span>
            </button>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden mb-4">
            <button className="flex justify-between items-center w-full p-4 text-lg font-medium">
              <span>6. How do I track my order?</span>
              <span><AiFillCaretDown /></span>
            </button>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden mb-4">
            <button className="flex justify-between items-center w-full p-4 text-lg font-medium">
              <span>7. How do I track my order?</span>
              <span><AiFillCaretDown /></span>
            </button>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden mb-4">
            <button className="flex justify-between items-center w-full p-4 text-lg font-medium">
              <span>8. How do I track my order?</span>
              <span><AiFillCaretDown /></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
