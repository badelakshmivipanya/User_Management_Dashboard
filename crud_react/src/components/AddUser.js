import React from "react";

const AddUser = ({ onAdd }) => {

const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value,e.target.email.value);
    e.target.name.value = "";
    e.target.email.value = "";
}

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <h4>Add User</h4>
        <input placeholder="Name" name="name" />
        <input placeholder="Email" name="email" />
        <button class="btn btn-primary" onSubmit={handleOnSubmit}>Add</button>
        <hr />
      </form>
    </div>
  );
};

export default AddUser;
