import React from 'react';
import {ReactComponent as CardSVG} from './card-svg.svg';
import styles from './index.css';

const CardComponent = (name, cardNo, expiry) => {
    return (
        <div>
            <CardSVG />
            <div className={styles.card_content}>

            </div>
        </div>
    )
}

export default CardComponent;

