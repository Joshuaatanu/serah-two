import React from "react";

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
    
  }
  return (
    <div className="bg-white w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-50 flex ">
      <div className="flex flex-col gap-4">
        <a href="/"><div className="px-3 text-center text-black hover:underline">
            Home
        </div></a>
        <a href="/contact"><div className="px-3 text-center text-black hover:underline">
            Contact
        </div></a>
        <a href="/about"><div className="px-3 text-center text-black hover:underline">
            About
        </div></a>
        <a href="/services"><div className="px-3 text-center text-black hover:underline">
           Services
        </div></a>
       
      </div>
    </div>
  );
};

export default MobileMenu;
