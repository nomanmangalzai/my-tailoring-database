import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-primary p-1 h-10 border-b border-gray-200 dark:bg-gray-900">
      <div className="flex items-center border-2 justify-between max-w-screen-xl mx-auto h-full">
        <Link
          className="px-3 py-1 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          to="/save-customer"
        >
          ثبت کردن مشتری
        </Link>
        <div className="flex space-x-8">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

const NavLinks = () => (
  <ul className="flex space-x-8">
    <li>
      <Link
        className="block px-3 py-1 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        to="/about"
      >
        About
      </Link>
    </li>
    <li>
      <Link
        className="block px-3 py-1 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        to="/get-one-naaf"
      >
        جستجو
      </Link>
    </li>
    <li>
      <Link
        className="block px-3 py-1 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        to="/fetch-customer"
      >
        ریکارد مشتریان
      </Link>
    </li>
    <li>
      <Link
        className="block px-3 py-1 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        to="/contactus"
      >
        Contact Us
      </Link>
    </li>
    <li>
      <Link
        className="block px-3 py-1 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        to="/help"
      >
        Help
      </Link>
    </li>
  </ul>
);

export default Navbar;
