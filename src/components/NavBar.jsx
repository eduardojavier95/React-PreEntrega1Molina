import Cart from "./Cart";
import { FaOpencart } from "react-icons/fa";

const Navbar = () => {

  const cartItemCount = 5;

  const preventBehavior = (e) => {
    e.preventDefault();
  }

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold inline-block">
          Ecommerce <FaOpencart className="text-xl inline-block" />
        </div>
        <div>
          <a href="/" className="px-4 hover:bg-gray-700 py-2 rounded" onClick={preventBehavior}>Inicio</a>
          <a href="/categories" className="px-4 hover:bg-gray-700 py-2 rounded" onClick={preventBehavior}>Categorias</a>
          <a href="/about" className="px-4 hover:bg-gray-700 py-2 rounded" onClick={preventBehavior}>Acerca de</a>
          <a href="/contact" className="px-4 hover:bg-gray-700 py-2 rounded" onClick={preventBehavior}>Contacto</a>
          <Cart cartItemCount={cartItemCount}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;