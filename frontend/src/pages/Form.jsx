import React from "react";

function Form() {
  return (
    <div className="formPage" >
      <form className="form" >
        <label htmlFor="book">Book:</label>
        <input type="text" placeholder="add book name" />
        <label htmlFor="book">Category:</label>
        <input type="text" placeholder="add category name" />
        <label htmlFor="book">Author:</label>
        <input type="text" placeholder="add author name" />
        <label htmlFor="book">Publisher:</label>
        <input type="text" placeholder="add publisher name" />
        <button type="button" className="btn btn-success m-2 w-25 ">Add</button>
      </form>
    </div>
  );
}

export default Form;
