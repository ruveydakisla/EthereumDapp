import React from 'react';
import '../style/Pages.css';
export default function AddProperty() {
  return (
    <div className="main">
      <div className="card">
        <form className="form" onSubmit={'numberSet'}>
          <label className="Titles">Add Property</label>
          <text className="TextEx">Name</text>
          <input
            className="input"
            type="text"
            name="name"
            onChange="{(t) => setUint(t.target.value)}"
          />
          <text className="TextEx">Address Information</text>
          <input
            className="input"
            type="text"
            name="name"
            onChange="{(t) => setUint(t.target.value)}"
          />
          <text className="TextEx">Address</text>
          <input
            className="input"
            type="text"
            name="name"
            onChange="{(t) => setUint(t.target.value)}"
          />
          <button className="button" type="submit" value="Confirm">
            Add Property
          </button>
        </form>
        <br />

        {/* {getNumber} */}
      </div>
    </div>
  );
}
