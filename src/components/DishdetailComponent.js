import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardImgOverlay, CardText, CardTitle, 
	Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Input, Label, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
	

	const required = (val) => val && val.length;
	const maxLength = (len) => (val) => !(val) || (val.length <= len);
	const minLength = (len) => (val) => !(val) || (val.length >= len);
	
	class CommentForm extends Component {

			constructor(props) {
				super(props);
				this.state = {
					isModalOpen: false
				};
				this.toggleModal = this.toggleModal.bind(this);
				this.handleSubmit = this.handleSubmit.bind(this);
			}

			toggleModal() {
				this.setState({
					isModalOpen: !this.state.isModalOpen
				});
			}

			 handleSubmit(values) {
		        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
		        
		    }

			render() {
					return(
						<>
							<Button outline onClick={this.toggleModal}>
	          				<span className="fa fa-pencil fa-lg"> Submit Comment </span>
	          				</Button>


	          				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
				       			<ModalHeader toggle={this.toggleModal}> Submit Comment </ModalHeader>
				       			<ModalBody>
				       				<LocalForm onSubmit={(values) => this.handleSubmit(values)}>
				       					<Row className="form-group">
				       						<Col>
					       						<Label htmlFor="rating">Rating</Label>
					       						 <Control.select model=".rating" name="rating"
	                                  				className="form-control">
	                                  				<option>1</option>
	                                  				<option>2</option>
	                                  				<option>3</option>
	                                  				<option>4</option>
	                                  				<option>5</option>
	                                  			 </Control.select>
	                                  		</Col>
				       					</Row>
				       					<Row className="form-group">
				       						<Col>
					       						<Label htmlFor="author">Your Name</Label>
					       						<Control.text model=".author" id="author" name="author" 
					       							placeholder="Your Name" className="form-control"
					       							validators={{
	                                       				 required,minLength: minLength(3), maxLength: maxLength(15)
	                                  			}}/>
	                                  			<Errors
				                                    className="text-danger"
				                                    model=".author"
				                                    show="touched"
				                                    messages={{
				                                        required: 'Required',
				                                        minLength: 'Must be greater than 2 char',
				                                        maxLength: 'Must be 15 char or less'
	                                    		}} />
	                                    	</Col>
				       					</Row>
				       					<Row className="form-group">
				       						<Col>
					       						<Label htmlFor="comment">Comment</Label>
					       						<Control.textarea model=".comment" id="comment" name="comment" rows="6"
	                                   			className="form-control"/>
	                                   		</Col>
				       					</Row>
				       					<Button type="submit" value="submit" color="primary">Submit</Button>
				       				</LocalForm>
				       			</ModalBody>
	       					</Modal>
	       				</>
					);
			}

	}

	function RenderComments({comments, addComment, dishId}) {
		if(comments == null) {
			return(<div></div>)
		}
		else {
			var cmnts = comments.map((comment) => {
				return(
					<li key={comment.id}>
	                    <p>{comment.comment}</p>
	                    <p>-- {comment.author},
	                    &nbsp;
	                    {new Intl.DateTimeFormat('en-US', {
	                            year: 'numeric',
	                            month: 'short',
	                            day: '2-digit'
	                        }).format(new Date(comment.date))}
	                    </p>
                	</li>
				);
			});
		}
		return(
			<div className="col-12 col-md-5 m-1">
				<h4>Comments</h4>
				<ul className="list-unstyled">
					{cmnts}
				</ul>
				<CommentForm dishId={dishId} addComment={addComment}/>
			</div>
		)
	}

	function RenderDish({dish}) {
		if(dish == null){
			return(<div></div>)
		}
		else{
			return(
				<div className="col-12 col-md-5 m-1">
					<Card>
						<CardImg width="100%" src={dish.image} alt={dish.name} />
						<CardBody>
							<CardTitle>{dish.name}</CardTitle>
							<CardText>{dish.description}</CardText>
						</CardBody>
					</Card>
				</div>	
			)
		}
		
	}

	const DishDetail = (props) => {
		const dish= props.dish
		if(dish == null) {
			return(<div></div>)
		}
		else {
			const dishItem = <RenderDish dish = {dish} />
			const dishComments = <RenderComments comments = {props.comments} 
									addComment={props.addComment}
									dishId={props.dish.id}/>
			return(

				<div className="container">
					<div className="row">
						<Breadcrumb>
							<BreadcrumbItem><Link to='/menu'>Home</Link></BreadcrumbItem>
							<BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
							<div className="col-12">
								<h3>{props.dish.name}</h3>
								<hr />
							</div>
						</Breadcrumb>
					</div>
					<div className="row">
						{dishItem}
						{dishComments}
					</div>
				</div>

			)	
		}
	}
		

export default DishDetail;