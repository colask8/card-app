import React from 'react';
import {ReactComponent as CardSVG} from './card-svg.svg';
import './index.css';

const CardComponent = ({name, cardNo, expiry}) => {
    let card_type = (cardNo) => {
        let first_num = cardNo.toString().charAt(0);

        const urls = {'4': 'visa', '5': 'master', '6': 'discover'}
        console.log(urls[first_num]);
        return urls[first_num];
    };

    let print_cardNo = (cardNo) => {
        let num = cardNo.toString();
        num = num.match(/.{1,4}/g);
        return num.join(' ')
    }
    return (
        <div className={'card_container'}>
            <CardSVG />
            <img className={'card_chip'} src={process.env.PUBLIC_URL + '/images/chip.png'} alt='chip' />
            { cardNo && typeof cardNo !== 'undefined' &&
                <img className={'card_type'} src={`/images/${card_type(cardNo)}.png`} alt={card_type(cardNo)} />
            }
            <p className={'card_holder'}>{name}</p>
            { cardNo && typeof cardNo !== 'undefined' &&
                <p className={'card_number'}>{print_cardNo(cardNo)}</p>
            }
            <p className={'card_expiry'}> {expiry}</p>
        </div>
    )
}

export default CardComponent;

