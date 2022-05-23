import React from "react";
import UserCard from "./UserCard";
import "./UsersList.styles.css";

function UsersList({ users, fSelectUser, deleteUser, openForm }) {
    return (
        <ul className="users-container">
            <header>
                <h1>Users</h1>
                <button onClick={openForm}>
                    <i className="fa-solid fa-plus"></i> Add user
                </button>
            </header>
            <UserCard
                users={users}
                fSelectUser={fSelectUser}
                deleteUser={deleteUser}
            />
        </ul>
    );
}

export default UsersList;
