import Container from "../container";
import TopNavbar from "./TopNavbar";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-2 shadow mb-5 fixed left-0 top-0 right-0 bg-white">
      <Container>
        <div className="h-16 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center border border-green-500 bg-green-50 pl-2 pr-4 rounded-full h-12">
              <img
                src="https://cdn0.iconfinder.com/data/icons/essential-pack-4/512/12-2-512.png"
                alt="Article Mania"
                width="32"
                className="mr-2"
              />
              <h2 className="text-md text-green-700 font-bold">
                Article Mania
              </h2>
            </a>
          </Link>

          <TopNavbar />
        </div>
      </Container>
    </header>
  );
};

export default Header;
