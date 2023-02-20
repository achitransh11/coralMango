import React, { useState } from 'react'
import Table from './Table';
import { Data } from './Users';
import "./List.scss";
import Card from '../Card/Card';
const List = () => {

  const [query, setQuery] = useState("");
  const keys = ["name", "age", "occupation"];
const [click, setClick] = useState(false);
  const Search = (data) => {
    return data?.filter((item) => keys.some((key) =>
      typeof item[key] === "string" && item[key].toLowerCase().includes(query)))
  };

  const handleSortData = (data) => {
    return data.sort((a,b)=> a.age - b.age)
  }

  const pathname = window.location.pathname;
  return (
    <>
      <div className="list-card">
        <div className='table-details'>
          <h1>Employee Data</h1>
          <input type="text"
            className="my-list"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value.toLowerCase())}
          />
          <button onClick={()=>handleSortData(Data) && setClick(true)}>Sort Data</button>
          </div>
        {pathname ==="/table" && <Table data={click ?handleSortData(Data):Search(Data)} query={query} className="table-card" /> }
        {pathname === "/card" && <Card data={Search(Data)} query={query} />}
      </div>
    </>
  )
}

export default List