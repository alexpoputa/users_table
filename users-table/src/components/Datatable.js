import React from 'react';

const Datatable = ({ data }) => {

    const columns = data[0] && Object.keys(data[0]);

    return (
        <table>
            <thead>
                    <tr>
                        {data[0] && columns.map(heading => (
                            <th>{heading}</th>
                        ))}
                    </tr>
            </thead>
            <tbody>
                {data.map(user => {
                    return (
                        <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{`${user.address.street}, ${user.address.city}`}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                        <td>{user.company.name}</td>
                        </tr>
                    )
                }
                )}
            </tbody>
        </table>        
    )
}

export default Datatable;