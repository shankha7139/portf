import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <nav className="container mx-auto px-4">
        <ul className="flex justify-center space-x-6">
          {["About", "Projects", "Education", "Contact", "Resume"].map(
            (item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item === "About" ? "/" : `/${item.toLowerCase()}`}
                  className="text-white hover:text-blue-300"
                >
                  {item}
                </Link>
              </motion.li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
