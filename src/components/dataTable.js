
import React from "react";

function DataTable(props) {
    return( 
        <div className = "table-responsive">
        <table className = "table table-striped table-dark ">
            <thead className = "">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody >
                {props.filteredResults.map(result =>(
                <tr>
                    <td>{result.name.first} {result.name.last}</td>
                    <th scope="row">
                        <img src={result.picture.thumbnail} alt="user"></img>
                    </th>
                    <td>{result.phone}</td>
                    <td className="emailCol">{result.email}</td>
                    <td className="dobCol">{result.dob.date.slice(0,10)}</td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
    )

}
export default DataTable;