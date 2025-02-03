import React, { useState } from 'react';

const UserList = () => {
    const users = ['User1', 'User2'];  // Przykładowi użytkownicy
    return (
        <div className="user-list">
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;