import React, { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <footer className="py-6 text-center text-gray-500 text-sm md:text-base">
      <p>
        Todos os direitos reservados © {new Date().getFullYear()} -{" "}
        <span className="hover:text-black duration-300">Sujeito Programador</span>
      </p>
    </footer>
  );
};

export default Footer;
