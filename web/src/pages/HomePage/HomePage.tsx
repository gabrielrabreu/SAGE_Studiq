import React from "react";

const HomePage: React.FC = () => {
  return (
    <div>
      <nav className="sticky top-0 grid grid-cols-3">
        <div className="p-1">
          <div className="grid grid-cols-4 gap-1">
            <div>
              <img src="/logo.svg" alt="logo" />
            </div>
            <div className="bg-gray-300">Item 1.2</div>
            <div className="bg-gray-300">Item 1.3</div>
            <div className="bg-gray-300">Item 1.4</div>
          </div>
        </div>
        <div className="p-1">
          <div className="bg-gray-300">Item 2</div>
        </div>
        <div className="p-1">
          <div className="grid grid-cols-5 gap-1">
            <div className="bg-gray-300">Item 3.1</div>
            <div className="bg-gray-300">Item 3.2</div>
            <div className="bg-gray-300">Item 3.3</div>
            <div className="bg-gray-300 col-span-2">Item 3.4</div>
          </div>
        </div>
      </nav>
      <main>
        <div className="m-auto max-w-7xl">
          <div className="mt-12">
            <div className="bg-gray-300">Item 1</div>
            <div className="mt-1 grid grid-cols-3 gap-1">
              <div className="bg-gray-300">Item 1.1</div>
              <div className="bg-gray-300">Item 1.2</div>
              <div className="bg-gray-300">Item 1.3</div>
            </div>
          </div>
          <div className="mt-12">
            <div className="bg-gray-300">Item 2</div>
            <div className="mt-1 grid grid-cols-3 gap-1">
              <div className="bg-gray-300">Item 2.1</div>
              <div className="bg-gray-300">Item 2.2</div>
              <div className="bg-gray-300">Item 2.3</div>
            </div>
          </div>
          <div className="mt-12">
            <div className="bg-gray-300">Item 3</div>
            <div className="mt-1 grid grid-cols-3 gap-1">
              <div className="bg-gray-300">Item 3.1</div>
              <div className="bg-gray-300">Item 3.2</div>
              <div className="bg-gray-300">Item 3.3</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
