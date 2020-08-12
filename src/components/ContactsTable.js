import React from 'react';
import { useHistory } from 'react-router-dom';

const ContactsTable = ({ contacts }) => {
    const history = useHistory();
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Firstname</th>
                    <th scope="col">Lastname</th>
                    <th scope="col">Email</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact, i) => (
                    <tr key={i}>
                        <th scope="row">{i + 1}</th>
                        <td>{contact.firstname}</td>
                        <td>{contact.lastname}</td>
                        <td>{contact.email}</td>
                        <td>
                            <button
                                className="btn btn-warning"
                                onClick={() => {
                                    history.push(`/update/${contact.id}`);
                                }}
                            >
                                Update
                            </button>
                        </td>
                        <td>
                            <button
                                className="btn btn-danger"
                                onClick={() => {
                                    //delete
                                }}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ContactsTable;
