import React from 'react';
import {numberFormat} from './numberFormat';

export const Item = ({item, cartE}) => {

    item.count = 1;
    item.summ = item.count * item.price;

    const pushItem = () => {

        const {cartElement, setCartElement} = cartE;

        const newElement = item.name;

        if(cartElement.has(newElement)) {
            const e = cartElement.get(newElement);
            ++e.count;
            item.summ =item.count * item.price;
            
        } 

        const newCart = cartElement.set(item.name, item);

        setCartElement(newCart);

       console.log(cartElement);
             
    }

    return(
        <div className="shop__element">
        <div className="shop__title" onClick={pushItem}>{item.name}</div>
        <div className="shop__price" onClick={pushItem}>{numberFormat(item.price)}</div>
        <div className="shop__button" onClick={pushItem}>+ </div>
    </div>
)};
    
