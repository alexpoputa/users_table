import React from 'react';

const Datatable = ({ data }) => {

    const columns = data[0] && Object.keys(data[0]);

    return (
        <table className="styled-table">
            <thead>
                    <tr>
                        {data[0] && columns.map(heading => (
                            <th>{heading}</th>
                        ))}
                    </tr>
            </thead>
            <tbody>
                {Object.keys(data).map(user => {
                    return (
                        <tr key={data[user].id}>
                        <td>{data[user].id}</td>
                        <td>{data[user].name}</td>
                        <td>{data[user].username}</td>
                        <td>{data[user].email}</td>
                        <td>{`${data[user].address.street}, ${data[user].address.city}`}</td>
                        <td>{data[user].phone}</td>
                        <td>{data[user].website}</td>
                        <td>{data[user].company.name}</td>
                        </tr>
                    )
                }
                )}
            </tbody>
        </table>        
    )
}

export default Datatable;