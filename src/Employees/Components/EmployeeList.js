import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class EmployeeList extends React.Component {
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
    let dataUrl = "https://gist.githubusercontent.com/hardiksaraf29/657a177f6648f2af548cb1ed9a0d2829/raw/7c3b2acdb9f5001a3a81b594ce0c8f2b6eeded69/Employees-03-02-2021"
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
                <h1 className="text-success">User Data</h1>
                <p className="text-info">Laboris id excepteur nostrud labore nostrud labore enim amet cillum exercitation veniam in proident.</p>

                {
                  (this.state.users.length > 0) ?         //Object.keys(selectedEmployee).length > 0
                    <table className="table mt-3">
                      <thead class="thead-dark">
                        <tr>
                          <th scope="col">S.No.</th>
                          <th scope="col">Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Gender</th>
                          <th scope="col">Ip Address</th>
                        </tr>
                      </thead>
                      <tbody className="bg-light">

                        {
                          this.state.users.map((user) => {
                            return (
                              <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>
                                  <Link to={`/Employee/${user.id}`} className="text-primary">
                                    {user.first_name} {user.last_name}
                                  </Link>
                                </td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>{user.ip_address}</td>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </table>
                    : null}
              </div>
            </div>
          </div>
        </section>


      </React.Fragment>
    );
  }
}

export default EmployeeList;
