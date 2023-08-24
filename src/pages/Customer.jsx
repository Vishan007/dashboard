import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import { Header } from '../components'
import { customersColumns,customersData } from '../data/dummy'

const Customer = () => {
  const handleChange = ({ selectedRows }) => {
    // You can set state or dispatch with something like Redux so we can use the retrieved data
    // console.log('Selected Rows: ', selectedRows);
  };
  const [filterText, setFilterText] = useState('')
  const getData = (search) => {
    setFilterText(search)
  }
  const filteredItems = customersData.filter(
    item => item.CustomerName && item.CustomerName.toLowerCase().includes(filterText.toLowerCase())
  )
  return (
    <div className='m-8 md:mt-10 p-2 md:p-10 sm:mt-20 sm:w-11/12 lg:w-11/12  bg-white rounded-3xl'>
      <Header title='Customer' category='Page' onSearch={getData}/>
      <DataTable data={filterText?filteredItems:customersData} columns={customersColumns}
      fixedHeader
      fixedHeaderScrollHeight="500px"
      pagination
      selectableRows
      onSelectedRowsChange={handleChange}
      />
    </div>
  )
}

export default Customer