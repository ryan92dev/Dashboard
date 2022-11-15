import React from "react";

const PostCard = () => {
  return (
    <div className="p-2 mt-6 rounded-lg shadow-lg bg-secondary">
      <div className="w-full h-48 rounded-lg bg-primary">{/* Image */}</div>
      <div className="flex flex-col">
        <div className="flex gap-2 my-2">
          <h4 className="px-2 py-1 text-xs tracking-wide rounded-lg bg-tertiary text-tertiary">
            React
          </h4>
          <h4 className="px-2 py-1 text-xs tracking-wide rounded-lg bg-tertiary text-tertiary">
            Node
          </h4>
          <h4 className="px-2 py-1 text-xs tracking-wide rounded-lg bg-tertiary text-tertiary">
            Javascript
          </h4>
        </div>
        <h3 className="text-xl font-semibold text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
        <p className="mt-3 text-sm text-tertiary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptate, quod, quia, voluptates quas voluptatibus quibusdam
          accusantium quae quidem voluptatum quos.
        </p>

        <div className="flex mt-4 text-xs tracking-wide text-secondary">
          <h4>27th August</h4>
          <h4 className="mx-2">|</h4>
          <h4>2 min read</h4>

          <h4 className="mx-2">|</h4>
          <h4>By John Doe</h4>
        </div>

        <div className="flex items-center justify-end gap-2 mt-4">
          <button className="px-4 py-2 text-sm font-semibold border rounded-lg text-primary bg-secondary border-primary">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

// <div className="p-2 rounded-lg shadow-lg bg-secondary">
//       <div className="flex flex-col gap-3">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 rounded-full">{/* Image */}</div>
//             <div className="flex flex-col">
//               <h3 className="font-semibold text-primary">John Doe</h3>
//               <p className="text-sm text-gray-400">July 12, 2021</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-3">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-5 h-5 text-gray-400"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M10 12a2 2 0 100-4 2 2 0 000 4z"
//                 clipRule="evenodd"
//               />
//               <path
//                 fillRule="evenodd"
//                 d="M3 10a7 7 0 1114 0 7 7 0 01-14 0zm7-5a5 5 0 100 10 5 5 0 000-10z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             <p className="text-sm text-gray-400">2 min read</p>
//           </div>
//         </div>
//         <div>
//           <h3 className="font-semibold text-primary">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
//             quae.
//           </h3>
//           <p className="text-sm text-gray-400">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
//             quae.
//           </p>
//         </div>
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-5 h-5 text-gray-400"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M3 3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm2 0v14h12V3H5z"
//                 clipRule="evenodd"
//               />
//               <path
//                 fillRule="evenodd"
//                 d="M7 7a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             <p className="text-sm text-gray-400">2</p>
//           </div>
//           <div className="flex items-center gap-3">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-5 h-5 text-gray-400"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M3 3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm2 0v14h12V3H5z"
//                 clipRule="evenodd"
//               />
//               <path
//                 fillRule="evenodd"
//                 d="M7 7a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             <p className="text-sm text-gray-400">2</p>
//           </div>
//         </div>
//       </div>
//     </div>
