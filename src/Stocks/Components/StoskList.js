import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class StockList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            errorMsg: ""
        }
    }

    componentDidMount() {
        this.getAllDetail()
    }

    getAllDetail = () => {
        let dataUrl = "https://gist.githubusercontent.com/hardiksaraf29/8a45a45d7ab8086de1b4ab7b862d72c8/raw/9b6400909d55d239a3589b2f2cfb67e497246ca2/StockData-04-02-2021"
        Axios.get(dataUrl).then(
            (response) => {
                this.setState({
                    ...this.state,
                    users: response.data
                })
                // console.log(this.state.users)
            }
        ).catch(
            (error) => {
                this.setState({
                    ...this.state,
                    errorMsg: error
                })
                console.log(error)

            }
        )
    }

    render() {
        return (
            <React.Fragment>
                <section>
                    <div className="container m-5">
                        <div className="row">
                            <div className="col">
                                <h1 className="text-primary">Stock Data</h1>
                                <p className="text-info">Laboris id excepteur nostrud labore nostrud labore enim amet cillum exercitation veniam in proident.</p>

                                {
                                    (this.state.users.length >0 )?
                                    <table className="table mt-3">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col">S.No.</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Industry</th>
                                                <th scope="col">Market</th>
                                                <th scope="col">Sector</th>
                                                <th scope="col">Currency</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-light">
                                            {
                                                this.state.users.map((user) => {
                                                    return (
                                                        <tr key={user.id}>
                                                            <th scope="row">{user.id}</th>
                                                            <td>
                                                                <Link to={`/Stock/${user.id}`} className="text-primary">
                                                                    {user.name}
                                                                </Link>
                                                            </td>
                                                            <td>{user.industry}</td>
                                                            <td>{user.market}</td>
                                                            <td>{user.sector}</td>
                                                            <td>{user.currency}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                :null}
                            </div>
                        </div>
                    </div>
                </section>


            </React.Fragment>
        );
    }
}

export default StockList;
