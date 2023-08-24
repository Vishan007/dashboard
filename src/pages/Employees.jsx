import React, { useState } from 'react';
import { Header } from '../components';
import DataTable from 'react-data-table-component';
import { employeesGrid,employeesData } from '../data/dummy';

const Employees = () => {
  const [filterText, setFilterText] = useState('')
  const getData = (search) => {
    setFilterText(search)
  }
  const filteredItems = employeesData.filter(
    item => item.Name && item.Name.toLowerCase().includes(filterText.toLowerCase())
  )
  
  return (
    <div className='m-8 md:mt-10 p-2 md:p-10 sm:mt-20 sm:w-11/12 lg:w-11/12  bg-white rounded-3xl'>
      <Header title='Employees' category='Page' onSearch={getData}  />
      <DataTable columns={employeesGrid} data={filterText?filteredItems:employeesData}
      fixedHeader
      fixedHeaderScrollHeight="500px"
      pagination
      responsive/>
    </div>
  )
}

export default Employees