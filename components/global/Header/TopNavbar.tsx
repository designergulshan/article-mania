import Link from "next/link";

const TopNavbar = () => {
  return (
    <div className="navigation flex">
      <ul className="flex items-center">
        <li className="ml-2">
          <Link href="/article">
            <a className="inline-block rounded border border-gray-300 text-gray-500 text-sm px-5 py-2 hover:border-gray-700 hover:bg-gray-700 hover:text-white transition ease-in-out">
              Blog
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TopNavbar;
