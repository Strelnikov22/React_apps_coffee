import React from 'react';
import { numberFormat } from './numberFormat';

// export const Cart = ({ cartElement, setCartElement }) => {

        // if(!cartElement){
        //     return (
        //         <div className="cart__element">
        //             {
        //                 cartElement.map(elem => {
        //                     const { name, price, count, summ, id } = elem;
        //                     return xml(name, price, count, summ, id);
        //                 })
        //             }
        //         </div>
        //     )
        // }else{
        //     return (
        //         <div className="cart__element">
        
        //             {
        //                 cartElement.map(elem => {
        //                     const { name, price, count, summ, id } = elem;
        //                     return xml(name, price, count, summ, id);
        //                 })
        //             }
        
        //         </div>
        
        //     )
        // }
    
// };

// const xml = (name, price, count, summ, id) => (
//     <>
//         <div className="cart__del">&times; </div>
//         <div className="cart__title">{name}</div>
//         <div className="cart__count">
//             <div className="cart__minus">-</div>
//             <div className="cart__centr">{count}</div>
//             <div className="cart__plus">+</div>
//         </div>
//         <div className="cart__price">{numberFormat(price)}</div>
//         <div className="cart__summ">{numberFormat(summ)}</div>
//     </>
// );

export const Cart = ({ cartE }) => {

    const {cartElement, setCartElement} = cartE;

   
   for(const elem of cartElement){
       console.log(elem)
   }


    return(
        
    <div className="cart__element">
            
            <div className="cart__del">&times; </div>
            <div className="cart__title"></div>
          <div className="cart__count">
               <div className="cart__minus">-</div>
               <div className="cart__centr"></div>
              <div className="cart__plus">+</div>
         </div>
          <div className="cart__price"></div>
         <div className="cart__summ"></div>
         </div>
   
    )
}
    
