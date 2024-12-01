import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="bg-black text-white p-8 shadow-md">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center">
    
            <div className="text-2xl font-bold">
              <span>kgant</span> 
            </div>
    
            
            <ul className="flex space-x-8 justify-center flex-1">
              <li><a href="#" className="hover:text-gray-300">Inicio</a></li>
              <li><a href="#" className="hover:text-gray-300">Servicios</a></li>
              <li><a href="#" className="hover:text-gray-300">home</a></li>
              <li><a href="#" className="hover:text-gray-300">Colection</a></li>
              <li><a href="#" className="hover:text-gray-300">stoks</a></li>


            </ul>
    
          
            <div className="flex items-center space-x-4">
              <FaShoppingCart className="text-2xl hover:text-gray-300" />
            </div>
          </div>
          
        </nav>
        
      );
  };
  
  export default Navbar;
  