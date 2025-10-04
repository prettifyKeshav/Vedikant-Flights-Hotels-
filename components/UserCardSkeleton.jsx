"use client";

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function UserCardSkeleton() {
  return (
    <div className="p-4 border rounded">
      {/* Circle skeleton */}
      <Skeleton circle width={50} height={50} />
      
      {/* Line skeletons */}
      <div className="mt-2">
        <Skeleton height={20} width={150} />
        <Skeleton height={15} width={`80%`} />
      </div>
    </div>
  );
}
