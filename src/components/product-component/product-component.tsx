import '@stencil/router';
import { Component } from '@stencil/core';

@Component({
  tag: 'product-component',
  styleUrl: 'product-component.css'
})
export class ProductComponent {
  render() {
    return [
      <div class="page-header">
        <h1>Welcome to Stencil Starter</h1>
      </div>,
      <nav class="page-nav">
        <stencil-route-link url="/">List</stencil-route-link>
        <stencil-route-link url="/page-1">Page 1</stencil-route-link>
      </nav>,
      <stencil-router>
        <stencil-route url="/" component="product-list" exact={true} />
        <stencil-route url="/page-1" component="product-details" />
      </stencil-router>
    ];
  }
}
