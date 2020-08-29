 selectedDish: null

 onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
    }

  <Menu dishes={this.state.dishes} 
        onClick={(dishId) => this.onDishSelect(dishId)} />
       <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />



       <p>Leader {leader.name}</p>

         


                <div className="row">
                    <div className="col-2">
                        <img src={leader.image} />
                    </div>
                    <div className="col-10">
                        <h3>{leader.name}</h3>
                        
                    </div>
                </div>





                <div className="row">
                         <div className="col-2">
                            <img src={leader.image} width="70%" align="middle"  />
                        </div>
                        <div className="col-9">
                            <h4>{leader.name}</h4>
                            <p>{leader.designation}</p>
                            <p>{leader.description}</p>
                            
                        </div>
                       
                        
                        
                    </div>





                    const leaders = props.leaders.map((leader) => {
            return (
                    
            );
        });




                     this.state ={
        
    };


    this.state ={
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }



             handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] : value
        });
    }


     handleBlur = (field) => evt => {
        this.setState({
            touched: { ...this.state.touched, [field] : true}
        });
    }


    validate(firstname, lastname, telnum, email) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
        };

        if(this.state.touched.firstname && firstname.length < 3 )
            errors.firstname = 'First Name should be >= 3 characters';
        else if(this.state.touched.firstname && firstname.length > 10)
            errors.firstname = 'First Name should be <= 10 characters';

        if(this.state.touched.lastname && lastname.length < 3 )
            errors.lastname = 'Last Name should be >= 3 characters';
        else if(this.state.touched.lastname && lastname.length > 10)
            errors.lastname = 'Last Name should be <= 10 characters';

        const reg = /^\d+$/;

        if(this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. Number should contain only numbers';

        if(this.state.touched.email && email.split('').filter(x => x ==='@').length != 1)
            errors.email = 'Email should contain an @';

        return errors;
    }




    
export const initialState = {
	dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};



export const Reducer = (state = initialState, action) => {
	return state;
};


    const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);


    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);


    