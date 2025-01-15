import { useState } from "react";

function App() {
  const [searchItem, setSearchItem] = useState("");
  const items = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
    "Date",
    "Grapes",
  ];
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <>
      <div className="bg-blue-100 flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-4">Search Filter item</h1>
        <div className="flex gap-3 mb-4">
          <label htmlFor="search-item" className="text-3xl ">
            Search:
          </label>
          <input
            type="text"
            placeholder="Search item...."
            value={searchItem}
            className="p-2 rounded-md border border-blue-300 outline-none"
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </div>
        <ul className="bg-white p-4 rounded-md shadow-md w-1/3">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li
                className=" text-center py-2 border-b last:border-b-0"
                key={index}
              >
                {item}
              </li>
            ))
          ) : (
            <li>No items Found</li>
          )}
        </ul>
      </div>
    </>
  );
}

export default App;
