import React from "react";

function Card(props) {
    return (
        <div>
            {props.results.map(result => (
                <div className="card mb-3" style={{ maxWidth: 540 }}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={result.picture.medium} className="card-img" alt={result.name.first}></img>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{result.name.first} {result.name.last}</h5>
                                <p className="card-text"><b>Location:</b> {result.location.city} {result.location.state}, {result.location.country}</p>
                                <p className="card-text"><b>Cell Phone:</b> {result.cell}</p>
                                <p className="card-text"><b>Email:</b><a target="blank_" class="mailto" href={result.email}> {result.email}</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card;