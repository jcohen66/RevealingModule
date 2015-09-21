/*
 * @Author: jcohen66
 * @Date:   2015-08-22 23:46:26
 * @Last Modified by:   jcohen66
 * @Last Modified time: 2015-08-23 09:33:30
 */

'use strict';



var config = {};

module.init({
    colors: ['#FFF', '#000']
});

module.ask();

var basket = [{
    name: 'How to draw comic books',
    price: 10
}, {
    name: 'Programming in basic',
    price: 5
}];

var discount = 0.2;
var discountedBasket = basket.map(function(item) {
    item.price *= (1 - discount);
    return item;
});

console.log(discountedBasket);
