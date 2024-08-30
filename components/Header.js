import Navigation from "./Navigation";
import Logo from "./Logo";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-primary-900 px-8 py-5">
      <div
        className="flex justify-between items-center max-w-7xl mx-auto"
        onClick={() => setIsOpen(false)}
      >
        <Logo />
        <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
}

export default Header;
