import React from "react";

const CategoryTaginput = ({ setItems, items, name, required }) => {
  const handleAddItem = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      // make sure the item is not already in the list
      e.preventDefault();
      if (!items.includes(e.target.value.toLowerCase())) {
        setItems([...items, e.target.value]);

        e.target.value = "";
      } else {
        e.preventDefault();
        e.target.value = "";
      }
    }
  };

  const handleRemoveItem = (item) => {
    setItems(items.filter((i) => i !== item));
  };

  return (
    <div className="flex flex-col flex-1 gap-2 px-4 pb-4 rounded-lg -py-2 h-max bg-secondary">
      <div className="relative w-full px-3 py-4 mt-6 border border-gray-400 rounded-lg h-14 hover:border-white focus-within:border-green-500">
        <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-primary px-1 bg-secondary">
          {name + (required ? " *" : "")}
        </span>
        <input
          onKeyDown={handleAddItem}
          placeholder="Enter a category. Press enter to add."
          className="block w-full text-sm font-medium text-gray-100 placeholder-opacity-50 bg-transparent outline-none focus:outline-none focus:bg-transparent focus:ring-0 webkit-appearance-none placeholder-slate-500"
        />
      </div>

      <div className="flex flex-wrap flex-1">
        {items?.map((item, index) => (
          <div key={index} className="relative mx-2 my-2 rounded-md ">
            <span className="px-4 py-1 text-sm rounded-lg text-primary bg-tertiary">
              {item}
            </span>
            <div className="absolute top-0 right-0 text-sm translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full text-primary">
              <div
                className="flex items-center justify-center w-4 h-4 cursor-pointer "
                onClick={() => handleRemoveItem(item)}
              >
                <p className="mb-1">x</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryTaginput;
