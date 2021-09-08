
import React, {Component} from "react";
import api from "../utils/Api";
import DataTable from "./dataTable";


class PersonList extends Component {
    state = {
        result: [],
        filteredResult: [],
        search: ''
        
    };

    componentDidMount() {
        this.searchUsers();
    };

    searchUsers = () => {
        api.search()
            .then(res => {
                this.setState({ result: res.data.results });
                this.setState({ filteredResult: res.data.results });
                console.log(this.state.result);
            })
            .catch(err => console.log(err));
    }

    handleInputChange = event => {

        const { name, value } = event.target;

        this.setState({
            [name]: value
        });

        let filtered = this.state.result.filter(obj => {
            if (obj.name.first.toLowerCase().includes(value.toLowerCase()) || obj.name.last.toLowerCase().includes(value.toLowerCase())) {
                return obj;
            }
        })
         this.setState({ filteredResult: filtered });

        };

    handleSort = event => {
        
        console.log(event.target.name)
        //eslint-disable-next-line default-case
        switch(event.target.name){

            case 'firstNameAsc':

                let firstAsc = this.state.filteredResult;

                firstAsc.sort((a, b) => {
                    let nameA = a.name.first.toLowerCase();
                    let nameB = b.name.first.toLowerCase();

                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                })

                this.setState({filteredResult: firstAsc})
                break;

            case 'firstNameDesc':

                let firstDesc = this.state.filteredResult;

                firstDesc.sort((a, b) => {
                    let nameA = a.name.first.toLowerCase();
                    let nameB = b.name.first.toLowerCase();

                    if (nameA < nameB) {
                        return 1;
                    }
                    if (nameA > nameB) {
                        return -1;
                    }
                    return 0;
                })

                this.setState({ filteredResult: firstDesc })
                break;

            case 'lastNameAsc':

                let lastAsc = this.state.filteredResult;

                lastAsc.sort((a, b) => {
                    let nameA = a.name.last.toLowerCase();
                    let nameB = b.name.last.toLowerCase();

                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                })

                this.setState({ filteredResult: lastAsc })
                break;

            case 'lastNameDesc':

                let lastDesc = this.state.filteredResult;

                lastDesc.sort((a, b) => {
                    let nameA = a.name.last.toLowerCase();
                    let nameB = b.name.last.toLowerCase();

                    if (nameA < nameB) {
                        return 1;
                    }
                    if (nameA > nameB) {
                        return -1;
                    }
                    return 0;
                })

                this.setState({ filteredResult: lastDesc })
                break;

            case 'emailAsc':

                let emailAsc = this.state.filteredResult;

                emailAsc.sort((a, b) => {
                    let nameA = a.email.toLowerCase();
                    let nameB = b.email.toLowerCase();

                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                })

                this.setState({ filteredResult: emailAsc })
                break;

            case 'emailDesc':

                let emailDesc = this.state.filteredResult;

                emailDesc.sort((a, b) => {
                    let nameA = a.email.toLowerCase();
                    let nameB = b.email.toLowerCase();

                    if (nameA < nameB) {
                        return 1;
                    }
                    if (nameA > nameB) {
                        return -1;
                    }
                    return 0;
                })

                this.setState({ filteredResult: emailDesc })
                break;
            
            case 'dobAsc':
                let dobAsc = this.state.filteredResult;

            dobAsc.sort((a,b) => {
                let dobA = a.dob.date.slice(0,10);
                let dobB = b.dob.date.slice(0,10);
                if (dobA < dobB ) {
                    return -1;
                }
                if (dobA > dobB) {
                    return 1;
                }
                    return 0;
            })
            this.setState({filteredResult: dobAsc})
            break;

            case "dobDesc":
                let dobDesc = this.state.filteredResult;
            dobDesc.sort((a,b)=> {
                let dobA = a.dob.date.slice(0,10);
                let dobB = b.dob.date.slice(0,10);
                if (dobA < dobB ) {
                    return 1;
                }
                if (dobA > dobB) {
                    return -1;
                }
                    return 0;
            })
            this.setState({filteredResult: dobDesc})
            break;
}
        
 
    }


    render() {
        return (
            <div>
                <div className="dataTable input-group mb-3">
                    <span className="input-group-text btn-dark text-light" id="basic-addon1">Search</span>
                    <input value={this.state.search} type="text" className="form-control" placeholder="Search for a user by name " name='search' onChange={this.handleInputChange} />
                    <button className="btn btn-outline-secondary btn-dark text-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Sort</button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li><a onClick={this.handleSort} name="firstNameAsc" className="dropdown-item" href="#">First Name (a-z)</a></li>
                        <li><a onClick={this.handleSort} name="firstNameDesc" className="dropdown-item" href="#">First Name (z-a)</a></li>
                        <li><a onClick={this.handleSort} name="lastNameAsc" className="dropdown-item" href="#">Last Name (a-z)</a></li>
                        <li><a onClick={this.handleSort} name="lastNameDesc" className="dropdown-item" href="#">Last Name (z-a)</a></li>
                        <li><a onClick={this.handleSort} name="emailAsc" className="dropdown-item" href="#">Email (a-z)</a></li>
                        <li><a onClick={this.handleSort} name="emailDesc" className="dropdown-item" href="#">Email (z-a)</a></li>
                        <li><a onClick={this.handleSort} name="dobAsc" className="dropdown-item" href="#">DOB (Ascending)</a></li>
                        <li><a onClick={this.handleSort} name="dobDesc" className="dropdown-item" href="#">DOB (Descending)</a></li>
                    </ul>
                </div>
               
                
                <DataTable filteredResults={this.state.filteredResult} />
            </div>   
        );
    }
}

export default PersonList;