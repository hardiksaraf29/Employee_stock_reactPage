import React from 'react';
import './About.css'

class About extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<React.Fragment>
				<section>
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-6 m-5">
								<h3 className="display-3">About Us</h3>
								<p>Do cupidatat anim dolore ipsum sunt mollit labore culpa ut elit aliquip aute ut incididunt. Quis in sit deserunt fugiat. Elit et magna nostrud incididunt nulla voluptate cillum commodo Lorem. Reprehenderit enim laboris anim occaecat consequat adipisicing duis qui mollit minim officia adipisicing excepteur. Et occaecat aliqua fugiat est aliquip magna.</p>
								<img src="https://www.gdnonline.com/gdnimages/20201104/20201104101800student.JPG"
									className="img-fluid mt-5"
									id="aboutImg" />
							</div>
							<div className="col-md-4 m-5">
								<img src="https://cdn4.vectorstock.com/i/1000x1000/65/58/office-work-pattern-background-on-a-blue-vector-17016558.jpg" 
									id="aboutImg" className="img-fluid" width="100%"/>
								<p className="lead mt-5">Do cupidatat anim dolore ipsum sunt mollit labore culpa ut elit aliquip aute ut incididunt. Quis in sit deserunt fugiat. Elit et magna nostrud incididunt nulla voluptate cillum commodo Lorem. Reprehenderit enim laboris anim occaecat consequat adipisicing duis qui mollit minim officia adipisicing excepteur. Et occaecat aliqua fugiat est aliquip magna.</p>
									
							</div>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default About;

