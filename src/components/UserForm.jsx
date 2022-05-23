import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import "./UserForm.styles.css";

function UserForm({ fGetUsers, userSelected, deselectUser, close, newUser }) {
    useEffect(() => {
        reset(userSelected);
        console.log(userSelected);
    }, [userSelected]);

    const { register, handleSubmit, reset } = useForm();

    const defaultValues = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        birthday: "",
    };

    // console.log(register);
    const submit = (data) => {
        console.log(data);

        if (userSelected !== null) {
            axios
                .put(
                    `https://users-crud1.herokuapp.com/users/${userSelected.id}/`,
                    data
                )
                .then(() => {
                    fGetUsers();
                    reset(defaultValues);
                    deselectUser();
                })
                .catch((error) => console.log(error.response));
        } else {
            axios
                .post("https://users-crud1.herokuapp.com/users/", data)
                .then(() => {
                    fGetUsers();
                    reset(defaultValues);
                })
                .catch((error) => console.log(error.response));
        }
    };

    return (
        <div className="overlay-form">
            <form className="modal-form" onSubmit={handleSubmit(submit)}>
                <button className="btn-close" onClick={close}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                {newUser ? <h1>Add user</h1> : <h1>Edit user</h1>}
                <div>
                    <label htmlFor="name-input">First Name</label>
                    <input
                        type="text"
                        id="name-input"
                        placeholder="First name"
                        {...register("first_name")}
                    ></input>
                </div>
                <div>
                    <label htmlFor="lastName-input">Last Name</label>
                    <input
                        type="text"
                        id="lastName-input"
                        placeholder="Last name"
                        {...register("last_name")}
                    ></input>
                </div>
                <div>
                    <label htmlFor="email-input">Email</label>
                    <input
                        type="email"
                        id="email-input"
                        placeholder="E-mail"
                        {...register("email")}
                    ></input>
                </div>
                <div>
                    <label htmlFor="password-input">Password</label>
                    <input
                        type="password"
                        id="password-input"
                        placeholder="Password"
                        {...register("password")}
                    ></input>
                </div>
                <div className="inp-birthday">
                    <label htmlFor="birthday-input">Birthday</label>
                    <input
                        type="date"
                        id="birthday-input"
                        {...register("birthday")}
                    ></input>
                    <i className="fa-regular fa-calendar"></i>
                </div>
                {newUser ? (
                    <button className="btn-save" type="submit">
                        Add new user
                    </button>
                ) : (
                    <button className="btn-save" type="submit">
                        Save Changes
                    </button>
                )}
            </form>
        </div>
    );
}

export default UserForm;
