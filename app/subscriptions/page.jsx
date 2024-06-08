import React from 'react'

function Subscriptions() {
  return (
    <div className="p-4 flex-1">
      <h2 className="text-xl font-bold">Subscriptions</h2>

      <div className="mt-8 flex flex-wrap gap-2 h-4/5 w-full">
        <div
          role="status"
          class=" flex-1 flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
        >
          

          <span class="sr-only">Loading...</span>
        </div>
        <div
          role="status"
          class="flex-1 flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
        >
         

          <span class="sr-only">Loading...</span>
        </div>
        <div
          role="status"
          class="flex-1 flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
        >
          
            

          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default Subscriptions