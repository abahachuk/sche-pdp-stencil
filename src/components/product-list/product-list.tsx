import { Component } from '@stencil/core';

@Component({
    tag: 'product-list'
})
export class ProductList {

    render() {
        return [
            <ul>
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
        </ul>
       ];
    }
}
