import React, { useState } from 'react'
import Table from './Table';
import { Data } from './Users';
import "./List.scss";
const List = () => {

  const [query, setQuery] = useState("");
  const keys = ["name", "age","occupation"];

  const Search = (data) => {
    return data?.filter((item) => keys.some((key) => 
      typeof item[key] === "string" && item[key].toLowerCase().includes(query)))
  };

  return (
    <>
    <div className="list-card">
      <div className='table-details'>
        <h1>Employee Data</h1>
      <input type="text"
        className="my-list"
        placeholder="Search..."
        onChange={e => setQuery(e.target.value.toLowerCase())}
      /></div>
      <Table data={Search(Data)} query={query} className="table-card" />
      </div>
    </>
  )
}

export default List