import React from 'react';

export const SkeletonProductCard = () => {
  return (
    <>
      <div className="m-4 mt-4 flex w-[310px] flex-col gap-4 md:w-52">
        <div className="skeleton h-[210px] w-full"></div>
        <div className="skeleton h-3 w-16"></div>
        <div className="skeleton h-8 w-28"></div>
        <div className="skeleton h-2 w-10"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-2 w-16"></div>
      </div>
    </>
  );
};

export const SkeletonDetailsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="flex flex-col md:flex-row">
        <div className="px-8 md:flex-1">
          <div className=" mb-4 rounded-l">
            <div className="skeleton h-[310px] w-[330px]"></div>
          </div>
        </div>
        <div className="px-4 md:flex-1">
          <div className="skeleton mt-2 h-4 w-24"></div>
          <div className="skeleton my-2 h-7 w-[300px]"></div>
          <div className="skeleton mb-2 h-20 w-[360px]"></div>

          <div className="mb-4 flex flex-col">
            <div className="mr-4">
              <div className="skeleton my-2 h-4 w-16"></div>
              <div className="skeleton my-2 h-9 w-28"></div>
            </div>
            <div>
              <div className="skeleton mt-1"></div>
              <div className="skeleton h-4 w-20"></div>
              <div className="skeleton mt-2 h-4 w-32"></div>
            </div>
            <div className="skeleton mt-6 h-12 w-36"></div>
            <div className="skeleton"></div>
          </div>

          <div className="w-1/2">
            <div className="skeleton w-full"></div>
          </div>
          {/* <CompanyCard /> */}
        </div>
      </div>
    </div>
  );
};
