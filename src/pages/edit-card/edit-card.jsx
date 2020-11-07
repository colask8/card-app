import { Button, FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core';
import React from 'react';
import CardComponent from '../../components/card';

export class EditCard extends React.Component {
    constructor() {
        super();
        this.state = {
            id: null,
            name: '',
            cardNo: '',
            expiry: '',
        }
    }

    componentDidMount() {
        let page_type = this.props.match.params['type'];
        if (page_type === 'edit') {
            let card_id = this.props.match.params['id'];
            this.setState({...this.getCard(card_id)});
        }
    }

    handleSubmit = () => {
        let page_type = this.props.match.params['type'];
        const {id, name, cardNo, expiry} = this.state
        switch(page_type){
            case 'add':
                this.props.addCard(name, cardNo, expiry);
                break;
            case 'edit':
                this.props.editCard(id, name, cardNo, expiry)
                break;
            default:
                break;
        }
    }

    isCorrectCard = () => {
        let first_num = this.state.cardNo.toString().charAt(0);
        console.log(first_num)
        return first_num === '4' || first_num === '5' || first_num === '6'
    }

    isCorrectDate = () => {
        let d = new Date();
        let currentYear = d.getFullYear();
        let currentMonth = d.getMonth() + 1;
        console.log(currentMonth)

        let expir = this.state.expiry.split('/')
        let month = expir[0];
        let year = expir[1]
        console.log(month, year)

        if ( month === '' && typeof year === 'undefined') {
            return false;
        } else if (year < currentYear || (year === currentYear && month < currentMonth)) {
            console.log(year === currentYear && month < currentMonth);
            return false;
        }
        return true;
    }

    isDisabled = () => {
        return !(this.isCorrectDate() || this.isCorrectCard())
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const {name, cardNo, expiry} = this.state;

        return (
            <div style={{width: '800px', margin: 'auto'}}>
                <div className={'card'}>
                    <CardComponent name={name} cardNo={cardNo} expiry={expiry} />
                </div>
                <form > 
                <div style={{width: '100%'}}>
                    <FormControl style={{width: '100%'}}>
                        <InputLabel required htmlFor={'name'}>Name</InputLabel>
                        <Input
                            name='name'
                            value={name}
                            onChange={this.handleChange}
                            inputProps={{
                                id: 'name'
                            }}
                        />
                    </FormControl>
                    </div>
                    <div style={{width: '100%'}}>
                    <FormControl style={{width: '100%'}}>
                        <InputLabel required htmlFor={'cardNumber'}>Card Number</InputLabel>
                        <Input
                            name='cardNo'
                            value={cardNo}
                            onChange={this.handleChange}
                            inputProps={{
                                id: 'cardNumber'
                            }}
                        />
                        { !this.isCorrectCard() && <FormHelperText id="component-error-text">Wrong Card Number</FormHelperText>}
                    </FormControl>
                    </div>

                    <div style={{width: '100%'}}>
                    <FormControl style={{width: '100%'}}>
                        <InputLabel required htmlFor={'expires'}>Expires On</InputLabel>
                        <Input
                            name='expiry'
                            value={expiry}
                            onChange={this.handleChange}
                            inputProps={{
                                id: 'expires'
                            }}
                        />
                        { !this.isCorrectDate() && <FormHelperText id="component-error-text">Wrong date</FormHelperText>}
                        
                    </FormControl>
                    </div>
                    <Button
                        variant='outlined'
                        onSubmit={this.onSubmit}
                        disabled={this.isDisabled()}
                    >Submit</Button>
                </form>
            </div>
        )
    }
}