import React from 'react';

const Table = ({data}) => {
    return (
        <table>
                <thead>
                    <tr>
                        <th>Sl No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(contact => <tr key={contact.id}>
                            <td>{contact.id}</td>
                            <td>{contact.first_name}</td>
                            <td>{contact.last_name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.gender}</td>
                            <td>{contact.phone}</td>
                        </tr>)
                    }
                </tbody>
            </table>
    );
};

export default Table;