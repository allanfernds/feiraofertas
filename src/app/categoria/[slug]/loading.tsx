import React from 'react';
import { SkeletonProductCard } from '../../ui/skeletons/Skeletons';

const loading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center pt-10">
      <div className="skeleton h-[200px] w-[310px] md:w-[1000px]"></div>
      <div className="mt-20 grid max-w-[1200px] grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:p-0">
        <SkeletonProductCard />
        <SkeletonProductCard />
        <SkeletonProductCard />
        <SkeletonProductCard />
        <SkeletonProductCard />
        <SkeletonProductCard />
        <SkeletonProductCard />
        <SkeletonProductCard />
        <SkeletonProductCard />
        <SkeletonProductCard />
        <SkeletonProductCard />
        <SkeletonProductCard />
        <SkeletonProductCard />
        <SkeletonProductCard />
        <SkeletonProductCard />
        <SkeletonProductCard />
      </div>
    </div>
  );
};

export default loading;
