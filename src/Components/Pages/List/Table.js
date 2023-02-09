import React from 'react'
import "./Table.scss";
const Table = ({data, query}) => {
  return (
<>
<div className="table-card">
{query.length!==0 ? <div className='filter-msg'>You are viewing filtered result</div>:""}
<table className='table-parent'>
    <tbody>
        <tr className="table-headers">
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
        </tr>
        {data.map((item) =>(
            <tr key={item.id} className="table-data">
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.occupation}</td>
        </tr>
        ))}
        
    </tbody>
</table>
</div>
</>
  )
}

export default Table