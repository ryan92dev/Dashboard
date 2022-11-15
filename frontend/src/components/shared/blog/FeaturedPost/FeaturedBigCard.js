import React from "react";

const FeaturedBigCard = () => {
  return (
    <>
      <div className="w-full rounded-lg h-96 bg-tertiary">{/* Image */}</div>
      <div className="flex flex-col gap-3 mt-6">
        <h3 className="text-2xl font-semibold text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quod.
        </h3>
        <p className="text-sm text-tertiary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quod.
        </p>
        <div className="flex items-center justify-end gap-3">
          <div className="w-10 h-10 rounded-full bg-primary"></div>
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-primary">John Doe</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedBigCard;
