import React from 'react';
import CheckboxOrRadioGroup from '../component/CheckboxOrRadioGroup';
import SingleInput from '../component/SingleInput';
import TextArea from '../component/TextArea';


export default class AccountContainer extends React.Component
{
    constructor(props){
        super(props);
        this.state =     {
                            Name:'',
                            Age:[],
                            Gender:[],
                            BankName:[],
                            Address:'',
                         };

                         this.handleFullNameChange=this.handleFullNameChange.bind(this);
                         this.handleAgeChange=this.handleAgeChange.bind(this);
                         this.handlegenderSelect=this.handlegenderSelect.bind(this);
                         this.handleBankSelection=this.handleBankSelection.bind(this);
                         this.handleAddressChange=this.handleAddressChange.bind(this);
                         this.handleClearForm=this.handleClearForm.bind(this);
                         this.handleFormSubmit=this.handleFormSubmit.bind(this);
                      };

       

    componentDidMount() {
		                    fetch('./form_db.json')
		                    .then(res => res.json())
			                .then(data => {
				                            this.setState({
                                                                Name:data.Name,
                                                                Age:data.Age,
                                                                Gender:data.Gender,
                                                                BankName:data.BankName,
                                                                Address:data.Address,
                                                               

							                             });
			                              });
                        }

   
    handleFullNameChange(e) {
		this.setState({ Name: e.target.value }, () => console.log('name:', this.state.Name));
    }
    
    handleAgeChange(e) {
        this.setState({ age: e.target.value }, () => console.log('age', this.state.Age));
    }

    handlegenderSelect(e) {
		this.setState({ Gender: [e.target.value] }, () => console.log('Gender', this.state.Gender));
    }

    handleBankSelection(e) {
		this.setState({ BankName: [e.target.value] }, () => console.log('BankName', this.state.BankName));
    }
  
    handleAddressChange(e) {
	
		this.setState({ Address: e.target.value }, () => console.log('Address', this.state.Address));
    }
    handleClearForm(e) {
		e.preventDefault();
		this.setState({
            Name:'',
            Age:[],
            Gender:[],
            BankName:[],
            Address:'',
           
		});
	}
	handleFormSubmit(e) {
		e.preventDefault();

		const formPayload = {
            Name:this.state.Name,
            Age:this.state.Age,
            Gender:this.state.Gender,
            BankName:this.state.BankName,
            Address:this.state.Address,
		};

		console.log('Send this in a POST request:', formPayload);
		this.handleClearForm(e);
	}


    render(){
                return(
                        <form className="container" onSubmit={this.handleFormSubmit}>
                            <h6> Account Form </h6>
                            <SingleInput
                                        inputType={'text'}
                                        title={'Full Name'}
                                        name={'name'}
                                        controlFunc={this.handleFullNameChange}
                                        content={this.state.Name}
                                        placeholder={'Type first and last name '} />

                            
                            <SingleInput
                                        inputType={'number'}
                                        title={'Age'}
                                        name={'age'}
                                        controlFunc={this.handleAgeChange}
                                        content={this.state.age}
                                        placeholder={'Enter your Age'} />

                            
                            <CheckboxOrRadioGroup
                                        title={'Please Select your Gender'}
                                        setName={'Gender'}
                                        controlFunc={this.handlegenderSelect}
                                        type={'radio'}
                                        options={this.state.Age}
                                        selectedOptions={this.state.Age} />

                            <CheckboxOrRadioGroup
                                        title={'Select Bank Where you want to open Account?'}
                                        setName={'BankName'}
                                        type={'checkbox'}
                                        controlFunc={this.handleBankSelection}
                                        options={this.state.BankName}
                                        selectedOptions={this.state.BankName} />
                            
                            <TextArea
                                        title={'Address'}
                                        rows={5}
                                        resize={false}
                                        content={this.state.Address}
                                        controlFunc={this.handleAddressChange}
                                        placeholder={'Address'} />

                            <input
                                        type="submit"
                                        className="btn btn-primary float-right"
                                        value="Submit"/>

                            <button
                                        className="btn btn-link float-left"
                                        onClick={this.handleClearForm}>Clear form</button>
                                    
                                        
                        </form>
                      );
            }
}