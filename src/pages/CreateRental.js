import React from 'react';

export default function CreateRental() {
  return (
    <div className="main">
      <div className="card">
        <form className="form" onSubmit={'numberSet'}>
          <label className="Titles">Create Rental</label>
          <text className="TextEx">Tenant Address</text>
          <input
            className="input"
            type="text"
            name="name"
            onChange="{(t) => setUint(t.target.value)}"
          />
          <text className="TextEx">Real Address</text>
          <input
            className="input"
            type="text"
            name="name"
            onChange="{(t) => setUint(t.target.value)}"
          />
          <text className="TextEx">Rental Start Date</text>
          <input
            className="input"
            type="text"
            name="name"
            onChange="{(t) => setUint(t.target.value)}"
          />
          <text className="TextEx">Lease End Date</text>
          <input
            className="input"
            type="text"
            name="name"
            onChange="{(t) => setUint(t.target.value)}"
          />
          <button className="button" type="submit" value="Confirm">
            Create Rental
          </button>
        </form>
        <br />

        {/* {getNumber} */}
      </div>
    </div>
  );
}
