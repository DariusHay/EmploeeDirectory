import React from "react";
import Search from "./SearchForm";

function Body(props) {
    return (
    <div>
        <Search
            handleInputChange={props.handleInputChange}
            employees={props.employees}
            handleFormSubmit={props.handleFormSubmit}
        />

        <div className="row" style={{
            margin: "auto",
            width: "98%"
        }}>
            <div className="col-sm-2"><b>First</b></div>
            <div className="col-sm-2"><b>Last</b></div>
            <div className="col-sm-4"><b>Email</b></div>
            <div className="col-md-2"><b>Country</b></div>
            <div className="col-md-1"><b>Gender</b></div>
        </div>
        <hr></hr>
        <p>Click first name for more info</p>
        {props.results.map(result => (
            <a key={result.cell} className="list-group-item list-group-item-action">
                <div className="row">
                    <p onClick={props.card} className="col-sm-2"><button type="button" className="btn btn-outline-primary" style={{ cursor: "pointer" }}>{result.name.first}</button></p>
                    <p className="col-sm-2">{result.name.last}</p>
                    <p className="col-sm-4">{result.email}</p>
                    <p className="col-sm-2">{result.location.country}</p>
                    <p className="col-sm-1">{result.gender}</p>
                    <hr></hr>
                </div>
            </a>

        ))
        }
    </div>
    )
}

export default Body;