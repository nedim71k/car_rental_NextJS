import React from 'react'

function CarCardSkeleton() {
  return (
    <div>

      <div className='rounded-md p-4 max-w-sm w-full mx-auto'></div>
      <div className='animate-pulse flex space-x-4'>
        <div className='ronuded-lg
        bg-slate-200 h-[330px]
        w-[220px]'></div>
      </div>

    </div>
  )
}

export default CarCardSkeleton