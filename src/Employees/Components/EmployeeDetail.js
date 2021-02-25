import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom'

class EmployeeDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            EmployeeId : this.props.match.params.emp_id,                //useParams.id()
            selectedEmployee : {},
            errorMsg : ""
        }
    }

    componentDidMount()
    {
        this.getEmployee()
    }

    getEmployee=()=>
    {
        let dataUrl = "https://gist.githubusercontent.com/hardiksaraf29/657a177f6648f2af548cb1ed9a0d2829/raw/7c3b2acdb9f5001a3a81b594ce0c8f2b6eeded69/Employees-03-02-2021"
        Axios.get(dataUrl).then((response)=>
        {
            let employees = response.data;            
            let employee=employees.find(employee=>{
                return employee.id==this.state.EmployeeId

            })
            this.setState({
                ...this.state,
                selectedEmployee : employee
            })
        }).catch()
    }


    render() {
        let {selectedEmployee} = this.state
        return (
            <React.Fragment>
                <div className="container mt-5">
                    <h2>USer Detail</h2>
                    <p>Lorem culpa culpa minim sint pariatur sunt eu sit.</p>
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h2>{selectedEmployee.first_name}</h2>
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    Name : {selectedEmployee.first_name}                                    
                                </li>
                                <li className="list-group-item">
                                    Email : {selectedEmployee.email}                                    
                                </li>
                                <li className="list-group-item">
                                    Gender : {selectedEmployee.gender}                                    
                                </li>
                                <li className="list-group-item">
                                    Ip address : {selectedEmployee.ip_address}                                    
                                </li>                                
                            </ul>

                            <Link to="/Employee" className="btn btn-primary">Back</Link>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default EmployeeDetail;

