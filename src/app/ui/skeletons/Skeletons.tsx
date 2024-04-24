import React from 'react';

export const SkeletonProductCard = () => {
  return (
    <div className="m-4 flex w-52 flex-col gap-4">
      <div className="skeleton h-[210px] w-full"></div>
      <div className="skeleton h-3 w-16"></div>
      <div className="skeleton h-8 w-28"></div>
      <div className="skeleton h-2 w-10"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-2 w-16"></div>
    </div>
  );
};

export const SkeletonDetailsPage = () => {
  return (
    <div className="m-4 flex w-52 flex-col gap-4">
      <div className="skeleton h-[210px] w-full"></div>
      <div className="skeleton h-3 w-16"></div>
      <div className="skeleton h-8 w-28"></div>
      <div className="skeleton h-2 w-10"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-2 w-16"></div>
    </div>
  );
};
