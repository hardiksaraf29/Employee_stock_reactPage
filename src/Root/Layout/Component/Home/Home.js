import React from 'react';
import landingImg from '../../../../assets/images/card_3.jpg';
import './Landing.css';



class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <div id="landingImg">
                    </div>
                    {/* <img src={landingImg} width="100%" id="welcomeImg" /> */}
                    <div id="imgCaption" className="carousel-caption text-white m-auto">
                        <h1 className="display-4">Welcome to Technology kudos</h1>
                        <p>Reprehenderit consectetur qui veniam qui nulla reprehenderit consectetur. Ea est ea consequat fugiat nostrud anim dolor dolor elit.</p>
                        <button className="btn btn-white" id="HomeBtn"> Explore </button>
                        <button className="btn btn-white" id="HomeBtn"> Features</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;

