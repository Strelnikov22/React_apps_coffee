import {useState} from 'react';

export const CartHook = () => {
    const [cartElement, setCartElement] = useState(new Map());

    return {cartElement, setCartElement};
}