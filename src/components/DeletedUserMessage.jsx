import React from "react";

import "./DeletedUserMessage.styles.css";

function DeletedUserModal({ close, deletedUserName }) {
    console.log(deletedUserName);
    return (
        // <div className="modal-container">
        <>
            <div className="overlay">
                <div className="modal">
                    <button className="btn-close" onClick={close}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                    <h1>Delete user</h1>
                    <p>
                        User
                        <strong>{` ${deletedUserName} `}</strong>has been
                        deleted
                    </p>
                    <button className="btn-ok" onClick={close}>
                        Ok
                    </button>
                </div>
            </div>
        </>
    );
}

export default DeletedUserModal;
