import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
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

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const {name, cardNo, expiry} = this.state;

        return (
            <div>
                <div className={'card'}>
                    <CardComponent name={name} cardNo={cardNo} expiry={expiry} />
                </div>
                <form>
                    <FormControl>
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
                    <FormControl>
                        <InputLabel required htmlFor={'cardNumber'}>Card Number</InputLabel>
                        <Input
                            name='cardNo'
                            value={cardNo}
                            onChange={this.handleChange}
                            inputProps={{
                                id: 'cardNumber'
                            }}
                        />
                    </FormControl>
                    <FormControl>
                        <InputLabel required htmlFor={'expires'}>Expires On</InputLabel>
                        <Input
                            name='expiry'
                            value={expiry}
                            onChange={this.handleChange}
                            inputProps={{
                                id: 'expires'
                            }}
                        />
                    </FormControl>
                    <Button
                        variant='outlines'
                        onSubmit={this.onSubmit}
                        disabled={this.isDisabled}
                    >Submit</Button>
                </form>
            </div>
        )
    }
}