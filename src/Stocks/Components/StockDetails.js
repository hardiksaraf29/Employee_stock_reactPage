import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom'

class StockDetails extends React.Component {
    constructor(props) {
			super(props);
			this.state = {
				StockId : this.props.match.params.stock_id,
				selectedStock : {},
				errorMsg : ""
			}
    }

    componentDidMount()
    {
      this.getEmployee()
    }

    getEmployee=()=>
    {
        let dataUrl = "https://gist.githubusercontent.com/hardiksaraf29/8a45a45d7ab8086de1b4ab7b862d72c8/raw/9b6400909d55d239a3589b2f2cfb67e497246ca2/StockData-04-02-2021"
        Axios.get(dataUrl).then((response)=>
        {
            let employees = response.data;            
            let employee=employees.find(employee => {
                return employee.id==this.state.StockId

            })
            this.setState({
                ...this.state,
                selectedStock : employee
            })
        }).catch()

    }


    render() {
        let {selectedStock} = this.state
        return (
            <React.Fragment>
                <div className="container mt-5">
                    <h2>Stock Detail</h2>
                    <p>Lorem culpa culpa minim sint pariatur sunt eu sit.</p>
                    <div className="card">
                        <div className="card-header bg-success text-white">
                            <h2>{selectedStock.name}</h2>
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    Name : {selectedStock.name}                                    
                                </li>
                                <li className="list-group-item">
                                    Industry : {selectedStock.industry}                                    
                                </li>
                                <li className="list-group-item">
                                    Market : {selectedStock.market}                                    
                                </li>
                                <li className="list-group-item">
                                    Sector : {selectedStock.sector}                                    
                                </li>                                
                                <li className="list-group-item">
                                    Currency : {selectedStock.currency}                                    
                                </li>                                

                            </ul>

                            <Link to="/Stock" className="btn btn-primary">Back</Link>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default StockDetails;

