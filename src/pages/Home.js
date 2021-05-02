import React from "react";
import Api from "../components/Api";
import Body from "../components/Body";
import 'react-dropdown/style.css';
import Card from "../components/Card";

const styles = {
    position: {
        textAlign: "center"
    },
    border: {
        borderStyle: "solid"
    },
    pointer: {
        cursor: "pointer"
    },
    container: {
        margin: "auto",
        width: "98%"
    }
}

class Home extends React.Component {
    state = {
        search: '',
        employees: [],
        results: [],
        filter: [],
        card: false
    }

    componentDidMount() {
        Api.all()
            .then(res => this.setState({ employees: res.data.results, results: res.data.results, filter: res.data.results }))
            .catch(err => console.log(err))

    }

    handleFemale = () => {
        const list = this.state.employees.filter(result => result.gender === 'female');
        this.setState({ filter: list, results: list })
    }

    handleMale = () => {
        const list = this.state.employees.filter(result => result.gender === 'male');
        this.setState({ filter: list, results: list })
    }

    handleAll = () => {
        this.setState({ filter: this.state.employees, results: this.state.employees })
    }


    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    card = async event => {
        await this.setState({ card: true });
        const list = this.state.employees.filter(result => result.name.first === event.target.textContent);
        this.setState({ results: list })
        console.log(this.state.card)
        console.log(list);
    }

    newlist = event => {
        event.preventDefault();
        if (this.state.search) {
            const list = this.state.employees.filter(result => result.name.first === this.state.search);
            this.setState({ results: list })
            console.log(list);
        } else {
            this.setState({ results: this.state.employees })
        }
    }

    render() {
        return (
            <main style={styles.container}>
                {this.state.card === false ? <>
                    <div className="jumbotron" style={{ position: "relative" }}>
                        <h1 style={styles.position}>Employee Directory</h1>
                        <div style={{ position: 'absolute', bottom: 8, left: 100 }}>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Filter by Gender
                            </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <button className="dropdown-item" onClick={this.handleAll}>All Employees</button>
                                    <button className="dropdown-item" onClick={this.handleFemale}>Female Employees</button>
                                    <button className="dropdown-item" onClick={this.handleMale}>Male Employees</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Body
                        handleInputChange={this.handleInputChange}
                        employees={this.state.filter}
                        handleFormSubmit={this.newlist}
                        results={this.state.results}
                        card={this.card}
                    />
                </> : (
                        <>
                            <div className="jumbotron" style={{ position: "relative" }}>
                                <h1 style={styles.position}>Employee Directory</h1>
                                <div style={{ position: 'absolute', bottom: 8, left: 100 }}>
                                    <button className="btn btn-secondary" onClick={() => this.setState({ card: false, results: this.state.employees })}>Return Home</button>
                                </div>
                            </div>
                            <Card
                                results={this.state.results} />
                        </>
                    )}
            </main>
        );
    }
}

export default Home;