import React from "react";

import "./UserCard.styles.css";

function UserCard({ users, fSelectUser, deleteUser }) {
    return (
        <div className="cards-container">
            {users.map((user) => (
                <li key={user.id}>
                    <div className="user-card">
                        <h2>{`${user["first_name"]}  ${user["last_name"]}`}</h2>
                        <hr></hr>
                        <h4>correo</h4>
                        <p>{user.email}</p>
                        <h4>cumpleaños</h4>
                        <p>
                            <i className="fa-solid fa-gift"></i>
                            {user.birthday}
                        </p>
                        <hr></hr>
                        <div className="card-buttons">
                            <button
                                className="button-del"
                                onClick={() => deleteUser(user)}
                            >
                                <i className="fa-regular fa-trash-can"></i>
                            </button>
                            <button
                                className="button-edit"
                                onClick={() => {
                                    fSelectUser(user);
                                }}
                            >
                                <i className="fa-solid fa-pen"></i>
                            </button>
                        </div>
                    </div>
                </li>
            ))}
        </div>
    );
}

export default UserCard;
