import React, { useState } from 'react';
import { contacts } from '../data/contacts';
import Table from './Table';

const Project02 = () => {
    const [query,setQuery] = useState('')
    const search=(data)=>{
        //1st way to search for a project02

        // return data.filter(contact=> contact.first_name.toLowerCase().includes(query) || contact.last_name.toLowerCase().includes(query) || contact.email.toLowerCase().includes(query) || contact.phone.toLowerCase().includes(query))

        //2nd way to search for a project02
        const keys = ['first_name','last_name','phone','email','gender']
        return data.filter(contact => keys.some(key=>contact[key].toLowerCase().includes(query)));

    }
    return (
        <div className='project02'>
            <h1>Contact Keeper</h1>
            <input type="text" name="search" placeholder='Search your contacts...' onChange={(e)=>setQuery(e.target.value)} />
            <Table data ={search(contacts)}/>
        </div>
    );
};

export default Project02;