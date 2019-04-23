import {Component, State} from '@stencil/core';

@Component({
  tag: 'product-details',
  styleUrl: 'product-details.css'
})
export class ProductDetails {

  @State() content: any = {};
  url: String;

  componentWillLoad() {
    return fetch('../../../mocks/charger.json')
        .then(res => res.json())
        .then(data => {
          this.content = data;
        });
  }

  render() {
    return [
        <div class="wrapper">
          <div class="heading flex">
            <img class="image" src={this.content.image} />
            <div>
              <p>{this.content.name}</p>
              <p>{this.content.description}</p>
              <p>{this.content.type}</p>
            </div>
          </div>
          <div>
            <div class="flex align-horizontally">
                {Object.keys(this.content.information).map(key => {
                  const url = '/#' + key;

                  return <a href={url}>
                      {key}
                  </a>
                })}
            </div>
            <div>
                {Object.entries(this.content.information).map(([chapterKey, chapterValue]) => {

                    return <div>
                             <div id={chapterKey}>{chapterKey}</div>

                               {Object.entries(chapterValue).map(([itemKey, itemValue]) => {
                                   return <div>
                                       <div>{itemKey}</div>
                                       {Object.entries(itemValue).map(([subkey, subValue]) => {
                                           return <div class="flex align-horizontally"><p>{subkey}</p><p>{subValue}</p></div>
                                       })
                                       }
                                   </div>
                               })}
                             </div>
                }
                )}
            </div>
          </div>
        </div>
    ];
  }
}
