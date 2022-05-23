import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import UsersList from "./components/UsersList";
import UserForm from "./components/UserForm";
import DeletedUserMessage from "./components/DeletedUserMessage";

function App() {
    const [users, setUsers] = useState([]);
    const [userSelected, setUserSelected] = useState(null);
    const [showDeletedUserMessage, setShowDeletedUserMessage] = useState(false);
    const [showUserForm, setShowUserForm] = useState(false);
    const [userDeletedName, setUserDeletedName] = useState("");
    const [isNewUser, setIsNewUser] = useState(false);

    useEffect(() => {
        axios
            .get("https://users-crud1.herokuapp.com/users/")
            .then((res) => setUsers(res.data));
    }, []);

    const getUsers = () => {
        axios
            .get("https://users-crud1.herokuapp.com/users/")
            .then((res) => setUsers(res.data));
    };
    const openForm = () => {
        setShowUserForm(true);
        setIsNewUser(true);
    };
    const selectUser = (user) => {
        setShowUserForm(true);
        setUserSelected(user);
        console.log(user);
    };

    const deselectUser = () => setUserSelected(null);

    const deleteUser = ({ id, first_name, last_name }) => {
        setUserDeletedName(`${first_name} ${last_name}`);
        axios
            .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
            .then(() => {
                getUsers();
                setShowDeletedUserMessage(true);
                console.log(userDeletedName);
            })
            .catch((error) => console.log(error.response));
    };

    return (
        <div className="App">
            {showDeletedUserMessage && (
                <DeletedUserMessage
                    close={() => setShowDeletedUserMessage(false)}
                    deletedUserName={userDeletedName}
                />
            )}
            {showUserForm && (
                <UserForm
                    fGetUsers={getUsers}
                    userSelected={userSelected}
                    deselectUser={deselectUser}
                    newUser={isNewUser}
                    close={() => {
                        setIsNewUser(false);
                        setShowUserForm(false);
                    }}
                />
            )}
            <UsersList
                users={users}
                fSelectUser={selectUser}
                deleteUser={deleteUser}
                openForm={openForm}
            />
        </div>
    );
}

export default App;
