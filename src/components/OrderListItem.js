import React from 'react'

function OrderListItem({order}) {
  return (
    <div className="grid grid-rows-2 grid-flow-row p-2">
      <div className="m-2 bg-gray-200 border-2 rounded border-gray-300">
        <label className='text-xs ml-2 text-slate-500'>Order's name</label>
        <p className='w-full p-2 outline-0 bg-gray-200 text-s'>{order.name}</p>
      </div>
      <div className="m-2 bg-gray-200 border-2 rounded border-gray-300">
        <label className='text-xs ml-2 text-slate-500'>Order placed</label>
        <p className='w-full p-2 outline-0 bg-gray-200 text-s'>{order.dateOfOrder}</p>
      </div>
    </div>
  )
}

export default OrderListItem
