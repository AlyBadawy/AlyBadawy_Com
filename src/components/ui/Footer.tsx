import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p className="text-gradient">
        Copyright &copy; 2023 - {currentYear} - Aly Badawy
      </p>
      <p className="text-xs text-cyan-700/70">Made with ❣️ in the USA</p>
    </footer>
  );
}
