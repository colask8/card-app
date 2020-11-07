import React from 'react';
import CardComponent from '../../components/card';

export class Dashboard extends React.Component {

    render() {
        
        return (
            <div>
                { typeof this.props.cards !== 'undefined' && this.props.cards.map((card, ind) => {
                    return (
                        <CardComponent name={card.name} cardNo={card.cardNo} expiry={card.expiry} key={ind} />
                    )
                })}
            </div>
        )
    }
}

export default Dashboard;