const Footer = () => {
  return (
    <footer className="w-full text-center text-gray-100 text-sm py-4 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 mt-auto">
      <p className="opacity-90">&copy; {new Date().getFullYear()} Liza. Built for authentication only.</p>
    </footer>
  );
};

export default Footer;

