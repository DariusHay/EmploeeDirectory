import React from "react";

function SearchForm(props) {
    return (
        
        <div className="input-group mb-3">
            <input 
            type="text" 
            className="form-control" 
            placeholder="Search Employee by First Name" 
            aria-label="Recipient's name" 
            aria-describedby="basic-addon2"
            value={props.search}
            onChange={props.handleInputChange}
            list="workers"
            ></input>
            <datalist id="workers">
            {props.employees.map(employee => (
                <option key={employee.cell}>{employee.name.first}</option>
            ))}
            </datalist>
            <div className="input-group-append">
                <span className="input-group-text" onClick={props.handleFormSubmit} id="basic-addon2" style={{ cursor: "pointer" }}>Search</span>
            </div>
        </div>
    )
}

export default SearchForm;