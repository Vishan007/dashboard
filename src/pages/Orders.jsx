import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { ordersData,ordersColumns } from '../data/dummy';
import { Header } from '../components';

const Orders = () => {
  const [filterText, setFilterText] = useState('')
  const getData = (search) => {
    setFilterText(search)
  }
  const filteredItems = ordersData.filter(
    item => item.CustomerName && item.CustomerName.toLowerCase().includes(filterText.toLowerCase())
  )
  return (
    <div className='m-8 md:mt-10 p-2 md:p-10 sm:mt-20 sm:w-11/12 lg:w-11/12  bg-white rounded-3xl'>
      <Header title='Orders' category='Page' onSearch={getData} />
      <DataTable columns={ordersColumns} data={filterText?filteredItems:ordersData}
      fixedHeader
      fixedHeaderScrollHeight="500px"
      pagination
      responsive/>
    </div>
  )
}

export default Orders