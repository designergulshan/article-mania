import Container from "../components/global/container";
import Header from "../components/global/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <Container className="mt-28">
        <main>
          <ul className="grid md:grid-cols-3 gap-4 md:gap-6">
            <li className="flex flex-col justify-between">
              <Link href="/">
                <a className="text-gray-800 flex-grow border mb-1 text-lg hover:text-green-500 font-medium p-4 rounded shadow-sm hover:shadow-xl cursor-pointer hover:border-green-500 transition ease-in-out">
                  CSS Naming Conventions: Fewer Rules, more Fun
                </a>
              </Link>
              <time className="text-gray-300 text-xs">aug 23</time>
            </li>
            <li className="flex flex-col justify-between">
              <Link href="/">
                <a className="text-gray-800 flex-grow border mb-1 text-lg hover:text-green-500 font-medium p-4 rounded shadow-sm hover:shadow-xl cursor-pointer hover:border-green-500 transition ease-in-out">
                  A counter statement: Putting the CSS in the head
                </a>
              </Link>
              <time className="text-gray-300 text-xs">aug 23</time>
            </li>
            <li className="flex flex-col justify-between">
              <Link href="/">
                <a className="text-gray-800 flex-grow border mb-1 text-lg hover:text-green-500 font-medium p-4 rounded shadow-sm hover:shadow-xl cursor-pointer hover:border-green-500 transition ease-in-out">
                  MBA, iPad, Nexus 4, some Money and Cards, my Keys, the Watch,
                  Sunglasses and a Bike Lock
                </a>
              </Link>
              <time className="text-gray-300 text-xs">aug 23</time>
            </li>
            <li className="flex flex-col justify-between">
              <Link href="/">
                <a className="text-gray-800 flex-grow border mb-1 text-lg hover:text-green-500 font-medium p-4 rounded shadow-sm hover:shadow-xl cursor-pointer hover:border-green-500 transition ease-in-out">
                  How Make better optimization with webpack and splitChunk in
                  the production?
                </a>
              </Link>
              <time className="text-gray-300 text-xs">aug 23</time>
            </li>
            <li className="flex flex-col justify-between">
              <Link href="/">
                <a className="text-gray-800 flex-grow border mb-1 text-lg hover:text-green-500 font-medium p-4 rounded shadow-sm hover:shadow-xl cursor-pointer hover:border-green-500 transition ease-in-out">
                  How to detect a user’s preferred color scheme in JavaScript
                </a>
              </Link>
              <time className="text-gray-300 text-xs">aug 23</time>
            </li>
          </ul>
        </main>
      </Container>
    </>
  );
}
