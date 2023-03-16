import React from 'react'
import ExpandablePanel from '../common/ExpandablePanel'
import { useFetchOrdersQuery } from '../store'
import OrderListItem from './OrderListItem'

//order item ide u expandable panel
//header je order name

function OrderList() {

  const { data: ordersData, error } = useFetchOrdersQuery()

  let renderedContent;

  if(error){
    renderedContent = <div>Error loading orders</div>
  } else if(ordersData){
    renderedContent = ordersData.map((order) => {
      return(
        <div key={order.id}>
          <ExpandablePanel header={order.name}><OrderListItem order={order}></OrderListItem></ExpandablePanel>
        </div>
      )
      })
  }

  return (
    <div>
      {renderedContent}
    </div>
  )
}

export default OrderList
