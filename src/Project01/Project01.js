import React, { useState } from 'react';
import { contacts } from '../data/contacts';

const Project01 = () => {
    const [search,setSearch] = useState('')
    return (
        <div className='project01'>
            <h1>Contact Keeper</h1>
            <input type="text" name="search" placeholder='Search your contacts...' onChange={(e)=>setSearch(e.target.value)} />
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
                        contacts.filter(contact=> contact.first_name.toLowerCase().includes(search)).map(contact => <tr key={contact.id}>
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
        </div>
    );
};

export default Project01;